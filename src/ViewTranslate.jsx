import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TransLateBox({ info , langdt , langto}) {
  if (!info || !info.txtChange) {
    // Handle the case where info or info.txtChange is undefined
    return null; // or render a placeholder or loading state
  }

 
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Translation Tool
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Translation Made Easy
        </Typography>
        <Typography variant="body2">
          <p>{info.txtChange}</p>
          <p>{langdt.fromLang}    =----=  {langto.toLang}</p>
          <p></p>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
