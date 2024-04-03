import React from 'react'
import Solar from './Subclasses/Solar';

import './Hunter.css';
import { Tab, Tabs } from 'react-bootstrap';

const Hunter = () => {
  return (
    <div className='app_hunter' id='hunter'>
        <h1 className='app_hunter_title'>Hunter</h1>
        {/* Info about the hunter */}
        <p className='app_hunter_about'>
        Play the class of the hunter, the class who does the scouting for the vanguard and primarily work alone.
        They primarily use knives and precision weapons such as hand cannons. They dawn their cloak and brave the wilderness.
        </p>

        {/* Use the tabs from react bootstrap to display info about all the light hunter subclasses */}
        <div>
            <Tabs
                className='app_hunter_subclasses'
            >
                {/* Use seperate classes for each tab to ensure clean code */}
                <Tab eventKey="gunslinger" title="Gunslinger">
                    <Solar />
                </Tab>

                <Tab eventKey="arcstrider" title="Arcstrider">
                    arc
                </Tab>

                <Tab eventKey="nightstalker" title="Nightstalker">
                    arc
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Hunter
