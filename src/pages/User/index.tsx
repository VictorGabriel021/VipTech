import React, { useCallback, useEffect, useState } from 'react';
import './styles.scss';
import UserCard from './UserCard';
import { UserResponse, Users } from 'core/types/Dummy';
import { Link } from 'react-router-dom';
import Pagination from 'core/components/Pagination';
import UserFilter from 'core/components/UserFilter';
import { makeRequest } from 'core/utils/request';
import UserCardLoader from './UserCardLoader';

const User = () => {

    const [dataResponse, setDataResponse] = useState<UserResponse>();
    const [userResponse, setUserResponse] = useState<Users>();
    const [activePage, setActivePage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [id, setId] = useState('');
    const [limit, setLimit] = useState('');
    const [loading, setLoading] = useState(false);
    const [hideCard, setHideCard] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = useCallback(() => {
        const params = {
            page: activePage,
            limit: limit ? limit : '10'
        }       

        setLoading(true)
        setError(false);

        if (id.length > 0) {
            setHideCard(false)
            setActivePage(0);
            setPageCount(1);

            makeRequest({ url: `/user/${id}` })
                .then(response => {
                    setUserResponse(response.data)
                })
                .catch(error => {
                    setHideCard(true)
                    setUserResponse(undefined)
                    setDataResponse(undefined)
                    setError(true);
                })
                .finally(() => setLoading(false));
        }
        else {
            setHideCard(true)
            makeRequest({ url: '/user', params })
                .then(response => {
                    setDataResponse(response.data)
                    setPageCount(Math.ceil(response.data.total / response.data.limit))
                }).finally(() => setLoading(false));
        }

    }, [activePage, limit, id]);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const handleChangeId = (id: string) => {
        setId(id);
    }

    const handleChangeLimit = (limit: string) => {
        setLimit(limit);
        setActivePage(0);
        setId('');
    }

    const clearFilters = () => {
        setActivePage(0);
        setId('');
        setLimit('');
    }

    return (
        <>
            <UserFilter
                id={id}
                limit={limit}
                handleChangeId={handleChangeId}
                handleChangeLimit={handleChangeLimit}
                clearFilters={clearFilters} />

            <div className="card-container">
                {hideCard ?
                    loading ? <UserCardLoader /> :
                        dataResponse?.data.filter(data => data.id.includes(id)).map(user => (
                            <Link to={`/users/${user.id}`} key={user.id}>
                                <UserCard key={user.id} id={user.id} title={user.title} firstName={user.firstName}
                                    lastName={user.lastName} picture={user.picture} />
                            </Link>
                        )) :

                    loading ? <UserCardLoader /> :
                        <Link to={`/users/${userResponse?.id}`} key={userResponse?.id}>
                            <UserCard key={userResponse?.id} id={userResponse?.id} title={userResponse?.title} firstName={userResponse?.firstName}
                                lastName={userResponse?.lastName} picture={userResponse?.picture} />
                        </Link>
                }
                {error && <h3 className="error-id-invalid">Id inválido</h3>}
            </div>
            <div className="pagination-align">
                <Pagination
                    pageCount={pageCount}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            </div>
        </>
    );
};

export default User;
