import React, {useState} from 'react'
import s from './Display.module.css'
import {Button} from "../button-counter/Button";
import {ButtonsType} from "../../App";

type DisplayPropsType = {
    valueCounter: number
    nameButtons: ButtonsType
    increment: () => void
    reset: () => void
    limitValue: boolean
}

export const Display = (props: DisplayPropsType) => {

    const [disabled, setDisabled] = useState(false)

    let styleValue = s.positionMessage

    if (props.limitValue) {
        styleValue = s.positionMessage + ' ' + s.limit
    }

    const incrementCallback = () => {
        props.increment()
        setDisabled(false)
    }
    const resetCallBack = () => {
        props.reset()
        setDisabled(true)
    }

    return (
        <div className={s.displayCounter}>
            <div className={styleValue}>{props.valueCounter}</div>
            <div className={s.positionButton}>
                <Button
                    nameButton={props.nameButtons.increment}
                    callBackHandler={incrementCallback}
                    disabled={props.limitValue ? true : false}
                />
                <Button
                    nameButton={props.nameButtons.reset}
                    callBackHandler={resetCallBack}
                    disabled={disabled}
                />
            </div>

        </div>

    )
}
