import React from 'react';
import "./About.css";
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className='about_container'>
            {/* Div about general info about the game */}
            <div className='about_gameinfo'>
                Destiny 2 is a online first-person shooter developed and published by Bungie. <br />
                The game is free-to-play with a live service model. Destiny 2 is available on 
                PC, Xbox One, Series X/S, and the PS4/5.
            </div>
            {/* Div about the plot of the game */}
            <div className='about_story'>
                Assume the role of a gaurdian, defenders of the last safe city on Earth with the power of the light.
                Fight off against humanity's foes with the 3 playable classes: <br></br>
                <ul>
                    <li>Titan</li>
                    <li>Hunter</li>
                    <li>Warlock</li>
                </ul>
            </div>
        </div>
    )
}

export default About
