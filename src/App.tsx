import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/display-counter/Display";
import {Settings} from "./components/settings-counter/Settings";

export type ButtonsType = {
    increment: string
    reset: string
    setting: string
}

function App() {

    const buttons: ButtonsType = {
        increment: 'inc',
        reset: 'reset',
        setting: 'set'
    }

    let startValue = 0
    let maxValue = 5

    let [valueCounter, setValueCounter] = useState(startValue)
    let [limitValue, setLimitValue] = useState(false)

    const incrementValue = () => {
        setValueCounter(++valueCounter)
        if (valueCounter === maxValue) {
            setLimitValue(true)
        }
    }

    const resetValue = () => {
        setValueCounter(0)
        setLimitValue(false)
    }

    return (
        <div className="App">
            <Display
                valueCounter={valueCounter}
                nameButtons={buttons}
                increment={incrementValue}
                reset={resetValue}
                limitValue={limitValue}
            />
            <Settings/>
        </div>
    );
}

export default App;
