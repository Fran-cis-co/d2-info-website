import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  // Set a useState to toggle the menu to choose which class to show info of
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app_navbar'>
        {/* Title of Game */}
        <div className='app_navbar_title'>
            <h1>Destiny 2</h1>
        </div>

        {/* Create hyperlinks to each part of the website */}
        <ul className='app_navbar_links'>
          <li><a href='#about'>About</a></li>
          <li className='app_navbar_classes'>
            <div  onClick={() => setToggleMenu(true)}>Classes</div>
            {/* If clicked then display menu */}
            {
              toggleMenu &&
              (
                <div className='app_navbar_links_dropdown'>
                  <ul className='app_navbar_links_dropdown_links'>
                    <li><a href='#titan' onClick={() => setToggleMenu(false)}>Titan</a></li>
                    <li><a href='#hunter' onClick={() => setToggleMenu(false)}>Hunter</a></li>
                    <li><a href='#warlock' onClick={() => setToggleMenu(false)}>Warlock</a></li>
                  </ul>
                </div>
              )
            }
          </li>
          {/* <li><a href='#titan'>Titan</a></li>
          <li><a href='#hunter'>Hunter</a></li>
          <li><a href='#warlock'>Warlock</a></li> */}
          <li><a href='#storepage'>Storepage</a></li>
        </ul>

        {/* Put that I created the website */}
        <div className='app_navbar_createdby'>
          <nav>
            Fanmade website created by
            <a 
              href='https://www.linkedin.com/in/francisco-contreras-191202249' 
              className='app_navbar_createdby_link'
            >
              Francisco Contreras
            </a>
          </nav>
        </div>
    </nav>
  )
}

export default Navbar
