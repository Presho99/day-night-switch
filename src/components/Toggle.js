import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"


function Toggle() {
    const [isAnimating, setIsAnimating] = useState(false)
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }

    useEffect(() => {
            document.body.className = theme;
          }, [theme]);
  return (
    <div className={`toggle ${theme}`}>
        <div className='ball-container'>
            <div className='left' style={{backgroundImage: "url('morning.jpeg')"}} onClick={toggleTheme}></div>
            <div className='right' style={{backgroundImage: "url('night.jpeg')"}}></div>
           
        </div>
        <motion.div 
        className='ball'
        animate = {{
            x: isAnimating ? 50 : -50,
            backgroundColor: isAnimating ? "#D79D7A" : "#020311",
            rotate: isAnimating ? 360 : 0

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