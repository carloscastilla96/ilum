import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

const NavBar = () => {
    if(!store.departments) return <p>Cargando...</p>;

    var handleClick = (id: number) => {
        store.currentDept = id;
    }

    return <nav>
        <h1>{store.departments.length}</h1>
        {store.departments.map(( dep ) => {
            return <button key={dep.department_id} 
                onClick={() => {
                    handleClick(dep.department_id);
                }}
                style={{
                    backgroundColor: store.currentDept === dep.department_id ? '#E0E0E0' : 'white',
                }}
                className={store.currentDept === dep.department_id ? 'active' : ''}>
                {dep.name}
            </button>;
        })}
    </nav>;
}


export default observer(NavBar);