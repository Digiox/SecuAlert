import  { createStore, applyMiddleware } from "redux";
import userDatas from './reducers/usersDataReducer';
import { persistStore, persistReducer } from 'redux-persist'
import {AsyncStorage} from 'react-native';


const persistConfig = {
    key: 'loggedUser',
    storage: AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, userDatas)

  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
export { store, persistor }
  