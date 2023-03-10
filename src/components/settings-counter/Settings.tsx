import React, {useState} from "react";
import s from './Settings.module.css'
import {Button} from "../button-counter/Button";
import {InputCounter} from "../input-counter/InputCounter";

type SettingsPropsType = {
    changeMinValueInput: (value: string) => void
    changeMaxValueInput: (value: string) => void
    minValue: number
    maxValue: number
    // setValues: (minValues: number, maxValues: number)=>void
    setValues: () => void
    errorValue?: boolean
}

/*
1. callback
2. min > max - change className and disabled SET

 */

export const Settings = (props: SettingsPropsType) => {

    const [minSetValue, setMinSetValue] = useState(props.minValue)
    const [maxSetValue, setMaxSetValue] = useState(props.maxValue)

    const changeMinValueInput = (value: string) => {
        props.changeMinValueInput(value)
    }

    const changeMaxValueInput = (value: string) => {
        props.changeMaxValueInput(value)
    }

    const setValuesHandler = () => {
        // props.setValues(props.minValue, props.maxValue)
        props.setValues()
    }



    return (
        <div className={s.settingCounter}>
            <div className={s.positionInputs}>
                <InputCounter
                    type={'text'}
                    span={'min value: '}
                    value={minSetValue}
                    callBackHandler={changeMinValueInput}
                    errorValue={props.errorValue}/>

                <InputCounter
                    type={'text'}
                    span={'max value: '}
                    value={maxSetValue}
                    callBackHandler={changeMaxValueInput}
                    errorValue={props.errorValue}/>

            </div>
            <div className={s.positionButton}>

                <Button nameButton={'SET'} callBackHandler={setValuesHandler}/>
            </div>

        </div>
    )
}