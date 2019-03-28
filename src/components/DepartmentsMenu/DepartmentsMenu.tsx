import React, { Component } from 'react';
import { observer } from 'mobx-react';

import store from '../../stores/stores';

const DepartmentsMenu = () => {
    var handleClick = (id: number) => {
        store.setDepartment(id);
    }

    return <div>
        {store.departments && store.departments.map(( dep ) => {
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
    </div>;
}


export default observer(DepartmentsMenu);