import React from "react";
import s from './Disp.module.css'
import {Btn} from "../btn/Btn";
import {ButtonsType} from "../../App_";

type DispType = {
    valueCounter: string | number
    minValue: number
    maxValue: number
    namesBtn: ButtonsType
    callbackCount: () => void
    callbackReset: () => void

}
export const Disp = (props: DispType) => {

    // State ---------------------------------------
    let currentValue: string | number

    // error ---------------------------
    let disableCountInSet = false
    let disableResetInSet = false
    const errorMessage = 'Enter correct value'
    // styles ------------------------
    const dispStyle = 'blockStyle ' + s.disp
    const BlockButtonsStyle = s.blockBtn

    let countStyle = s.countValue

    if (props.valueCounter === props.minValue){
        disableResetInSet = true
    }
    if (props.valueCounter === props.maxValue) {
        countStyle = countStyle + ' ' + s.errorStyle
        disableCountInSet = true
    }

    if (props.minValue > props.maxValue||props.minValue===props.maxValue){
        currentValue = errorMessage
        countStyle = countStyle + ' ' + s.errorMessageStyle
        disableCountInSet = true
        disableResetInSet = true
    }
    else {
        currentValue = props.valueCounter
    }


    // Action --------------------------------------


    function countHandler() {
        props.callbackCount()
    }

    function resetHandler() {
        props.callbackReset()
    }

    return (
        <div className={dispStyle}>
            <div className={countStyle}>
                {currentValue}
            </div>
            <div className={BlockButtonsStyle}>
                <Btn name={props.namesBtn.count} callback={countHandler} disableState={disableCountInSet}/>
                <Btn name={props.namesBtn.reset} callback={resetHandler} disableState={disableResetInSet}/>
            </div>


        </div>
    )
}