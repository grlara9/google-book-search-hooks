import {useReducer} from 'react'

const ACTIONS = {
    REQUEST_DATA: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

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
export default function reducer(params, page){

    const [state, dispatch] = useReducer(reducer, {books: [], loading: false, error: false})
    return{
        books:[],
        loading:true,
        error: true
    }
}