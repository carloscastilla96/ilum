import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

const NavBar = () => {
    console.log('print desde navbar', store.departments);
    if(!store.departments) return <p>Cargando...</p>;

    return <nav>
        <h1>{store.departments.length}</h1>
        {store.departments.map(( dep ) => {
            return <a key={dep.department_id} 
                href={`/department/${dep.name}`}>
                {dep.name}
            </a>;
        })}
    </nav>;
}


export default observer(NavBar);