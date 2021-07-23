import React from 'react'
import './SwipeControls.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';



function SwipeControls() {
    return (
        <div className='swipeControls'>
            <IconButton className='swipeControls-replay' >
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeControls-flash' > 
                <FlashOnIcon fontSize="large" />
            </IconButton>
            <IconButton className = 'swipeControls-fav'>
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeControls-star' >
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeControls-close' >
                <CloseIcon fontSize="large" />
            </IconButton> 
        </div>
    )
}

export default SwipeControls
