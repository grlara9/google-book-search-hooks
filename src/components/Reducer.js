import { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState ={
  books: [], 
  loading: true }

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
}

//const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

//const BASE= `https://www.googleapis.com/books/v1/volumes?q=${params}+inauthor:${params}&maxResults=40`

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, books: [] }
    case ACTIONS.GET_DATA:
            return { ...state, loading: false, books: action.payload.books }
    case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, books: [] }
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
            return { ...state, hasNextPage: action.payload.hasNextPage }
    default:
            return state
    }
}
                    
    export default function useFetchJobs(params, page) {

        const [state, dispatch] = useReducer(reducer, initialState)
        
        
        useEffect(() => {
            const cancelToken1 = axios.CancelToken.source()
            dispatch({ type: ACTIONS.MAKE_REQUEST })
            axios.get("https://www.googleapis.com/books/v1/volumes?q=java&maxResults=40", {
                cancelToken: cancelToken1.token,
                params:{...params}
            }).then(res => {
                dispatch({ type: ACTIONS.GET_DATA, payload: { books: res.data.items } }) 
            }).catch(e => {
                if (axios.isCancel(e)) return
                dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
            })

            const cancelToken2 = axios.CancelToken.source()
            axios.get("https://www.googleapis.com/books/v1/volumes?q=java&maxResults=40", {
              cancelToken: cancelToken2.token,
              params: {  page: page + 1, ...params }
            }).then(res => {
              dispatch({ type: ACTIONS.UPDATE_HAS_NEXT_PAGE, payload: { hasNextPage: res.data.length !== 0 } }) 
            }).catch(e => {
              if (axios.isCancel(e)) return
              dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
            })
        
            return () => {
              cancelToken1.cancel()
              cancelToken2.cancel()
      
    }
  }, [params, page])
  
  return state
}