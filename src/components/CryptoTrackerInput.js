import React, { forwardRef } from 'react';
import { TextField, Box, InputAdornment } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const CryptoTrackerInput = forwardRef((props, ref) => {
  return (
    <Box>
      <TextField
        ref={ref}
        id='outlined-size-small'
        size='small'
        fullWidth={true}
        placeholder='Kripto aramak için ismini veya sembolünü girin'
        variant='filled'
        InputProps={{endAdornment: <InputAdornment position='start'><SearchOutlined /></InputAdornment>}}
      />
    </Box>
  );
});

export default CryptoTrackerInput;
