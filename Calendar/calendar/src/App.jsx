import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Calendar from './Calendar';

const now = new Date(2022, 11, 12);

function App() {


  return (
    <Calendar date={now} />
  )
}

export default App
