import React from 'react'
import './NavBar.css';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ModeCommentRoundedIcon from '@material-ui/icons/ModeCommentRounded';import { IconButton } from '@material-ui/core';
import TinderLogo from './Tinder-logo.png';
function NavBar() {
    return (
        <div className = 'navbar'>
        <IconButton className= 'button_profile'>
            <PersonRoundedIcon fontSize ='large' className = 'navabar_profile' />     
        </IconButton>
     
        <img className='navabar_tinderlogo' src= {TinderLogo}  alt= "tinder-logo" />
       
        <IconButton className= 'button_chat'>
        <ModeCommentRoundedIcon  className='navbar_chat' />
        </IconButton>
        </div>
    )
}

export default NavBar
