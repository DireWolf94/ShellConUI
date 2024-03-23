import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import projects from "./assets/ProjectConstants";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  height:300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowY:'scroll'
};

export default function CardHolder({ text, logo }) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = createTheme({
    palette: {
      ochre: {
        main: 'rgba(31,103,138,255)',
        light: '#E9DB5D',
        dark: 'rgba(0,166,203,255)',
        contrastText: '#FFFFFF',
      },
    },
  });

  let component = [];
  console.log(projects[text]);
  console.log(text);
  for (let i = 0; i < projects[text].length; i++) {
    component.push(<p>{projects[text][i]}</p>);
  }
  

  return (
    <ThemeProvider theme={theme}>
    <div>
        <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        disableScrollLock={false}
        open={open}
        onClose={handleClose}
        overflowY="scroll">
          <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight:"bold" }} textAlign="center">
            {component}
          </Typography>
          </Box>
          
        </Modal>
        <Card sx={{ maxWidth: 345 , textAlign: "center" }}>
          <CardHeader
            sx={{fontWeight:"bold", color: "rgba(31,103,138,255)" }}
            title={text}
          />
          <CardMedia
            component="img"
            height="194"
            image={logo}
            alt="Paella dish"
          />
          <CardContent>
            <Button variant= "contained" color='ochre' onClick={handleOpen} sx={{fontWeight:"bold" }}>Projects</Button>
          </CardContent>
        </Card>
    </div>
    </ThemeProvider>
  );
}