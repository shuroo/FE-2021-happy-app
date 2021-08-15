import React, { useEffect, useState } from 'react';
import { Container,Button, FormGroup, Form } from 'react-bootstrap';
import MoodModel from '../model/MoodModel';
import DatePicker from 'react-date-picker'
import MoodGallery from './MoodGallery';
import Parse from 'parse';
import Utils from '../utils/Utils'; 
import mad_sad_img from '../images/mad_sad_cloud.png';
import crying_cloud_img from '../images/crying_cloud.png';
import indifferent_sunshine_img from '../images/indifferent_sunshine.jpg';
import mad_cloud2_img from '../images/mad_cloud2.jpg';
import partially_cloudy_img from '../images/partially_cloudy.png';
import sunshine_img from '../images/sunshine.jpg';
import happy_sunshine from '../images/happy_sunshine.jpg';
import sunshine_78_img from '../images/sunshine_7-8.jpg';
import so_so_img from '../images/so_so_img.jpeg';
import ok_plus_img from '../images/img_ok_plus.png';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom"; 

function RateMoodComponent({activeUser}) {
 
    const [customDate,setCustomDate] = useState(new Date());
    const [isRated,setIsRated] = useState(false);
    const moods1 = [new MoodModel(crying_cloud_img,"Depressed",1)
    ,new MoodModel(mad_sad_img,"Sad",2)
    ,new MoodModel(mad_cloud2_img,"Angry",3)];

     const moods2 = [new MoodModel(so_so_img,"Could be a lot better",4)
    ,new MoodModel(indifferent_sunshine_img,"Ok",5),
    ,new MoodModel(ok_plus_img,"Ok Plus",6)];
    const moods3 = [new MoodModel(partially_cloudy_img,"Optmistic",7)
    ,new MoodModel(sunshine_78_img,"Getting Better",8)
    ,new MoodModel(sunshine_img,"Quite Happy",9),
    ,new MoodModel(happy_sunshine,"Happy",10)];

    function saveToChart(moodRate,moodDate){

        // todo: fix the init..
        // Your Parse initialization configuration goes here
        Utils.parseInit(); 
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
    <Link className="link link-primary"   to="/graphs" >Go To Mood Graphs</Link> : null);

    const content = (    
        <Container>
            <div className="row">
            <h3  >Hello {activeUser.name}!</h3> 
<h6>Please choose your current mood to rate it (on click)</h6>

</div>  
<Alert style={{display:(!isRated? "none" : "block")}} className="alert alert-secondary"><h4>Thank You!</h4>
<p>
<Link className="button button-primary" to="/solutions"> Checkout suggested solutions</Link>
             
     {navigateGraphs}
</p>
</Alert>
<div style={{display:(isRated? "none" : "block")}} >

<div className="dateLabel">
                <Form.Label >Change Date:</Form.Label>
                <DatePicker
                    onChange={setCustomDate}
                    value={customDate}
                /> 
     </div> 
<FormGroup>
        
                </FormGroup> 
    
    <div className="col">
                    <MoodGallery  onCardClick={(moodRate)=>saveToChart(moodRate,customDate)} moods={moods1} activeUser={activeUser}/>
                    <MoodGallery  onCardClick={(moodRate)=>saveToChart(moodRate,customDate)} moods={moods2} activeUser={activeUser}/>
                    <MoodGallery  onCardClick={(moodRate)=>saveToChart(moodRate,customDate)} moods={moods3} activeUser={activeUser}/>
 
                    </div>

                </div>   </Container>);

return (       
    
    <div className="p-home">
    {content}
        </div>
);
}

export default RateMoodComponent;