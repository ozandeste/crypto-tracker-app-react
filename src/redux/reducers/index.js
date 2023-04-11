import { combineReducers } from "redux";
import  { fetchCryptoDataReducer, searchCryptoDataReducer }  from "./cryptoReducer";

export default combineReducers({ searchCryptos: searchCryptoDataReducer, cryptoList: fetchCryptoDataReducer  })