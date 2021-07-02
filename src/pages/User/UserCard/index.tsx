import React from  'react';
import './styles.scss';

type Props = {
    id?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
    title?: string;
}

const UserCard = (user: Props) => (
    <div className="card-content">
        <div className="card-picture-align">
            <img src={user.picture} alt={user.id} className="card-picture" />
        </div>
        <p className="card-text">
            Id: {user.id}<br />
            {user.title} {user.firstName} {user.lastName}
        </p> 
    </div>
)

export default UserCard;
