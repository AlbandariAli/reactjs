import { combineReducers } from "redux";

const counterReducers = (state = 0, action) =>{
switch (action.type){
    case 'INCREMENT':
         return state + 1;
    case 'DECREMENT':
         return state - 1;
    default:
         return state;
}
};
 const rootReducers = combineReducers({
    counter: counterReducers,
 });
 export default rootReducers;

