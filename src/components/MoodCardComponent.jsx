import React from "react";
import './CardComponent.css'; 
import Card from 'react-bootstrap/Card'

function MoodCardComponent({mood}) {
	
	return (
 
<Card>
<Card.Img variant="top moodImg" src={mood.image} alt={mood.title+" "+mood.rate} />
<Card.Body>
  <Card.Title>{mood.title} ({mood.rate})</Card.Title>
  
</Card.Body>
</Card>
	)
}

export default MoodCardComponent;
