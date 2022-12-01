import React from 'react'


function Card(props) {
  return (
    <div className="main">
          <div className="left-container">
             <div className="upper">
               <div className="sub-left">
                 <img src={props.images} alt="movie-banner " className="sub-left" />
               </div>
               <div className="sub-right">
                 <h2>{props.movie}</h2>
                 <p>{props.yearAndAuthor}</p>
                 <p>
                   <span
                   style={{
                       border: "0.5px solid white",
                     margin: "0.1rem",
                       padding: "0.2rem",
                       fontSize: "12px",
                     }}
                   >
                     120 min
                   </span>
                   <span style={{ margin: "0.2rem" }}>
                     Action,Journey,experience
                   </span>
                 </p>
               </div>
             </div>
             <div className="lower">
               <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eos
                 blanditiis? Reprehenderit tenetur rem in incidunt debitis
               </p>
             </div>
     
           </div>
    
         <div className="right-container-movie-banner">
           <img src={props.images} alt="movie-banner" className="movie-banner" />
          </div>
        </div>
    
      
  );
}

export default Card