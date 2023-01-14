import React from 'react'
import s from './InputCounter.module.css'

type InputCounterPropsType = {
    type: string
    span: string
    value: number
    callBackHandler: (value: string) => void
    errorValue: boolean

}

export const InputCounter = (props: InputCounterPropsType) => {

    let inputStyle = s.inputStyle + props.errorValue ? ' ' + s.error : ''
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.callBackHandler(e.currentTarget.value)
    }

    return (
        <div className={s.inputBlock}>
            <span>{props.span}</span>
            <input
                className={inputStyle}
                type={props.type}
                value={props.value}
                onChange={onChangeHandler}
            />
        </div>
    )
}