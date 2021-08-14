import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom';
import LoginComponent from '../components/LoginComponent';
import  RateMoodComponent  from '../components/RateMoodComponent';
import UserModel from '../model/UserModel';

function HomePage() {

    const [activeUser,setActiveUser] = useState();
    const [redirectOnLogin,setRedirectOnLogin] = useState(false);  // todo: initially read all users data.

    function addActiveUser(usr){

      const activeUsr = new UserModel(usr);
      console.log("activeUsr:"+activeUsr.email);
      setActiveUser(activeUsr);
       
    }
    useEffect(()=>{
      if(activeUser){
      setTimeout(function(){ 
        setRedirectOnLogin(true);
      }, 3000);
    }
    },[activeUser]);  

    const divHelloActive = activeUser ? (<div>
      <h3>Hello {activeUser.name}!</h3>
      <p>Please wait...</p>
      <Spinner animation="border" role="status">
     
      <span className="visually-hidden">Please Wait...</span>
      </Spinner>
    
      </div>) : null;
    
     
 
    const rateMood = (redirectOnLogin ? <RateMoodComponent activeUser={activeUser} /> : null)
    return (
      
<div>
<div style={{border:"1px solid black",
               display:(activeUser? "none" : "block")}} >
             <Container>
                 <h1  >Happy App</h1>
                <p>Find your way</p> <div>
                  <img src="./syzipus.jpeg" alt="syzipus" />
                </div> <p>Let the stone of obligations be lighter..</p>
               <div style={{border:"1px solid black",
               display:(activeUser? "none" : "block")}}> 
                <LoginComponent activeUser={activeUser} onLogin={addActiveUser}/>

                </div>
                {divHelloActive}

            </Container>  
            </div>
            {rateMood}
            </div>
            
    );
}

export default HomePage;    