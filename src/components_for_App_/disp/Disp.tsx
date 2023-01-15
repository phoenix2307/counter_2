import React, {useState} from "react";
import s from './Disp.module.css'
import {Btn} from "../btn/Btn";
import {ButtonsType} from "../../App_";

type DispType = {
    valueCounter: number
    minValue: number
    maxValue: number
    namesBtn: ButtonsType
    disableState: boolean
    callbackCount: () => void
    callbackReset: () => void

}
export const Disp = (props: DispType) => {

    // State ---------------------------------------
    // error ---------------------------
    let disableCountInSet = false
    let disableResetInSet = false
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
                {props.valueCounter}
            </div>
            <div className={BlockButtonsStyle}>
                <Btn name={props.namesBtn.count} callback={countHandler} disableState={disableCountInSet}/>
                <Btn name={props.namesBtn.reset} callback={resetHandler} disableState={disableResetInSet}/>
            </div>


        </div>
    )
}