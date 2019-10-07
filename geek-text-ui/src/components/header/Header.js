import React from 'react';
import './Header.css';
import Logo from './Logo.jpeg';
import SidePanelButton from '../PanelButton/SidePanelButton';
import UserButton from '../UserMenu/UserButton';
import SignOutButton from '../SignOut/SignOutButton';


const Header = props => (
    <nav className="navigation">
    
        <SidePanelButton />   

        <div className="navcontent"> 
            <a href="/">GeekText</a>
            <a href="/">About</a>
            <a href="/books">Books</a>
            <a href="/">Summer Specials</a>
            <a href="/">Contact</a>
        </div>
        
        <div className="usercontent">    
          <UserButton />
          <SignOutButton />
        </div>

    </nav>

)



export default Header;