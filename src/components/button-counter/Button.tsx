import React from 'react'
import s from './Button.module.css'

type ButtonPropsType = {
    nameButton: string
    callBackHandler: ()=> void
    disabled?: boolean
}
export const Button = (props: ButtonPropsType) => {

    const onClockHandler = () => {
        props.callBackHandler()
    }
    return (
        <button
            className={s.btn}
            onClick={onClockHandler}
            disabled={props.disabled}
        >
            {props.nameButton}
        </button>
    )
}