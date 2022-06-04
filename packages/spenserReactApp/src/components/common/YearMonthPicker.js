import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';

export default function YearMonthPicker() {
  const [value, setValue] = React.useState(sessionStorage.getItem("YearMonth"));
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
        id="searchMonth"
        inputFormat="yyyy-MM"
        views={['year', 'month']}
        label="Year and Month"
        value={value}
        onChange={(newValue) => {
            setValue(newValue);
            sessionStorage.setItem("YearMonth", newValue)
        }}
        renderInput={(params) => <TextField {...params} sx={{ backgroundColor: 'white' }}/>}
    />
    </LocalizationProvider>
  );
}
