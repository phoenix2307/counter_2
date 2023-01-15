import React, {useState} from 'react';
import './App.css';
import {Set} from "./components_for_App_/set/Set";
import {Disp} from "./components_for_App_/disp/Disp";

function App_() {

    return (
        <div className="App">
            <Disp/>
            <Set/>

        </div>
    );
}

export default App_;
