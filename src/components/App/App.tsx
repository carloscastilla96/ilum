import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';
import Dropzone from 'react-dropzone';

import { observable } from 'mobx';

import api from '../../utils/api';
import store from '../../stores/stores';
import { observer } from 'mobx-react';

@observer
class App extends Component {

  @observable file: any = null;
  @observable fileName: string = '';

  constructor(props: {}){
    super(props);

    store.getDepartments();
  }

  render() {
    
    

    return (
      <div className="App">

        <Dropzone onDrop={acceptedFiles => {
            //this.file = acceptedFiles[0];
            console.log(acceptedFiles[0]);
            
            var reader = new FileReader();

            reader.onload = (e: any) => {
              this.file = e.target.result;
              console.log(this.file);
            }

            reader.readAsDataURL(acceptedFiles[0]);
          }}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>

        {this.file && <div>
          <img src={this.file} style={{ width: '100%' }} />
          <input type="text" onInput={(e: any) => this.fileName = e.target.value}/>
          <button onClick={() => {
            store.uploadFile(this.fileName + '.jpg', this.file);
          }}>Subir imagen</button>
        </div>}

        <h1>{ store.pageTitle }</h1>
      
        <NavBar />

        <Store />

      </div>
    );
  }
}

export default observer(App);
