import { observable, autorun, toJS } from 'mobx';

import api from '../utils/api';

export type depsArray = { name: string, department_id: number }[];
export type catsArray = { name: string, category_id: number, deparment_id: number }[];

class Store {

    @observable departments: depsArray|null = null;
    @observable loadingDeps: boolean = false;

    @observable categories: catsArray|null|false = null;


    getDepartments(){
        if(this.loadingDeps || this.departments) return;

        var depsLocal = localStorage.getItem('departments');
        var depsLocalTime = localStorage.getItem('departments_time');
        if(depsLocal && depsLocalTime && 
            Date.now() - parseInt(depsLocalTime) < 7 * 24 * 60 * 60 * 1000 ) {
            this.departments = JSON.parse(depsLocal);
            return;
        }

        this.loadingDeps = true;
        var callback = (result: depsArray) => {
            console.log('departamentos cargados', result);
            //this.departments.set(result);
            
            localStorage.setItem('departments', JSON.stringify(toJS(store.departments)));
            localStorage.setItem('departments_time', Date.now() + '');

            this.departments = result;
            this.loadingDeps = false;
        }
        api.getDepartments(callback);
    }

    getCategories(){
        if(this.categories != null) return;

        this.categories = false;
        api.getCategories((result: catsArray) => {
            //console.log('categorías cargadas', result);
            this.categories = result;
        });
    }
}

const store = new Store();

autorun(( ) => {
    
    
});


export default store;