import React,{ useContext } from 'react';
import { Link } from 'react-router-dom'
import ThemeContext from '../Context';

const Navbar = () => {
  const {isLight, changeTheme}=useContext(ThemeContext);
   return (
    <div>
        <div className='geek'><h1>Geekster</h1></div>
        <Link className='re' to="/contact">Contact</Link><br/>
        <Link className='di' to='/'>Home</Link>
        <br/>
        <Link className='rect' to='/service'>Services</Link>
        <br/>
        <button onClick={()=>{changeTheme()}}>Toggle Theme to {isLight?"Dark":"Light"}</button>
    </div>
  )
} 

export default Navbar;