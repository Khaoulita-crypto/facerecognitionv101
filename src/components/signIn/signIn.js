import React from 'react'; 

class SignIN extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signInEmail:'',
      signInPassword:''
    }
  }
  whenEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  whenPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  whenSubmitSignIn = () => {
    fetch('https://immense-wildwood-14369.herokuapp.com/signIn', {
      method:'post', 
      headers:{'content-type':'application/json'},
      body: JSON.stringify({
        email:this.state.signInEmail,
        password:this.state.signInPassword
      })
    }).then(response => response.json())  //the res.json(user[0]) that I will get from serverfile if password and email matches 
      .then(user => {
        if (user.id){    //but he said that we have to change it to if(user.id) but when I changed it I couldn't enter the user
          this.props.loadUser(user);
          this.props.whenPageChange('home');
        }  
      } )
  }
  render(){
    const {whenPageChange} = this.props;
    return (  
      <article className='br3 ba  b--black-10 mv4 w-100 w-50-m  w-25-1 mw6 shadow-5 center' >
        <main className="pa4 black-80">
           <div className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
               <legend className="f1 fw6 ph0 mh0"> Sign In</legend>
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
              <input onClick={this.whenSubmitSignIn} className=" br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="SIGN IN" />
              </div>
              <div className="lh-copy mt3">
              <p  onClick={() => whenPageChange('Register') }  className="f6 link dim black db pointer" > Register </p>
              </div>
           </div>
       </main>
</article>
  );
  }
}



/*  it is the one it work very fine before adding the backend part 
const SignIN = ({whenPageChange, }) => {
    return (  
        <article className='br3 ba  b--black-10 mv4 w-100 w-50-m  w-25-1 mw6 shadow-5 center' >
          <main className="pa4 black-80">
             <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                 <legend className="f1 fw6 ph0 mh0"> Sign In</legend>
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
                <input onClick={() => whenPageChange('home') } className=" br3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="SIGN IN" />
                </div>
                <div className="lh-copy mt3">
                <p  onClick={() => whenPageChange('Register') }  className="f6 link dim black db pointer" > Register </p>
                </div>
             </div>
         </main>
 </article>
    
    );
}
*/

export default SignIN; 