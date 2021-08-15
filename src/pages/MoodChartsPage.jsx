import React, { useState,useEffect,useMemo } from "react";
import { MDBContainer } from "mdbreact";
import { Bar,   Chart,   Pie ,Line} from "react-chartjs-2";
import UserModel from "../model/UserModel";
import UserMoodsModel from "../model/UserMoodsModel";
import Parse from 'parse';
import Utils from '../utils/Utils';
import { Button, Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import './moodCharts.css';
import { useHistory } from 'react-router-dom';


function MoodChartsPage({activeUser}) {

	const [selectedUser,setSelectedUser] = useState();
	const [userMoods,setUserMoods] = useState([]);
	const [userEmailToDisplay,setUserEmailToDisplay] = useState();
	const [failedToFetchUser,setFailedToFetchUser] =useState(false);
	const [data,setData] = useState({
		labels: [],
		datasets: [
		{
			labels: [],
			label: "",
			data: [],
			backgroundColor: ["red", "lightblue", "lightgreen","pink","lightgray"], 
			hoverBackgroundColor: "rgba(232,105,90,0.8)",
			borderWidth: 1,
			borderColor: "#000000"
		}
		]
	});
	let history = useHistory();

	const goToSolutions = () => {
	  history.push('/solutions')
	}

	const line = useMemo(() =>{return <Line data={data}
	style={{ maxHeight: '300px'}}/> }
   ,[data]);
 	const bar = useMemo(() =>{return <Bar data={data}
	style={{ maxHeight: '300px'}}/> }
   ,[data]);
   const pie =    useMemo(() =>{return <Pie style={{ maxHeight: '300px',maxWidth: '30%' }}
   data={data}
   labels={data.labels}
   width={3}
   height={3}
   options={{
	 legend:{display:false},
	 title: {display: true},
   }}/>})


	function fetchUserByEmail() {
		Utils.parseInit();
		const query = new Parse.Query("User");
		query.equalTo("email",userEmailToDisplay).find().then((usrArr)=>{
			setSelectedUser(new UserModel(usrArr[0])); 
		}).catch(function(error){
			console.log("Error: " + error.code + " " + error.message);   
			// todo: in alert!   
			console.log("Error: Failed to fetch selected user, please check your email"); 
			setFailedToFetchUser(true);      
		});
	}


	function fetchMoodsByUser() {
		if(!selectedUser){ return; }
		const query = new Parse.Query("UserMoods");
		query.equalTo("email", userEmailToDisplay).ascending("moodDate");
		query.select("moodRate","moodDate").find().then(function(moods){
			setUserMoods(moods.map(mood=>new UserMoodsModel(mood)));
		}).catch(function(error){
			console.log("Error: " + error.code + " " + error.message);       
		});
	
		var dates = userMoods.map(mood=> { return Utils.dateFormat(mood.moodDate);});
		var rates = userMoods.map(mood=> { return mood.moodRate});

		console.log("dates:"+dates.length+",rates:"+rates.length);
		const dataCln = {...data};
		dataCln.labels = dates;
		dataCln.datasets[0].data= rates;  
		console.log(dataCln);
		setData(dataCln);

	}

	useEffect(()=>fetchMoodsByUser(),[selectedUser]);


return (
	<div>
	<div>
		<h4>Select user to view its mood graph:</h4>
		<Alert  style={{display:(!failedToFetchUser? "none" : "block")}} className="alert alert-warning">
		Error: Failed to fetch selected user, please check your email
		</Alert> 
		<Form   onSubmit={e=>e.preventDefault()}>
			<Form.Label>Enter user email to display its graphs:</Form.Label>
		 	<Form.Control type="email" placeholder="Enter email" 
                        value={userEmailToDisplay || ''} onChange={e => setUserEmailToDisplay(e.target.value)} />
		</Form>
		<Button className="button button-secondary" onClick={fetchUserByEmail}>Show Graphs!</Button>
		<Button className="button button-secondary" onClick={goToSolutions}>GoTo Suggested Solutions!</Button>

</div>
<div className="graphsCls">
		<MDBContainer>
	{line}
	</MDBContainer>	
	<MDBContainer>
	{pie}
	</MDBContainer>
	</div>
	
</div>
)}

export default MoodChartsPage;
