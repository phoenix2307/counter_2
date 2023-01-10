import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    nameButton: string
    callBackHandler: ()=> void
    disabled?: boolean
}
export const Button = (props: ButtonPropsType) => {
let styleBtn = s.btn
if (props.disabled){
    styleBtn = s.btn + ' ' + s.disabled
}
    const onClockHandler = () => {
        props.callBackHandler()
    }
    return (
        <button
            className={styleBtn}
            onClick={onClockHandler}
            disabled={props.disabled}
        >
            {props.nameButton}
        </button>
    )
}