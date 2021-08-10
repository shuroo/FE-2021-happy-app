import React from "react";
import './CardComponent.css'; 
import MoodCardComponent from "./MoodCardComponent";

function MoodGallery({moods,activeUser}){

    function goToChartsOrSolutions(){

        if(activeUser.role === 'Admin'){

            // redirect to .. charts page..
        }else{
            //redirect to carousel...
        }
    }

    let moodHtml = moods.map(mood=><MoodCardComponent onClick={alert(111)} key={mood.key+"1"} mood={mood} rate={mood.rate}/>)


return(
<div className="gallery">{moodHtml}</div>

)

}

export default MoodGallery;