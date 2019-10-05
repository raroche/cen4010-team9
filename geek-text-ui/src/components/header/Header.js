import React from 'react';
import './Header.css';
import Logo from './Logo.jpeg';
import SidePanelButton from '../PanelButton/SidePanelButton';
import UserButton from '../UserMenu/UserButton';
import SignOutButton from '../SignOut/SignOutButton';


const Header = props => (
  <header>
    <nav className="navbar">
    
        <SidePanelButton />
    
        <div className="headerlogo">
          <a href="/"><img src={Logo} alt="Geek Text" style={{height: '40px'}} /></a>
        </div>

        <div className="navcontent"> 
          <UserButton />
          <SignOutButton />
        </div>

    </nav>
            
  </header>

)



export default Header;