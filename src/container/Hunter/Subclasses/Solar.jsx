import React from 'react'

import './Solar.css';
import { Row, Col, Container } from 'react-bootstrap';

const Solar = () => {
  return (
    <Container  className='app_hunter_solar'>
      <Row>
        {/* Have a gif of the class using the subclass */}
        <Col className='app_hunter_solar_gif'>
            <iframe src="https://giphy.com/embed/fAlgdz2ZLI7WPHfjty" width="480" height="270" frameBorder="0" class="giphy-embed"></iframe>
            {/* <p><a href="https://giphy.com/gifs/DestinyTheGame-destiny-2-destiny2-fAlgdz2ZLI7WPHfjty">via GIPHY</a></p> */}
        </Col>
        {/* Display some info about it */}
        <Col className='app_hunter_solar_about'>
            Equip the Solar Sublcass and use the light to ignite and explode enemies. <br></br>
            Use 2 different supers: the golden gun and blade barrage. <br />
            The main subclass of the famous hunter vanguard Cayde-6.
        </Col>
      </Row>
    </Container>
  )
}

export default Solar
