import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import morning from "../assets/morning.jpeg"
import night from "../assets/night.jpeg"



function Toggle() {
    const [isAnimating, setIsAnimating] = useState(false)
    const [theme, setTheme] = useState('light')
    const [isImage, setIsImage] = useState(morning)

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        }else {
            setTheme('light')
        }
    }

    const toggleImage = () => {
       let value = isImage

       if (value === morning) {
           setIsImage(night)
       }else {
           setIsImage(morning)
       }
    }

    useEffect(() => {
            document.body.className = theme;
          }, [theme]);
  return (
    <div className={`toggle ${theme}`}>
        <div className= "ball-container" style={{backgroundImage: `url(${isImage})`}}>
            {/* <div className='left' style={{backgroundImage: "url('morning.jpeg')"}} ></div>
            <div className='right' style={{backgroundImage: "url('night.jpeg')"}}></div> */}
           
        </div>
        <motion.div 
        className='ball'
        animate = {{
            x: isAnimating ? 50 : -50,
            backgroundColor: isAnimating ? "#030514" : "#B6BD56",
            rotate: isAnimating ? 360 : 0

        }}

        initial = {{
            backgroundColor: "#8C86B8"
        }}
        onClick = {() => {setIsAnimating(!isAnimating);
        toggleTheme();
        toggleImage()
    }}
        >

        </motion.div>
    </div>
  )
}

export default Toggle