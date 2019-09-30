import React from 'react';
import './SidePanelButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const SidePanelButton = props => (
    <button className="panelButton" onClick={props.click}><FontAwesomeIcon icon={faBars} /></button>
);

export default SidePanelButton;