import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShopItemClass from './ShopItemClass.jsx'

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'><img src="..\public\images\item-blue.jpg" alt="item-blue.jpg" /> </div>
    </div>
    <div className="window">
    <ShopItemClass item={item} />
    </div>
  </div>
  )
}

export default App
