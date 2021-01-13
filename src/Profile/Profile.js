import React from 'react'
import './Profile.css';

function Profile({imageUrl,description}) {
    return (
        <div className="profile">
            <img
                src={imageUrl}
                alt=""
            />
            <p className="profile__description">{description}</p>
        </div>
    )
}

export default Profile
