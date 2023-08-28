import React from 'react'
import './Services.css';
import Card from '../Card/Card';
import Smile from '../../Images/smile1.png'
import Heart from '../../Images/heart1.png'
import Smiley from '../../Images/smiley.png'
import resume from '../../Images/nidhi.pdf'
import { useContext } from 'react';
import { themeContex } from '../../Contex';
import {motion} from 'framer-motion';
const Services = () => {
    const transition = {duration : 1,type:'spring'}
    const theme = useContext(themeContex);
    const darkMode = theme.state.darkMode;
  return (
    <>
     <div className='services' id='Services'>
        {/* left side */}
        <div className='awsome'>
        <span style={{ color:darkMode? 'white' : ''}}>My Awesome</span>
        <span style={{color:'#7d25df'}}>Services</span>
        {/* <span>Note that the development build is not optimized To create a production build, use npm run build.<br/>
        You can now view portfolio in the browser</span> */}
       <a href={resume} download> <button className='button s-button'>Download CV</button></a>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>

        </div>
        {/* right side */}

        <div className='cards'>
            <motion.div  
            className='card card-1'
            whileInView={{left:'14rem'}}
            initial ={{left:'25rem'}}
            transition={transition}
            style={{left:'14rem'}}>
                <Card 
                    emoji ={Smiley}
                    heading="Design"
                    detail = {"Html ,css , Js"}
                />
            </motion.div>
            <motion.div className='card' 
             whileInView={{left:'-3rem'}}
            initial ={{left:'-10rem'}}
            transition={transition}
            style={{left:'-4rem' , top:'12rem'}}>
            <Card 
                    emoji ={Heart}
                    heading="Developer"
                    detail = {"mongodb,express,React,nodejs"}
                />
            </motion.div>

            <motion.div className='card' 
            
            whileInView={{left:'12rem'}}
            initial ={{left:'19rem'}}
            transition={transition}
            style={{left:'12rem' , top:'19rem'}}>
            <Card 
                    emoji ={Smile}
                    heading="UI/UX"
                    detail = "graphql,php,sql"
                />
            </motion.div>
            <div className='blur s-blur1' style={{background: 'var( --purple)'}}></div>
        </div>
     </div> 
    </>
  )
}

export default Services
