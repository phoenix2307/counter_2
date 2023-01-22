import React, {useEffect, useState} from "react";
import s from './Set.module.css'
import '../../App.css'
import {Inp} from "../input/Inp";
import {Btn} from "../btn/Btn";
import {ButtonsType} from "../../App_";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type SetType = {
    initMinValue: number
    initMaxValue: number
    namesBtn: ButtonsType
    setNewValues: (minValue: number, maxValue: number) => void
    errorState: boolean
    setNewMin: (value:number) => void
    setNewMax: (value:number) => void
}

export const Set = (props: SetType) => {
    //  ------------ STATE ----------------- //

    const [minValueInSet, setMinValueInSet] = useState(props.initMinValue)
    const [maxValueInSet, setMaxValueInSet] = useState(props.initMaxValue)
    const [disabled, setDisabled] = useState(false)


    const setStyle = 'blockStyle ' + s.set

    let blockInputStyle = s.blockInput
    let disableApply = disabled
    let inputError = false

    if (minValueInSet === maxValueInSet || minValueInSet > maxValueInSet) {
        // disableApply = true
        inputError = true
        blockInputStyle = blockInputStyle + ' ' + s.blockInputError
    }


    //  ------------ ACTION ----------------- //

    function changeMin(value: number) {
        setMinValueInSet(value)
        setDisabled(false)
    }

    function changeMax(value: number) {
        setMaxValueInSet(value)
        setDisabled(false)
    }

    function setValueHandler() {
        props.setNewMin(minValueInSet)
        props.setNewMax(maxValueInSet)
        props.setNewValues(minValueInSet, maxValueInSet)
        setDisabled(true)
    }

    return (
        <div className={setStyle}>
            <div className={blockInputStyle}>

                <div className={s.inputRow}>
                    <span>{'min value :'}</span>
                    <Inp value={minValueInSet}
                         error={inputError}
                         callback={changeMin}/>
                </div>

                <div className={s.inputRow}>
                    <span>{'max value :'}</span>
                    <Inp value={maxValueInSet}
                         error={inputError}
                         callback={changeMax}/>
                </div>

            </div>
            <Btn name={props.namesBtn.apply}
                 callback={setValueHandler}
                 disableState={disableApply}
            />

        </div>
    )
}