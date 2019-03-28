import React, { Component } from 'react';
import store from '../../stores/stores';
import { observer } from 'mobx-react';

@observer
class Filters extends Component{

    constructor(props: {}){
        super(props);

        store.getCategories();
    }

    render(){
        return <div>
            <h3>{store.departments ? 'Departments' : 'Loading Departments...'}</h3>
            {store.departments && store.departments.map(( dep ) => {
                return <a key={dep.department_id} 
                    href={`/department/${dep.name}`}>
                    {dep.name}
                </a>;
            })}

            <h3>{store.categories ? 'Categories' : 'Loading Categories...'}</h3>
            {store.categories && store.categories.map(( cat ) => {
                return <a key={cat.category_id} 
                    href={`/department/${cat.name}`}>
                    {cat.name}
                </a>;
            })}

            {/*<button onClick={store.onAdd}>
                Ver más
            </button>*/}
        </div>
    }
}

export default Filters;