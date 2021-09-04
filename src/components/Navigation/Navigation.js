import React from 'react'; 

const Navigation = ({whenPageChange, isSignedIn}) => {
    
        if (isSignedIn) {
            return (
            <nav style={{display:'flex', justifyContent:'flex-end' }} >
                <p onClick={() => whenPageChange('signout')} className='f3 link dim black underline pa3 pointer' > Sign Out </p>
            </nav>
            );
        } else {
            return (
                <nav style={{display:'flex', justifyContent:'flex-end' }} >
                  <p onClick={() => whenPageChange('signIn')} className='f3 link dim black underline pa3 pointer' > Sign In </p>
                  <p onClick={() => whenPageChange('Register')} className='f3 link dim black underline pa3 pointer' > Register </p>
                </nav>
            ); }
            }   

export default Navigation; 