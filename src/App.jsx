import { useState } from 'react'

import './App.css'
import Home from './Home'

function App() {
  const backgroundImage = 'url("/assets/image.webp")';

  return (
    <div style={{
      backgroundImage: backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', 
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Home/>  
    </div>
  )
}

export default App
