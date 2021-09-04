import React from 'react'; 


class Register  extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email:'',
          password:'',
          name:''
        }
      }
      whenNameChange = (event) => {
        this.setState({name: event.target.value})
      }
      whenEmailChange = (event) => {
        this.setState({email: event.target.value})
      }
      whenPasswordChange = (event) => {
        this.setState({password: event.target.value})
      }
      whenSubmitSignIn = () => {
        fetch('https://immense-wildwood-14369.herokuapp.com/register', {  //it use to be http://localhost before 
          method:'post', 
          headers:{'content-type':'application/json'},
          body: JSON.stringify({
            email:this.state.email,
            password:this.state.password,
            name:this.state.name
          })
        }).then(response => response.json())
          .then(user =>{
            if (user ){
              this.props.loadUser(user);
              this.props.whenPageChange('home');
            }
          } )
      }
    render(){
    return (  
        <article className='br3 ba  b--black-10 mv4 w-100 w-50-m  w-25-1 mw6 shadow-5 center' >
          <main className="pa4 black-80">
             <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f1 fw6 ph0 mh0"> Register Now </legend>
                 <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name" > Complete Name </label>
                  <input onChange={this.whenNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"/>
               </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address" > Email </label>
                  <input onChange={this.whenEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"name="email-address" id="email-address"/>
               </div>
               <div className="mv3">
                 <label className="db fw6 lh-copy f6" htmlFor="password" > Password </label>
                 <input onChange={this.whenPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"name="password"id="password"/>
               </div>
                
              </fieldset>
                <div className="">
                <input onClick={this.whenSubmitSignIn } className=" br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                </div>
             </div>
         </main>
 </article>
    
    );
}
}




/* this code worked very fine before the connection with backend 
const Register = ({whenPageChange, }) => {
    return (  
        <article className='br3 ba  b--black-10 mv4 w-100 w-50-m  w-25-1 mw6 shadow-5 center' >
          <main className="pa4 black-80">
             <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f1 fw6 ph0 mh0"> Register Now </legend>
                 <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name" > Complete Name </label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name"/>
               </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address" > Email </label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"name="email-address" id="email-address"/>
               </div>
               <div className="mv3">
                 <label className="db fw6 lh-copy f6" htmlFor="password" > Password </label>
                 <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"name="password"id="password"/>
               </div>
                
              </fieldset>
                <div className="">
                <input onClick={() => whenPageChange('home') } className=" br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                </div>
             </div>
         </main>
 </article>
    
    );
}
*/
export default Register; 

