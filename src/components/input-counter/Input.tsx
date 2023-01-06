import React from 'react'
import s from './Input.module.css'

type InputPropsType = {
    type: string
    span: string
    value?: string
    callBackHandler: ()=> void

}



export const InputCounter = (props: InputPropsType) => {

    const onChangeHandler = () => {
        props.callBackHandler()
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