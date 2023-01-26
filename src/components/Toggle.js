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
        <motion.div 
        className='ball'
        animate = {{
            x: isAnimating ? 50 : -50,
            backgroundColor: isAnimating ? "#8c86b8" : "#fefefe"
        }}

        initial = {{
            backgroundColor: "#8C86B8"
        }}
        onClick = {() => setIsAnimating(!isAnimating)}
        >

        </motion.div>
    </div>
  )
}

export default Toggle