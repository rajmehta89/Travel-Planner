import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Import your CSS file
import { UserEvents } from '../Profile-Events/UserEvnets';

const UserContainer = ({user}) => {
  return (
    <div className="user-container">
      <img src={user.image} alt={user.name} className="user-image" />
      <p className="user-name">{user.name}</p>
    </div>
  );
};

const Profile = () => {

  const [userOption,setUserOption]=useState(null);
  const navigate=useNavigate();

  const user = {
    name: 'John Doe',
    image: 'Profile.jpg',
  };

  return (

    <div className="outer-container">

      <div className="backup"></div>
      <div className="backlow"></div>

      <div className="inner-container">

        
        <div className='UserProfile'>
        <div className='UserProfile-up'>
        <UserContainer user={user}/>
        </div>
       <div className='UserProfile-down'>
        <button type="button" className="btn btn-lg btn-light" onClick={()=>setUserOption("Reminders")}>Reminders</button>
        <button type="button" className="btn btn-lg btn-light" onClick={()=>setUserOption("Your-Events")}>Your-Events</button>
        <button type="button" className="btn btn-lg btn-light" onClick={()=>{navigate("/Event")}}>Create-Event</button>
        </div>
        </div>

        {userOption==="Your-Events" ?<div className='mainProfile-right'>
        <UserEvents/>
        </div>:<div className="mainProfile-right"> </div> }      

      </div>
      </div>
  );
};

export default Profile;