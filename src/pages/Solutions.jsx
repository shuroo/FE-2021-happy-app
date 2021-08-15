import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import surprise_img from "../images/surprise.jpeg";
import song_img from "../images/song.jpg";
import activity_img from "../images/activity.jpg";
import meeting_people_img from "../images/meeting_people2.jpg" ;
import bumpy_img from "../images/bumpy.jpg";
import calm_img from "../images/something_calm.jpg";


function SolutionsPage(props) {
 

return (
	<div style={{ display: 'block', width: 700, padding: 30 }}>
	<h4>What would you like to do today?</h4>
  
	<Carousel>
		<Carousel.Item onClick={()=>alert('Surprise!')} interval={1500}>
		<h3>Surprise me!</h3>
		<img 
			className="d-block w-100"
src={surprise_img}			alt="Surprise me"
		/>
		<Carousel.Caption>
			<h3>Surprise me!</h3>
			 
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item onClick={()=>alert('Rand me a song!!')}  interval={500}>
		<h3>Find me a song!</h3>
		<img
			className="d-block w-100"
src={song_img}
			alt="Find me a song!"
		/>
		<Carousel.Caption>
			<h3>Find me a song!</h3>
			 
		</Carousel.Caption>
		</Carousel.Item>
        <Carousel.Item interval={500} onClick="alert('Rand an activity!')">
		<h3>Find me an activity!</h3>
		<img
			className="d-block w-100"
src={activity_img}			alt="Find me an activity!"
		/>
		<Carousel.Caption>
			<h3>Find me an activity!</h3>
			 
		</Carousel.Caption>
		</Carousel.Item>
        <Carousel.Item interval={500}>
		<h3>Meet people!</h3>
		<img onClick={()=>alert('Meet People!')} 
			className="d-block w-100"
src={meeting_people_img}
			alt="Meeting people!"
		/>
		<Carousel.Caption>
			<h3>Meeting people!</h3>
			 
		</Carousel.Caption>
		</Carousel.Item> 
        <Carousel.Item onClick={()=>alert('Something Bumpy!')} interval={500}>
			<h3>Something Bumpy!</h3>
		<img 
			className="d-block w-100"
src={bumpy_img}
			alt="Something Bumpy!"
		/>
		<Carousel.Caption>
			<h3>Something Bumpy</h3>
			 
		</Carousel.Caption>
		</Carousel.Item> 
        <Carousel.Item onClick="alert('Calm!')" interval={500}>
		<h3>Something Calm</h3>
		<img
			className="d-block w-100"
src={calm_img}
			alt="something calm"
		/>
		<Carousel.Caption>
			<h3>Something Calm</h3>
			 
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
);
}

export default SolutionsPage;