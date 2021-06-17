import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


const renderEntireTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App appState={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree();
store.subscribe(renderEntireTree);

reportWebVitals();
