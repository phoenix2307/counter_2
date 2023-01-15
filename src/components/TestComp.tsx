import React, {useState} from "react";
import s from './TestComp.module.css'

export type TestCompType = {
    value: number
    span: string
    errorStatus: boolean
    callback: (value: number) => void
}

export const TestComp = (props: TestCompType) => {


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.callback(+e.currentTarget.value)
    }

    let inputStyle = s.inputTest
    if (props.errorStatus) {
        inputStyle = s.inputTest + ' ' + s.inputError
    }

    let spanStyle = s.spanStyle
    if (props.errorStatus) {
        spanStyle = s.spanStyle + ' ' + s.spanError
    }

    return (
        <div>
            <span
                className={spanStyle}>{props.span}</span>
            <input
                type={'number'}
                value={props.value}
                onChange={onChangeHandler}
                className={inputStyle}
            />
        </div>
    )
}