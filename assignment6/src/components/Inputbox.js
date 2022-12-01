import React from 'react'

const Inputbox=(props)=> {
  return (
    <textarea className='textarea' rows="10" cols="50" onChange={(e)=>{props.setdatafn(e.target.value)}}></textarea>
  );
}

export default Inputbox