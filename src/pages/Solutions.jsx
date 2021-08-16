import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import surprise_img from "../images/surprise.jpeg";
import song_img from "../images/song.jpg";
import activity_img from "../images/activity.jpg";
import meeting_people_img from "../images/meeting_people2.jpg" ;
import bumpy_img from "../images/bumpy.jpg";
import calm_img from "../images/something_calm.jpg";
import cardComponent from "../components/CardComponent.css";
import PlaySongActivityComponent from "../components/PlaySongActivityComponent";

import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function SolutionsPage({activeUser}) {
 
const [url,setUrl] = useState();
const [displaySongActivity,setDisplaySongActivity] = useState();
const [title,setTitle] = useState();
const [activityType,setActivityType] = useState("song");
const carouselInterv = 1000;

let history = useHistory();

function danceMe(){
	setUrl("https://www.youtube.com//embed/NGorjBVag0I");
	setTitle("Leonard Cohen - Dance Me to the End of Love");
	setActivityType("song");
	setDisplaySongActivity(true);
}


function rebirthing(){
	setUrl("https://www.youtube.com//embed/aXAw2BAP6VM");
	setTitle("What is Rebirthing? - Learn");
	setActivityType("activity");
	setDisplaySongActivity(true);
}

function mrBean(){
	setUrl("https://www.youtube.com//embed/z_9mqGnAwNc");
	setTitle("Mr Bean Episode");
	setActivityType("activity");
	setDisplaySongActivity(true);
}

function chopin(){
	setUrl("https://www.youtube.com//embed/Jn09UdSb3aA");
	setTitle("The best of Chopin");
	setActivityType("song");
	setDisplaySongActivity(true);
}

function calming(){
	setUrl("https://www.youtube.com//embed/3NycM9lYdRI");
	setTitle("Calming music");
	setActivityType("song");
	setDisplaySongActivity(true);
}


function bumpy(){
	setUrl("https://www.youtube.com//embed/aDdOnl0bHO4");
	setTitle("One of us");
	setActivityType("song");
	setDisplaySongActivity(true);
}

function meetingPeople(){
	setUrl("https://www.youtube.com//embed/j23nDc6qvOs");
	setTitle("Why meetups are so popular?");
	setActivityType("activity");
	setDisplaySongActivity(true);
}

function podcasts(){
	setUrl("https://www.youtube.com//embed/H1eKGOAd3pI");
	setTitle("Suggested podcasts");
	setActivityType("activity");
	setDisplaySongActivity(true);
}

function randASong(){
	const results = [danceMe,calming,chopin,bumpy];
	const randomIndex = Math.floor(Math.random() * (results.length-1));
	const result = results[randomIndex];
	return result();
}

function randAnActivityOrSong(){
	const results = [danceMe,calming,chopin,bumpy,podcasts,meetingPeople,rebirthing,mrBean];
	const randomIndex = Math.floor(Math.random() * (results.length-1));
	const result = results[randomIndex];
	return result();
}

const goHome = () => {
  history.push('/')
}

return (
<div>

<div  style={{ display: (!displaySongActivity?  'none' : 'block')}}>
	<h3> Hello Again!</h3>
		<p> Allow us to suggest for you the {activityType}:  {title}.</p>
		<p>Please check this out - </p>

	<PlaySongActivityComponent  url={url} />
	<Button className="button button-secondary" onClick={goHome}>Return to homePage!</Button>

	</div>
	<div style={{ display: (displaySongActivity? 'none' : 'block'), width: 700, padding: 30 }}>
	<h4>What would you like to do today?</h4>
  
	<Carousel> 
		<Carousel.Item onClick={randAnActivityOrSong} interval={carouselInterv}>
		<h3>Surprise me!</h3>
		<img 
			className="d-block w-100"
src={surprise_img}			alt="Surprise me"
		/>
		<Carousel.Caption>
			<h3>Surprise me!</h3>
			 
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item onClick={randASong}  interval={carouselInterv}>
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
        <Carousel.Item interval={carouselInterv} onClick={rebirthing} >
		<h3>Find me an activity!</h3>
		<img
			className="d-block w-100"
src={activity_img}			alt="Find me an activity!"
		/>
		<Carousel.Caption>
			<h3>Find me an activity!</h3>
			 
		</Carousel.Caption>
		</Carousel.Item>
        <Carousel.Item interval={carouselInterv}>
		<h3>Meet people!</h3>
		<img onClick={meetingPeople} 
			className="d-block w-100"
src={meeting_people_img}
			alt="Meeting people!"
		/>
		<Carousel.Caption>
			<h3>Meeting people!</h3>
			 
		</Carousel.Caption>
		</Carousel.Item> 
        <Carousel.Item onClick={bumpy} interval={carouselInterv}>
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
        <Carousel.Item onClick={calming} interval={carouselInterv}>
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
	<Button className="button button-secondary" onClick={goHome}>Return to homePage!</Button>

	</div>
	</div>
);
}

export default SolutionsPage;