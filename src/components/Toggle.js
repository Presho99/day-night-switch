import React, {useState} from 'react'
import { motion } from "framer-motion"


function Toggle() {
    const [isAnimating, setIsAnimating] = useState(false)
  return (
    <div className='toggle'>
        <div className='ball-container'>
            <div className='left' style={{backgroundImage: "url('morning.jpeg')"}}></div>
            <div className='right' style={{backgroundImage: "url('night.jpeg')"}}></div>
           
        </div>
        <div className='ball'></div>
    </div>
  )
}

export default Toggle