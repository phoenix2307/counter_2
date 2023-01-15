import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/display-counter/Display";
import {Settings} from "./components/settings-counter/Settings";
import {TestComp} from "./components/TestComp";

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

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)

    //for Display//---------------------------------------------
    let [valueCounter, setValueCounter] = useState(minValue)
    let [limitValue, setLimitValue] = useState(false)

    const incrementValue = () => {
        setValueCounter(++valueCounter)
        if (valueCounter === maxValue) {
            setLimitValue(true)
        }
    }

    const resetValue = () => {
        setValueCounter(minValue)
        setLimitValue(false)
    }

    //for Settings//---------------------------------------------

    /*
  * прописати логіку перевірки*/
    let errorValue = false

    const changeMinValueInput = (value: string) => {
        setMinValue(+value)
        errorValue = minValue > maxValue
        console.log(errorValue)
        console.log(minValue)
        debugger
    }

    const changeMaxValueInput = (value: string) => {
        setMaxValue(+value)
        errorValue = minValue > maxValue
        console.log(errorValue)
    }

    const setValues = () => {
        setValueCounter(minValue)
    }

    /*TEST INPUT*/

    const span1 = 'start value'
    const span2 = 'finish value'

    const [startValue, setStartValue] = useState(0)
    const [finishValue, setFinishValue] = useState(0)
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)

    const changeValue1 = (value: number) => {
        setStartValue(value)
        console.log(value)
        console.log(startValue)
    }

    const changeValue2 = (value: number) => {
        setFinishValue(value)
        console.log(value)
        console.log(startValue)
    }


    /*
    * error опрацьовується в верхньому компоненті
    * він міняє відображення на Display та стан інпутів, кнопки Set в Settings
    * фіксується по onChange!!!!
    *
    * */

    return (
        <div className="App">

            {/*<Display*/}
            {/*    valueCounter={valueCounter}*/}
            {/*    nameButtons={buttons}*/}
            {/*    increment={incrementValue}*/}
            {/*    reset={resetValue}*/}
            {/*    limitValue={limitValue}*/}
            {/*/>*/}

            {/*<Settings*/}
            {/*    changeMinValueInput={changeMinValueInput}*/}
            {/*    changeMaxValueInput={changeMaxValueInput}*/}
            {/*    minValue={minValue}*/}
            {/*    maxValue={maxValue}*/}
            {/*    setValues={setValues}*/}
            {/*    errorValue={errorValue}*/}
            {/*/>*/}

            <TestComp
                value={startValue}
                span={span1}
                errorStatus={error1}
                callback={changeValue1}
            />

            <TestComp
                value={finishValue}
                span={span2}
                errorStatus={error2}
                callback={changeValue2}
            />

        </div>
    );
}

export default App;
