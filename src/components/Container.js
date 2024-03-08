import * as React from 'react';
import "./Container.css"
import TextButton from "./TextButton.js";
import PinnedSubheaderList from "./List.js";
import MuiSlider from "./Slider.js";

function Container({title, users, hardwareSets}) {
    return(
        <div className="container">
            <h2>{title}</h2>
                <ul>
                    <PinnedSubheaderList heading="Authorized Users" list={users}/>
                </ul>
                <ul>
                    {hardwareSets.map((hardwareSet) => (
                        <>
                            <h3 className="hardwareSet" key={hardwareSet[0]}>
                                {hardwareSet[0]}: {hardwareSet[1]}/{hardwareSet[2]} 
                            </h3>
                            <MuiSlider capacity={hardwareSet[2]}></MuiSlider>
                        </>
                    ))}
                </ul>
            <TextButton text="Check In"id = "checkIn"/>
            <TextButton text="Check Out" id = "checkOut"/>
        </div>
    );
}

export default Container;