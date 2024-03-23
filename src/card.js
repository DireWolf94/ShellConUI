import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CardHolder({ text, logo, content, subheader = ""}) {


  return (
    <Card sx={{ maxWidth: 345 , textAlign: "center"}}>
      <CardHeader
        title={text}
        subheader={subheader}
        sx={{color:"rgba(31,103,138,255)"}}
        subheaderTypographyProps={{color:"rgba(29,49,85,255)"}}
      />
      <CardMedia
        component="img"
        height="184"
        aspect-ratio="0.5"
        image={logo}
        alt="Paella dish"
        sx = {{position: "relative", left: "20%", width: "60%"}}
      />
      <CardContent>
        <Typography variant="body2" color="rgba(29,49,85,255)">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}