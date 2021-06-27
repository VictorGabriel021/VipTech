import React, { useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';
import UserCard from './UserCard';
import { UserResponse } from 'core/types/Dummy';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60d743ca07d01a29db7a5fc0';

const User = () => {

    const [dataResponse, setDataResponse] = useState<UserResponse>();

    useEffect(() => {
        const params = {
            limit: 10
          }

        axios({
            method: 'GET',
            url: `${BASE_URL}/user`,
            headers: { 'app-id': APP_ID },
            params
          })
          .then(response => setDataResponse(response.data));
    }, []);

    return(
        <div className="card-container">           
            {
                dataResponse?.data.map(user => (
                    <Link to={`/users/${user.id}`} key={user.id}>
                        <UserCard key={user.id} id={user.id} title={user.title} firstName={user.firstName} 
                        lastName={user.lastName} picture={user.picture} />
                    </Link>
                ))
            }
        </div>
    );
};

export default User;
