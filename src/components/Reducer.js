const ACTIONS = {
    REQUEST_DATA: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error',
    USER_INPUT: 'user_input'
}

//const URL ="https://www.googleapis.com/books/v1/volumes?q=java&maxResults=40"
//const BASE_URL="https://www.googleapis.com/books/v1/volumes"
//const BASE= `https://www.googleapis.com/books/v1/volumes?q=${params}+inauthor:${params}&maxResults=40`

const reducer =(state, action)=>{
    switch(action.type){
        case ACTIONS.REQUEST_DATA:
            return{loading: true, jobs: []}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, books: action.payload.books}
        case ACTIONS.ERROR:
            return {...state, loading:false, books:[]}
       
        case ACTIONS.USER_INPUT:
            return {...state,
            [action.field]: action.payload,
        }
        default:
            return state
    }
}

export default reducer


   
    

   
