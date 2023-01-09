import React from 'react'
import s from './Input.module.css'

type InputPropsType = {
    type: string
    span: string
    value: number
    callBackHandler: (value: string) => void

}

export const InputCounter = (props: InputPropsType) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.callBackHandler(e.currentTarget.value)
    }

    return (
        <div className={s.inputBlock}>
            <span>{props.span}</span>
            <input
                type={props.type}
                value={props.value}
                onChange={onChangeHandler}
            />
        </div>
    )
}