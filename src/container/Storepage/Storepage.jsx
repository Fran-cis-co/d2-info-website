import React from 'react'
import { Button } from 'react-bootstrap';

import './Storepage.css';

const Storepage = () => {
  return (
    <div className='app_storepage'>
        <div className='app_storepage_title'>
            Become Legend
        </div>

        <div className='app_storepage_link'>
            <Button variant='outline-light'><a className='app_storepage_href' href='https://www.bungie.net/7/en/Destiny/NewLight'>Go To Storepage</a></Button>
        </div>
    </div>
  )
}

export default Storepage
