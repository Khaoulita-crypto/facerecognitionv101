import React, {Component } from 'react';
import SignIN from './components/signIn/signIn';
import Register from './components/Register/Register';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';



/*
const app = new Clarifai.App({
  apikey: 'c2ca6af3389843568c965d79e34c7133'
}); */

const app = new Clarifai.App({
  apiKey: 'c2ca6af3389843568c965d79e34c7133'
 });  

class  App extends Component {
  constructor() {
    super(); 
    this.state = { input:'', imgUrl:'',  box: { }, whichPage:'signIn',  isSignedIn: false,
                  user: {id:'', name:'', email:'', entries:0, joined:'' }  }
                  }
  
/*
  componentDidMount(){ //it is a react cycle hook tha's come with react so we don't have to do arrow fct  
   fetch('http://localhost:5000')
   .then(response => response.json())
   .then(data => console.log(data))
  }
*/
  

  drawFaceBox = (data) => {
    const boxEdges = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const imgWidth = Number(image.width); 
    const imgHeight = Number(image.height); 
    console.log(imgWidth, imgHeight);
    return {
      leftCol : boxEdges.left_col * imgWidth, //top
      topRow : boxEdges.top_row * imgHeight,  //right
      rightCol : imgWidth - (boxEdges.right_col * imgWidth), //bottom
      bottomRow : imgHeight - (boxEdges.bottom_row * imgHeight) //left
    }
  }

   
 displayFaceBox = (box) => {
   this.setState({box: box});
 }



  whenInputChange = (event) => {
     this.setState({input: event.target.value}); 
  }
  
  whenSubmit = () => {
    this.setState({imgUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      if (response){
        fetch('https://immense-wildwood-14369.herokuapp.com/image', { //this line use to be ** fetch('http://localhost:3000/image', {  ** before heroku I mean in localhost
          method:'put', 
          headers:{'content-type':'application/json'},
          body: JSON.stringify({
            id:this.state.user.id
          })
      }).then(response =>response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries:count}))
        })
      }
      this.displayFaceBox(this.drawFaceBox(response))
    } )
    .catch(err => console.log(err,'what error with clarifai') ); 
  }



  loadUser = (data) => {
    this.setState({user: {id:data.id, name:data.name, email:data.email, entries:data.entries, joined:data.joined }})
  }

       whenPageChange = (setPage) => {
         if (setPage === 'signout'){
           this.setState({isSignedIn : false})
         } else if ( setPage === 'home'){
           this.setState ({isSignedIn : true })
         }
        this.setState ({whichPage:setPage }); 
          }

  render (){
    const {isSignedIn, imgUrl, box, whichPage, user} = this.state; 
  return (
    <div className="App">
       <Particles className='particles' params={{particles: {number: {value:100, desity: {enable:true, value_area:50 }}}}} />     
       <Navigation isSignedIn={isSignedIn} whenPageChange={this.whenPageChange} />
       {whichPage === 'home' 
       ?  <div>
          <Logo />
          <Rank name={user.name} entries={user.entries } />
          <ImageLinkForm whenInputChange={this.whenInputChange} whenSubmit={this.whenSubmit} />
          <FaceRecognition box={box} imgUrl={imgUrl} />
         </div>
        : (
           whichPage === 'signIn' 
          ? <SignIN loadUser={this.loadUser} whenPageChange={this.whenPageChange} />
          : <Register loadUser={this.loadUser} whenPageChange={this.whenPageChange} />
        )
      }
    </div>
  );
}
}

export default App;
