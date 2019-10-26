import  { createStore } from "redux";
import userDatas from './reducers/usersDataReducer';


export default createStore(userDatas)