import React, {useState,useEffect} from 'react' // Similar as using Constructor class. This the new method!!!
import './ProfileCard.css'
import TinderCard from 'react-tinder-card'
import axios from 'axios'

const onSwipe = (direction) => {
    console.log('You swiped:'+ direction);
  }
const outOfFrame = (name) => {
    console.log('Removed: '+ name);
}

function ProfileCard() {

    //Instead of using class method ( constructor(props) { super(props); this.state ={ name } }) , using the Hooks method !!!
    const [ user, setUser ] = useState ([]);

    useEffect(()=> {
        axios({
            url:  'http://localhost:8001/users',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then( user => {
            setUser(user.data)
        })
    },[])


    return (
        <div className= 'profile-cards'>
            <div className = 'conatainer'>

            {user.map((profile) => (

                <TinderCard className='tinder_card' key= {profile.name} onCardLeftScreen={() => outOfFrame(profile.name)} onSwipe={onSwipe} preventSwipe={['down','up']} >
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front"> 
                                <img src={profile.imageUrl} alt= 'Avatar' className= 'img' />
                                <div className="bottom-left">{profile.name}</div>
                            </div>
                            <div className="flip-card-back">
                            <div className ="textbox">       
                                <h1>{profile.name}</h1>
                            </div>
                            <div className ="textbox-1"> 
                                <h2>Age: {profile.age}</h2>
                            </div>
                            <div className ="textbox-2">
                                <p>"{profile.about}"</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </TinderCard>
                ))
            }
            </div>
        </div>
)
}
export default ProfileCard
