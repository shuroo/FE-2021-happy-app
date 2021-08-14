import React from "react";
import './CardComponent.css'; 
import MoodCardComponent from "./MoodCardComponent";

function MoodGallery({moods,activeUser,onCardClick}){

    // function goToChartsOrSolutions(){

    //     if(activeUser.role === 'Admin'){

    //         // redirect to .. charts page..
    //     }else{
    //         //redirect to carousel...
    //     }
    // }

    let moodHtml = moods.map(mood=><MoodCardComponent onCardClick={()=>onCardClick(mood.rate)} key={mood.key+"1"} mood={mood}/>)


return(
<div className="gallery">
    {moodHtml}</div>


)

}

export default MoodGallery;