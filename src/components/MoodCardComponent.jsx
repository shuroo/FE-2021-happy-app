import React from "react";
import './CardComponent.css'; 
import Card from 'react-bootstrap/Card'

function MoodCardComponent({mood,onCardClick}) {
	
	return (
 
<Card>
<a style={{ cursor: 'pointer' }}  onClick={()=>onCardClick(mood.rate)}>
<Card.Img variant="top moodImg"  src={mood.image} alt={mood.title+" "+mood.rate} />
<Card.Body>
  <Card.Title>{mood.title} ({mood.rate})</Card.Title>
  
</Card.Body>
</a>
</Card>
	)
}

export default MoodCardComponent;
