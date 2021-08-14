import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import Parse from 'parse';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import UserModel from '../model/UserModel';
import Utils from '../utils/Utils';
import Alert from 'react-bootstrap/Alert';

function SignUp(){
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [activeUser, setActiveUser] = useState();
    const [pwd, setPwd] = useState();
 
    if (activeUser) {
        console.log('is active!');
        return <Redirect to="/"/>
    }

    function signup() {
    
        console.log("In signup!!!");
        Utils.parseInit();
        var user = new Parse.User();
        user.set("username", name);
        user.set("password", pwd);
        user.set("email", email);
      
        // other fields can be set just like with Parse.Object
        user.set("role", "ragular");
      
        user.signUp().then(user => {
            console.log("Successfully signed up!");
            setActiveUser(user);

        }).catch(err => {
            console.error(err);          
        }).finally(() => {
        });
    }

  
 
    return (
        <Container><h3> Sign up as a new user! </h3>
        <Alert style={{display:(activeUser? "block" : "none")}} className="secondary"><p>Signed up successfully - active user is detected!</p>
            <a href="/" >Back To HomePage</a>
            </Alert>
        <Form >
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control   type="text" placeholder="Enter your name" required 
                    value={'' || name} onChange={e => setName(e.target.value)} />
                    </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control   type="email" placeholder="Enter email" 
                    value={'' || email} onChange={e => setEmail(e.target.value)} required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control  type="password" placeholder="Password" required
                    value={'' || pwd} onChange={e => setPwd(e.target.value)} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button disable={(!!activeUser ? "disable" : "")} variant="success" type="button" onClick={signup} >
                    SignUp
                </Button>
            </div>
        </Form>
        </Container>
                
);
}

export default SignUp;
