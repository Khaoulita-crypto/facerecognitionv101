import React from 'react'; 



const ImageLinkForm = ({whenInputChange, whenSubmit}) => {
    return (   
       <div >
           <p className='f3 b'> {'This Intellegent Brain will detect all faces in your picture, give it a try  '} </p>
           <div className='crazybg pa4 br3 w-70 shadow-5 center' >
                <input onChange={whenInputChange} className='f4 pa2 w-70 center ' type='text'  />
                <button onClick={whenSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' >Detect!</button>
          </div>
        </div> 
    );
}

export default ImageLinkForm; 