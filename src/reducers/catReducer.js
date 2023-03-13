import { types } from "../types/types";


const initialState = {
    randomCat: [{
        id: 1,
        url: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
      }],
    allCats: []
}

export const catReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.getCat:
            return {
                ...state,
                randomCat: [...action.payload]
            } 
            
        case types.getAllCats:    
            return {
                ...state,
                allCats: [...action.payload]
            }

        default:
            return state;
    }
}