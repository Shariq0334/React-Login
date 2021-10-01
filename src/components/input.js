import * as React from 'react';
import TextField from '@mui/material/TextField';


export default function BasicTextFields({value,onChange,type,label,onBlur,name}) {
  return (
   
      <TextField id="outlined-basic" name={name}  onBlur={onBlur} fullWidth={true} label={label} variant="outlined" type={type} onChange={onChange} value={value} />
    
  );
}
