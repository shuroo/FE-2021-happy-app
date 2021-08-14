import React, { useEffect, useState } from 'react';
import { Container,Button, FormGroup, Form } from 'react-bootstrap';
import MoodModel from '../model/MoodModel';
import MoodGallery from './MoodGallery';
import LoginComponent from './LoginComponent';
import Parse from 'parse';
import Utils from '../utils/Utils';
import { Redirect } from 'react-router';
import Alert from 'react-bootstrap/Alert';

function RateMoodComponent({activeUser}) {
 
    const [customDate,setCustomDate] = useState(new Date());
    const [isRated,setIsRated] = useState(false);
    const [moods,setMoods] = useState([new MoodModel("./crying_cloud.png","Depressed",1)
    ,new MoodModel("./mad_sad_cloud.png","Sad",2)
    ,new MoodModel("./mad_cloud2.jpg","Angry",3) 

    ,new MoodModel("./indifferent_sunshine.jpg","Ok",5),
    ,new MoodModel("./partially_cloudy.png","Optmistic",8)
    ,new MoodModel("./sunshine.jpg","Quite Happy",9),
    ,new MoodModel("./happy_sunshine.jpg","Happy",10)])

    function saveToChart(moodRate,moodDate){

        // todo: fix the init..
        // Your Parse initialization configuration goes here
        Utils.parseInit();
        console.log('saveToChart');
        const userMoods = Parse.Object.extend("UserMoods");
        const userMood = new userMoods();

        console.log(moodDate);
        userMood.set("userId", activeUser.id);
        userMood.set("moodDate", moodDate);
        userMood.set("email", activeUser.email);
        userMood.set("moodRate", moodRate);

        userMood.save()
        .then((mood) => {
        // Success
        console.log('New object created with objectId: ' + mood.id);
        setIsRated(true);
        }, (error) => {
        // Save fails
        console.log('Failed to create new object, with error code: ' + error.message);
        });
    }

    const navigateGraphs = (activeUser && activeUser.role === 'admin' ? 
    <button className="button button-primary"  onClick={()=>
    <Redirect to="/graphs"/>} >Go To Mood Graphs</button> : null);

    const content = (    
        <Container>
            <h3  >Hello {activeUser.name}!</h3> 
<h6>Please choose your current mood to rate it (on click)</h6>

<Alert style={{display:(!isRated? "none" : "block")}} className="alert alert-secondary"><h4>Thank You!</h4>
<p>
               
    <button className="button button-primary" onClick={<Redirect activeUser={activeUser} to="/solutions"/>}> Checkout suggested solutions</button>
    {navigateGraphs}
</p>
</Alert>
<div style={{display:(isRated? "none" : "block")}} >
             <MoodGallery  onCardClick={(moodRate)=>saveToChart(moodRate,customDate)} moods={moods} activeUser={activeUser}/>
             {/* <FormGroup>
                <Form.Label>Custom Date:</Form.Label>
                <Form.Control type="date" placeholder={customDate} onChange={e=>setCustomDate(new Date(e.target.value))}  />
 
                </FormGroup>; */}
                </div>   </Container>);

return (       
    
    <div className="p-home">
    {content}
        </div>
);
}

export default RateMoodComponent;