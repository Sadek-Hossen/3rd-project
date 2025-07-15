import React from 'react';
import Button from '@mui/material/Button';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import KeyboardTabOutlinedIcon from '@mui/icons-material/KeyboardTabOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import DrawerAppBar from './Compunent/Navbur';
import Hiro from './Compunent/Hiro';
import Presentation from './Compunent/Presentation';
import WorkTime from './Compunent/WorkTime';
import MakeTime from './Compunent/MakeTime';
import Blog from './Compunent/Blog';
import Footer from './Compunent/Footer';
import './App.css'

function App() {


  return (
    <>


  <DrawerAppBar />
  <Hiro />
  <Presentation />
  <WorkTime />
  <MakeTime />
  <Blog />
  <Footer />
    </>
  )
}

export default App
