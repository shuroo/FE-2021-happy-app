
import React from "react";
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

function DDMenu({items,setOnClick}){
    return (
        (!items ? null : 
                <DropdownMenu  >
                    <MenuItem></MenuItem>
            { items.map(item=><MenuItem text={item.name} key={item.key} onClick={setOnClick(item)} />) }
                
            </DropdownMenu>
        )
    );
}

export default DDMenu;