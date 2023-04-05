import React from 'react'
import img1 from './assets/coffee.jpg'
import img2 from './assets/tea.jpg'
import img3 from './assets/cake.jpg'
import './App.css'

export default function Navigation() {
  return( 
    <div id='disp'>
        <a href="ref" className='dis1'><img src={img1} className="img" alt="" /> COFFEE </a>
        <a href="ref" className='dis2'><img src={img2} className="img" alt="" /> TEA </a>
        <a href="ref" className='dis3'><img src={img3} className="img" alt="" /> CAKES </a>  
    </div>
  )
}