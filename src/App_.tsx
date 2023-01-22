import React, {useEffect, useState} from 'react';
import './App.css';
import {Set} from "./components_for_App_/set/Set";
import {Disp} from "./components_for_App_/disp/Disp";

export type ButtonsType = {
    count: string
    reset: string
    set: string
    apply: string
}

function App_() {
    // ------------------ STATE ------------------ //

    const buttons: ButtonsType = {
        count: 'count',
        reset: 'reset',
        set: 'set',
        apply: 'apply'
    }

    // init values from server


    let initMinValue = getMinValue()
    function getMinValue (){
        let newMinValue = localStorage.getItem('min-value')
        if(newMinValue){
            return JSON.parse(newMinValue)
        }
    }

    let initMaxValue = getMaxValue()
    function getMaxValue (){
        let newMaxValue = localStorage.getItem('max-value')
        if(newMaxValue){
            return JSON.parse(newMaxValue)
        }
    }

    const [error, setError] = useState(false)
    const [minValue, setMinValue] = useState(initMinValue)
    const [maxValue, setMaxValue] = useState(initMaxValue)
    const [currentValue, setCurrentValue] = React.useState<number>(minValue)

    // ------------------ ACTION ------------------ //

    useEffect(() => {
        setNewValues(minValue, maxValue)
    }, [minValue, maxValue])

    function setToLS() {
        localStorage.setItem('min-value', JSON.stringify(minValue))
        localStorage.setItem('max-value', JSON.stringify(maxValue))
    }

    function setNewValues(minValue: number, maxValue: number) {
        setError(false)
        setMinValue(minValue)
        setMaxValue(maxValue)
        setToLS()
        setCurrentValue(minValue)
    }

    function incrementCount() {
        setCurrentValue(actualValue => actualValue + 1)
        if (currentValue === maxValue) {
            setError(true)
        }
    }

    function resetCount() {
        setCurrentValue(minValue)
    }

    function setNewMin(value: number) {
        setMinValue(value)
    }

    function setNewMax(value: number) {
        setMaxValue(value)
    }

    return (
        <div className="App">
            <Disp valueCounter={currentValue}
                  minValue={minValue}
                  maxValue={maxValue}
                  namesBtn={buttons}
                  callbackCount={incrementCount}
                  callbackReset={resetCount}
            />

            <Set initMinValue={initMinValue}
                 initMaxValue={initMaxValue}
                 setNewMin={setNewMin}
                 setNewMax={setNewMax}
                 namesBtn={buttons}
                 setNewValues={setNewValues}
                 errorState={error}
            />
        </div>
    );
}

export default App_;