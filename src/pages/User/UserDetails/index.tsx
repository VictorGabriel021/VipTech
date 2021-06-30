import React, { useEffect, useState } from 'react';
import './styles.scss';
import { ReactComponent as ArrowImage } from 'core/assets/images/arrow.svg';
import { Link, useParams } from 'react-router-dom';
import { User } from 'core/types/Dummy';
import dayjs from 'dayjs';
import { makeRequest } from 'core/utils/request';
import LoaderPerfil from '../UserDetailsLoader/LoaderPerfil';
import LoaderDescription from '../UserDetailsLoader/LoaderDescription';

type ParamsType = {
    userId: string
}

const UserDetails = () => {

    const { userId } = useParams<ParamsType>();
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
          makeRequest({url: `/user/${userId}`})
          .then(response => setUser(response.data))
          .finally(() => setLoading(false));
    }, [userId]);

    return(
        <div className="user-details-container">
            <Link to="/users" className="user-details-goback">
                <ArrowImage className="arrow-image" />
                <h1 className="text-goback">Voltar</h1>
            </Link>

            <div className="row justify-content-center align-perfil-description">
                <div className="col-12 col-sm-6 col-md-4 mb-12">
                    {loading ? <LoaderPerfil /> : (
                    <>
                        <div className="user-details-card-picture">
                            <img src={user?.picture} alt={user?.id} className="user-details-image" />
                        </div>
                        <h1 className="user-details-name">Id: {user?.id}<br />
                        {user?.title} {user?.firstName} {user?.lastName}</h1>
                    </>
                    )}
                </div>
                <div className="col-12 col-md-6">
                    {loading ? <LoaderDescription /> : (
                    <>
                        <div className="user-details-card-perfil">
                            <p className="user-details-card-content">
                            <b>Data do Registro:</b> {dayjs(user?.registerDate).format('DD/MM/YYYY')}<br />
                            <b>Email:</b> {user?.email}<br />
                            <b>Telefone:</b> {user?.phone}<br />
                            <b>Gênero:</b> {user?.gender}<br />
                            <b>Data do aniversário:</b> {dayjs(user?.dateOfBirth).format('DD/MM/YYYY')}<br />
                            <b>País:</b> {user?.location?.country}<br />
                            <b>Estado:</b> {user?.location?.state}<br />
                            <b>Cidade:</b> {user?.location?.city}<br />
                            <b>Endereço:</b> {user?.location?.street}<br />
                            </p>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
