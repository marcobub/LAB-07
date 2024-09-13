import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WapperList } from './components/WrapperList'
import {List } from './components/List'
function App() {
  
  return (
    <>
      <WapperList>
        <ul>
          <li> Pan </li>
          <li> Queso </li>
          <li> Mantequilla </li>
        </ul> 
      </WapperList>
        
    </>
  )
}

export default App
