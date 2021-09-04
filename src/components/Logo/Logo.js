import React from 'react'; 
import Tilt from 'react-tilt'; 
import './Logo.css';
import brain1 from './brain1.jpg'; 



const Logo = () => {
    return (   
       <div  className='ma4 mt0 '>
          <Tilt className="Tilt br2 shadow-2 " options={{ max : 75 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"> <img style={{width:'130px', height:'130px', paddingTop:'10px'}} alt='brain Logo'src={brain1} /> </div>
          </Tilt>
       </div>
    );
}

export default Logo; 