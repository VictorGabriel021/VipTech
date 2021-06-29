import React, { useState } from 'react';
import './styles.scss';
import { ReactComponent as SearchIcon } from 'core/assets/images/icon-search.svg';

type Props = {
    id?: string;
    limit?: string;
    handleChangeId: (id: string) => void;
    handleChangeLimit: (id: string) => void;
    clearFilters: () => void;
}

const UserFilter = ({ id, limit, handleChangeId, handleChangeLimit, clearFilters }: Props) => {

    return(
        <>
        <div className="user-filters-container">
            <div className="input-search">
                <input
                  type="text"
                  value={id}
                  className="form-control"
                  placeholder="Pesquisar usuário por id" 
                  onChange={event => {handleChangeId(event.target.value);
                  }}
                  />
                <SearchIcon />
            </div>

            <div className="filter-select-item">
                <input
                  type="number"
                  value={limit}
                  className="form-control"
                  placeholder="Selecione a quantidade de items"
                  onChange={event => {handleChangeLimit(event.target.value);
                  }}
                  />
            </div>

            <button className="btn btn-outline-secondary" onClick={clearFilters}>
                LIMPAR FILTRO
            </button>
        </div>
        </>
    );
};

export default UserFilter;
