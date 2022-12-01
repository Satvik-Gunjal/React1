import React,{useContext} from 'react'
import Navbar from './Navbar';
import ThemeContext from '../Context';
import '../App.css';

const Service = () => {
  const {isLight}=useContext(ThemeContext)

  return (
   <>
       <div className={isLight?'light':'dark'}>
         <Navbar/>
   <h1>Available for your service</h1>
  
         </div>

   
   </>
  )
}

export default Service