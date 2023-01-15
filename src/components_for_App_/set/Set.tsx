import React, {useState} from "react";
import s from './Set.module.css'
import '../../App.css'
import {Inp} from "../input/Inp";
import {Btn} from "../btn/Btn";
import {ButtonsType} from "../../App_";

type SetType = {
    initMinValue: number
    initMaxValue: number
    namesBtn: ButtonsType
    setNewValues: (minValue: number, maxValue: number) => void
    errorState: boolean
    disableState: boolean
}

export const Set = (props: SetType) => {
    //  ------------ STATE ----------------- //

    const [minValueInSet, setMinValueInSet] = useState(+props.initMinValue)

    const [maxValueInSet, setMaxValueInSet] = useState(+props.initMaxValue)
    const setStyle = 'blockStyle ' + s.set

    let blockInputStyle = s.blockInput
    let disableApply = false
    let inputError = false

    if (minValueInSet === maxValueInSet || minValueInSet > maxValueInSet){
        disableApply = true
        inputError = true
        blockInputStyle = blockInputStyle + ' ' + s.blockInputError

    }



    //  ------------ ACTION ----------------- //

    function changeMin(value: number) {
        setMinValueInSet(value)
    }

    function changeMax(value: number) {
        setMaxValueInSet(value)
    }

    function setValueHandler() {
        props.setNewValues(minValueInSet, maxValueInSet)
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

                {/*{'Message for Error'}*/}

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