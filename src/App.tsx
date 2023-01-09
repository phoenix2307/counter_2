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

    /*
    Не працює установка стартового значення на дисплеї. Фінішне значення фіксується нормально
    При резеті завжди падає в нуль
    Походу є косяки в логіці зі стейтами, або невчасно визивається стейт
    Продумати, умова порівняння між min і max має робитися в Display...

     */

    const buttons: ButtonsType = {
        increment: 'inc',
        reset: 'reset',
        setting: 'set'
    }

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)

    let startValue = minValue
    let finishValue = maxValue

    //for Display//---------------------------------------------
    let [valueCounter, setValueCounter] = useState(startValue)
    let [limitValue, setLimitValue] = useState(false)

    const incrementValue = () => {
        setValueCounter(++valueCounter)
        if (valueCounter === finishValue) {
            setLimitValue(true)
        }
    }

    const resetValue = () => {
        setValueCounter(0)
        setLimitValue(false)
    }

    //for Settings//---------------------------------------------


    const changeMinValueInput = (value: string) => {
        setMinValue(+value)
    }

    const changeMaxValueInput = (value: string) => {
        setMaxValue(+value)
    }

    const setValues = (minValues: number, maxValues: number)=> {
        setMinValue(minValues)
        setMaxValue(maxValues)
        // startValue = minValues
        // finishValue = maxValues
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

            <Settings
                changeMinValueInput={changeMinValueInput}
                changeMaxValueInput={changeMaxValueInput}
                minValue={minValue}
                maxValue={maxValue}
                setValues={setValues}
            />

        </div>
    );
}

export default App;
