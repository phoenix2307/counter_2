import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./components/display-counter/Display";
import {Settings} from "./components/settings-counter/Settings";

function App() {
    return (
        <div className="App">
            <Display/>
            <Settings/>
        </div>
    );
}

export default App;
