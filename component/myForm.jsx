import React from 'react';
import {styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from  '../styles/landing.module.css';

// styled is called, it returns a function that can take in 
// arguments such as object and anonymous function for

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#454797',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#F64C72',
      borderWidth:'2px',
      borderRadius:'10px',
    },
    '&:hover fieldset': {
      borderColor: '#454797',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#454797',
    },
  },
});

export default function CustomizedInputs(props) {
    // These are meterial ui components and not semantic ui.
  return (
    <Box component="form" noValidate sx={{   display: 'grid',   
        gridTemplateColumns: { sm: '1fr 1fr' },   gap: 2, marginBottom:'20px'}}>
      
      <CssTextField label="Email" id="custom-css-outlined-input" />  
      { props.value && <Button variant="contained" href="#contained-buttons" className= {styles.hoverbutton}>
      Get in touch
      </Button>}
     {props.value || <Button variant="contained" href="#contained-buttons" className= {styles.hoverbutton2}>

        Get in touch
      </Button>}
    </Box>
  );
}
