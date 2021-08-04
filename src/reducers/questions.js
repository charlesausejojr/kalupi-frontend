import { FETCH_ALL, CREATE } from '../constants/actionTypes';

// state = [], data/action
// our action is an object with a data and a type 
const reducer = (questions = [], action) => {
    switch (action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            console.log(action.payload);
            // will always return a state
            return [...questions, action.payload];
        default:
            return questions;
    }
};

export default reducer;