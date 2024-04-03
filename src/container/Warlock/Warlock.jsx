import React from 'react';

import './Warlock.css';
import { Tab, Tabs } from 'react-bootstrap';

const Warlock = () => {
  return (
    <div className='app_warlock' id='warlock'>
      <h1 className='app_warlock_title'>Warlock</h1>
        {/* Info about the warlock */}
        <p className='app_warlock_about'>
        Play the class of the warlock, the ones who spend the most time in the archives than the rest of the classes.
        Warlocks have devoted themselves to understand better the power of the traveler. Warlocks are known to push
        the boundaries of knowledge, however some go too deep into terriories of danger.
        </p>

        {/* Use the tabs from react bootstrap to display info about all the light warlock subclasses */}
        <div>
            <Tabs
                className='app_warlock_subclasses'
            >
                {/* Use seperate classes for each tab to ensure clean code */}
                <Tab eventKey="dawnblade" title="Dawnblade">
                    solar
                </Tab>

                <Tab eventKey="stormcaller" title="Stormcaller">
                    arc
                </Tab>

                <Tab eventKey="voidwalker" title="Voidwalker">
                    arc
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Warlock
