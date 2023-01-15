import React from "react";
import s from './Inp.module.css'

type InpType = {
    value: string
    callback: () => void
}

export const Inp = (props: InpType) => {

    const inputStyle = s.inp
    const onChangeHandler = () => {
        props.callback()
    }

    return (
        <div>
            <input
                className={inputStyle}
                value={props.value}
                onChange={onChangeHandler}
            />
        </div>
    )
}
