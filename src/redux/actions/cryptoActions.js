import * as actionTypes from '../constants/actionTypes'

export const setCryptos = (data) => {
  return {
    type: actionTypes.FETCH_CRYPTO_DATA,
    payload: data
  }
}

export const searchCrypto = (search) => {
  return { 
    type: actionTypes.SEARCH_CRYPTO_DATA,
    payload: search
  }
}