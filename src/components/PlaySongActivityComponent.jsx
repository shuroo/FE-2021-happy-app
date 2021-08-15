import React, { useState } from "react";
import Iframe from 'react-iframe'

function PlaySongActivityComponent({url}) {
 
    return (
 <div>

<Iframe url={url}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>

</div>
    );

}
export default PlaySongActivityComponent;