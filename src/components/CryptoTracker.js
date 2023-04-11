import CryptoTrackerTable from './CryptoTrackerTable';
// import CryptoTrackerLogo from './CryptoTrackerLogo';
import CryptoTrackerInput from './CryptoTrackerInput';
import CryptoTrackerHeader from './Header/CryptoTrackerHeader';

import styles from '../App.module.css';

import { useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import { searchCrypto, setCryptos } from '../redux/actions/cryptoActions';
import axios from 'axios';


const CryptoTracker = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(); // refers to the container which contains input element

  useEffect(() => {
    const fetchCryptos = async () => {
    const { data } = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    dispatch(setCryptos(data));
    };
    fetchCryptos().then(() => console.log("Veriler çekildi..."));
    
    const searchInput = inputRef.current.firstElementChild.firstElementChild;
    searchInput.addEventListener("keyup", (e) => dispatch(searchCrypto(e.target.value))) // when the input changes, it updates the searchCrypto state
  }, []);


  return (
    <div className={styles.ct__app}>
      <CryptoTrackerHeader>
        {/* <CryptoTrackerLogo /> */}
        <CryptoTrackerInput ref={inputRef} />
      </CryptoTrackerHeader>
      <CryptoTrackerTable />
    </div>
  );
};

export default CryptoTracker;
