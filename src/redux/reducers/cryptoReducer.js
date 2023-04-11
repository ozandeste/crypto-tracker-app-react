import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = { cryptoData: [{}], searchedInput: ""}

export const fetchCryptoDataReducer = (state = INITIAL_STATE.cryptoData, {type, payload}) => {
  switch (type) {
    case actionTypes.FETCH_CRYPTO_DATA:
      return payload;
    default:
      return state;
  }
}

export const searchCryptoDataReducer = (state = INITIAL_STATE.searchedInput, {type, payload}) => {
  switch (type) {
    case actionTypes.SEARCH_CRYPTO_DATA:
      return payload;
    default:
      return state;
  }
}
