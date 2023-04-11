import React, { useEffect, useRef, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

export default function CryptoTrackerTable() {
  const { cryptoList } = useSelector((state) => state);
  const { searchCryptos } = useSelector((state) => state);

  const [filteredCryptos, setFilteredCryptos] = useState([]); // without redux because it's just a local state
  const [tableWidth, setTablewidth] = useState(window.innerWidth > 768 ? "80vw" : window.innerWidth);
  const [showTip, setShowTip] = useState(true);

  const windowRef = useRef(); // refers to window object


  // Filter crypto list while the input is changing
  useEffect(() => {
      const filterCryptos = async (nameOrSymbol) => {
        const list = cryptoList;
        const loweredNameOrSymbol = nameOrSymbol.toLowerCase();

        return new Promise((resolve, reject) =>
          resolve(
            setFilteredCryptos(
              list.filter(
                (crypto) =>
                  crypto?.name?.toLowerCase().includes(loweredNameOrSymbol) |
                  crypto?.symbol?.toLowerCase().includes(loweredNameOrSymbol)
              )
            )
          )
        );
    };
    filterCryptos(searchCryptos).then(() => console.log('Veriler filtrelendi.'));
  }, [searchCryptos, cryptoList]);

  // Responsive table with Ref hook
  useEffect(() => {
    const responsiveTable = (e) => {
      setTablewidth(e.target.innerWidth <= 768 ? e.target.innerWidth : setTablewidth('80vw'));
    };
    windowRef.current = window.addEventListener('resize', responsiveTable);
  }, []);

  const renderRow = (crypto) => (
    <TableRow key={crypto.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component={'th'} scope='row'>{crypto?.name}</TableCell>
      <TableCell align='right'>{crypto?.symbol}</TableCell>
      <TableCell align='right'>${crypto?.current_price}</TableCell>
      <TableCell sx={{ color: Math.sign(Number(crypto?.price_change_24h)) > 0 ? 'var(--accent-color-active)' : 'var(--accent-color)' }} align='right'>{crypto?.price_change_24h}%</TableCell>
    </TableRow>
  );

  return (
    <TableContainer onScrollCapture={(e) => setShowTip(false)} component={Paper} sx={{ height: 400, width: tableWidth, maxWidth: 1024, overflowX: 'scroll' }}>
      {
        showTip && <p style={{textAlign: 'center', width: '100%', position: 'fixed', bottom: 40}}>Mobilde yatay ve dikey olarak kaydırabilirsiniz</p>
      }
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell width={400}>
              <b>İsim</b>
            </TableCell>
            <TableCell width={400} align='right'>
              <b>Sembol</b>
            </TableCell>
            <TableCell align='right' width={400}>
              <b>Fiyat</b>
            </TableCell>
            <TableCell align='right' width={400}>
              <b>Değişim</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            filteredCryptos?.length > 0 ? 
            ( // if there is filteredCryptos, then render
              filteredCryptos.map(renderRow)
            ) : cryptoList?.length > 0 ? 
            ( // There is no filteredCryptos but there is cryptoList
              cryptoList.map(renderRow)
            ) : 
            ( // If there is no content then show 'nothing' screen
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='right'>There</TableCell>
                <TableCell align='right'>is</TableCell>
                <TableCell align='right'>nothing</TableCell>
                <TableCell align='right'>.</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
