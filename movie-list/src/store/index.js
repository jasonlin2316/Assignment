import {createStore} from 'redux';
import data from "../data/moviedata.json";


const initialState = {
     myList: [...data.mylist],
     recommendationList: [...data.recommendations]
    
   
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "REMOVE_FROM_MYLIST":
            return Object.assign({}, state, {myList: state.myList.filter(v => v.id !== action.item.id)});
        case "ADD_TO_MYLIST":
            return Object.assign({}, state, {myList: [...state.myList, action.item]});
        default:
            return state;
    }
    
}

const store = createStore(reducer);

export default store;