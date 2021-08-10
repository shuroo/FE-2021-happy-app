import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom'


function HomePage() {

    useEffect(()=>{
     
      setTimeout(function(){ 
        window.location.href = '/login' ;
      }, 3000);
  
    },[])    
    return (
      
             <Container>
                 <h1  >Happy App</h1>
                <p>Find your way</p> <div>
                  <img src="./syzipus.jpeg" alt="syzipus" />
                </div> <p>Let the stone of obligations be lighter..</p>
                <p>Please wait...</p>
                <Spinner animation="border" role="status">
               
                <span className="visually-hidden">Please Login...</span>
    </Spinner> 
            </Container>  
        
    );
}

export default HomePage;    