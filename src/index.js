import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import { Provider } from "react-redux";
import { firebaseConfig } from './config/config';
import store from "./store/index";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const rootRef = database.ref();
export const itemsRef = rootRef.child('image-list').child('image');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root')
);
registerServiceWorker();