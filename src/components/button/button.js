import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({title,onClick}) {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} fullWidth={true} variant="contained">{title}</Button>
    </Stack>
  );
}
