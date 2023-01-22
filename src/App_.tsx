import React, {useState} from 'react';
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
    const [initMinValue, setInitMinValue] = useState(0)
    const [initMaxValue, setInitMaxValue] = useState(5)


    const [error, setError] = useState(false)
    const [disable, setDisable] = useState(false)

    const [minValue, setMinValue] = useState(initMinValue)
    const [maxValue, setMaxValue] = useState(initMaxValue)
    const [currentValue, setCurrentValue] = useState(minValue)




    // ------------------ ACTION ------------------ //
    // //set minimum from Set
    // function setMinimum(value: string) {
    //     setMinValue(+value)
    // }
    //
    // //set maximum from Set
    // function setMaximum(value: string) {
    //     setMaxValue(+value)
    // }


    function setNewValues(minValue: number, maxValue: number) {
        setError(false)
        setInitMinValue(minValue)
        setInitMaxValue(maxValue)
        setMinValue(+minValue)
        setMaxValue(+maxValue)
        setCurrentValue(+minValue)
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

    function setNewMin(value:number){
        setMinValue(value)
    }

    function setNewMax(value:number){
        setMaxValue(value)
    }

    return (
        <div className="App">
            <Disp valueCounter={currentValue}
                  minValue={minValue}
                  maxValue={maxValue}
                  namesBtn={buttons}
                  disableState={disable}
                  callbackCount={incrementCount}
                  callbackReset={resetCount}/>

            <Set initMinValue={initMinValue}
                 initMaxValue={initMaxValue}
                 setNewMin={setNewMin}
                 setNewMax={setNewMax}
                 namesBtn={buttons}
                 setNewValues={setNewValues}
                 errorState={error}
                 disableState={disable}/>
        </div>
    );
}

export default App_;
