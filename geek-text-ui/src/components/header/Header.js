import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SidePanelButton from '../PanelButton/SidePanelButton';
import UserButton from '../UserMenu/UserButton';
import SignOutButton from '../SignOut/SignOutButton';


const Header = props => (
    <nav className="navigation">
    
        <SidePanelButton />   

        <div className="navcontent"> 
            <Link to="/">GeekText</Link>
            <Link to="/">About</Link>
            <Link to="/books">Books</Link>
            <Link to="/">Summer Specials</Link>
            <Link to="/">Contact</Link>
        </div>
        
        <div className="usercontent">    
          <UserButton />
          <SignOutButton />
        </div>

    </nav>

)


export default Header;