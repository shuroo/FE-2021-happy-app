import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import MoodModel from '../model/MoodModel';
import MoodGallery from '../components/MoodGallery'

function RateMoodPage(props) {
 
    // todo: createMoods read moods from db 

    //const [activeUser,setActiveUser] = useState(new UserModel("shiri","shuroo1@hotmail.com","Admin"));
    const [moods,setMoods] = useState([new MoodModel("./crying_cloud.png","Depressed",1)
    ,new MoodModel("./mad_sad_cloud","Sad",2)
    ,new MoodModel("./mad_cloud","Angry",3)
    ,new MoodModel("./happy_sunshine.jpg","Happy",10),
    ,new MoodModel("./sunshine.jpg","Quite Happy",9),
    ,new MoodModel("./indifferent_sunshine.jpg","Ok",5),
    ,new MoodModel("./partially_cloudy.jpg","Optmistic",8),
    ,new MoodModel("./happy_sunshine.jpg","Happy",10)])
    return (
        <div className="p-home">
            <Container>
                <h3 className="display-1">Please Rate your mood:</h3>
                 <MoodGallery moods={moods}/>
            </Container>
        </div>
    );
}

export default RateMoodPage;