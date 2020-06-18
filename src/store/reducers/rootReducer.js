import { combineReducers } from "redux";
import { infoReducer }  from './infoReducer';

const rootReducer = combineReducers({
    list: infoReducer,
});

export default rootReducer;