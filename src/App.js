import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={()=><Profile state={props.appState.profileData} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" render={()=><Dialogs state={props.appState.dialogsData}/>}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
