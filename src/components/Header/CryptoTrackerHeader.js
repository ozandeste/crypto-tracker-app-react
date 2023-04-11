import { Box } from '@mui/material';
import React from 'react';
import styles from '../../App.module.css';

const CryptoTrackerHeader = ({ children }) => {
  return (
    <Box
      display='flex'
      alignItems='end'
      px={4}
      pt={2}
      pb={5}
      sx={{ backgroundColor: '#9960fc', boxShadow: '-2px 4px 8px #9960fc45' }}
      className={styles['ct__app-header']}
    >
      {children}
    </Box>
  );
};

export default CryptoTrackerHeader;
