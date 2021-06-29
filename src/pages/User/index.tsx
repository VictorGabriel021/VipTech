import React, { useCallback, useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';
import UserCard from './UserCard';
import { UserResponse } from 'core/types/Dummy';
import { Link } from 'react-router-dom';
import Pagination from 'core/components/Pagination';
import UserFilter from 'core/components/UserFilter';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60db1bce83922b2e8e111d4b';

const User = () => {

const [dataResponse, setDataResponse] = useState<UserResponse>();
const [activePage, setActivePage] = useState(0);    
const [pageCount, setPageCount] = useState(0);
const [id, setId] = useState('');    
const [limit, setLimit] = useState(''); 

    const getUsers = useCallback(() => {          
        const params = {
            page: activePage,
            limit: limit
          }

        axios({
            method: 'GET',
            url: `${BASE_URL}/user`,
            headers: { 'app-id': APP_ID },
            params
          })
          .then(response => {          
              setDataResponse(response.data)
              setPageCount(Math.ceil(response.data.total / response.data.limit))        
            });
            
    }, [activePage, limit, id]);
  
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const handleChangeId = (id: string) => {
        setId(id);
    }

    const handleChangeLimit = (limit: string) => {
        setActivePage(0);
        setId('');
        setLimit(limit);
    }

    const clearFilters = () => {
        setActivePage(0);
        setId('');
        setLimit('');
    }

    return(
        <>
        <UserFilter
          id={id}
          limit={limit}
          handleChangeId={handleChangeId}
          handleChangeLimit={handleChangeLimit}
          clearFilters={clearFilters} />

        <div className="card-container">           
            {
                dataResponse?.data.filter(data  => data.id.includes(id)).map(user => (
                    
                    <Link to={`/users/${user.id}`} key={user.id}>
                        <UserCard key={user.id} id={user.id} title={user.title} firstName={user.firstName} 
                        lastName={user.lastName} picture={user.picture} />
                    </Link>
                ))
            }           
        </div>
        <div className="pagination-align">
            <Pagination
                pageCount={pageCount}
                activePage ={activePage}
                onChange={page => setActivePage(page)}
            />
        </div>
        </>
    );
};

export default User;
