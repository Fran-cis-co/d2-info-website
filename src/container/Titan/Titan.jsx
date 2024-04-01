import React from 'react'

import './Titan.css';
import { Tab, Tabs } from 'react-bootstrap';

const Titan = () => {
  return (
    <div className='app_titan'>
      <h1 className='app_titan_title'>Titan</h1>
        {/* Info about the titan */}
        <p className='app_hunter_about'>
        Play the class of the titan, the last city's front line of defense. The titan is vital to the last city's defenses.
        Titans use their strength to defeat their enemies with thundering fists.
        </p>

        {/* Use the tabs from react bootstrap to display info about all the light titan subclasses */}
        <div>
            <Tabs
                className='app_titan_subclasses'
            >
                {/* Use seperate classes for each tab to ensure clean code */}
                <Tab eventKey="sunbreaker" title="Sunbreaker">
                    solar
                </Tab>

                <Tab eventKey="striker" title="Striker">
                    arc
                </Tab>

                <Tab eventKey="defender" title="Defender">
                    arc
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Titan
