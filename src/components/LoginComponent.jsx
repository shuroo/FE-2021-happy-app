import React from 'react';
import { useState } from 'react';
import { Button, Form, Alert, Spinner } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
//import './LoginComponent.css';
import UserModel from '../model/UserModel';
import Parse from 'parse';
import Utils from '../utils/Utils';

function LoginComponent({onLogin}) {
    const [activeUser, setActiveUser] = useState();
    const [email, setEmail] = useState();
    const [pwd, setPwd] = useState();
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);

    if (activeUser) {
        console.log('is active!'+activeUser.name);
        return <Redirect activeUser={activeUser} to="/"/>;
    }

    function login() {
        setLoggingIn(true);

        Utils.parseInit();

        Parse.User.logIn(email, pwd).then(user => {
            
            // Invoke parent (App) function to update the activeUser state in the app
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            
            onLogin(user);
            //<Redirect to="/rate" activeUser={user} />

        }).catch(err => {
            console.error(err);
            // Showing an alert
            console.log(err);
            setShowInvalidLogin(true);            
        }).finally(() => {
            setLoggingIn(false);
        });
    }

    return (
        
        <div className="p-login">
            <h1>Login to Happy app </h1>
            <p>or <Link to="/signup">create an account</Link></p>
            {showInvalidLogin ?
                <Alert variant="danger" onClose={() => setShowInvalidLogin(false)} dismissible>Invalid Credentials!</Alert> : null}
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        value={email || ''} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        value={pwd || ''} onChange={e => setPwd(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button type="submit" variant="success" type="button" onClick={login} disabled={loggingIn}>
                        Login {loggingIn ? <Spinner animation="border" /> : null}
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginComponent;