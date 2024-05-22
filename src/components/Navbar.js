import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../Assets/n_logo.jpg';  

function Navbar() {
  return (
    <>
    <AppBar position="static">
    <Toolbar>
      <img src={logo} alt="Logo" style={{ marginRight: '16px', height: '50px' }} />
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        
      </Typography>
      <Button color="inherit" component={RouterLink} to="/">Home</Button>
      <Button color="inherit" component={RouterLink} to="/about">About</Button>
      <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
      <Button color="inherit" component={RouterLink} to="/services">Services</Button>
      <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
    </Toolbar>
  </AppBar>
    </>
  )
}

export default Navbar