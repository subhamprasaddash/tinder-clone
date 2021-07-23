import React, {Component} from 'react'
import './SwipeControls.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';



class SwipeControls extends Component {

    constructor(){
        super();

        this.state = {
           fav: false,
           star: false
        }
    }

    changeColorFav(){
        this.setState({fav: !this.state.fav})
     }
    changeColorStar(){
        this.setState({star: !this.state.star})
    }
 

    render(){

    let btn_class_fav = this.state.fav ? "swipeControls-fav" : "swipeControls-notfav";
    let btn_class_star = this.state.star ? "swipeControls-star" : "swipeControls-notstar";

    return (
        <div className='swipeControls'>
            <IconButton className='swipeControls-replay' >
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeControls-flash' > 
                <FlashOnIcon fontSize="large" />
            </IconButton>
            <IconButton className = {btn_class_fav} onClick = {this.changeColorFav.bind(this)} >
                <FavoriteIcon fontSize="large"  />
            </IconButton>
            <IconButton className = {btn_class_star} onClick = {this.changeColorStar.bind(this)} >
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className='swipeControls-close' >
                <CloseIcon fontSize="large" />
            </IconButton> 
        </div>
    )
}
}
export default SwipeControls
