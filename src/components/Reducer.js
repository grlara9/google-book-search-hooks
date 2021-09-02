import {useReducer, useEffect} from 'react'
import axios from 'axios'

const ACTIONS = {
    REQUEST_DATA: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const URL ="https://www.googleapis.com/books/v1/volumes?q=java&maxResults=40"
const BASE = "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyesa&maxResults=40"
const reducer =(state, action)=>{
    switch(action.type){
        case ACTIONS.REQUEST_DATA:
            return{loading: true, jobs: []}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, books: action.payload.books}
        case ACTIONS.ERROR:
            return {...state, loading:false, books:[]}

        default:
            return state
    }
}
export default function useFetchBooks(params, page){

    const [state, dispatch] = useReducer(reducer, {books: [], loading: false, error: false})

    useEffect(()=>{
        const cancelToken = axios.CancelToken.source()
        dispatch({type: ACTIONS.MAKE_REQUEST })
        axios.get(URL, {cancelToken: cancelToken.token, params:{markdown: true, page,...params}})
        .then(response=>{
            console.log(response)
            dispatch({type: ACTIONS.GET_DATA, payload: {books: response.data.items}})
        }).catch(e=>{
            if(axios.isCancel(e)) return
          dispatch({type: ACTIONS.ERROR, payload: {error: e}})  }
   )
   return () => {
       cancelToken.cancel()
   }
    }, [params, page])

    useEffect(()=>{

        const search =(name, author)=>{

            const cancelToken = axios.CancelToken.source()
            dispatch({type: ACTIONS.MAKE_REQUEST})
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}+inauthor:${author}&maxResults=40`
            , {cancelToken: cancelToken.token, params:{markdown: true, page,...params}})
            .then(response=>{
                console.log(response)
                dispatch({type: ACTIONS.GET_DATA, payload: {books: response.data.items}})
            }).catch(e=>{
                if(axios.isCancel(e)) return
              dispatch({type: ACTIONS.ERROR, payload: {error: e}})  
            })
            
       

        
        
            search()
            return () => {
                cancelToken.cancel()
            }
        }}, [params, page])

    return state
      
}