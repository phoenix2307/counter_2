import React, {ChangeEvent} from "react";
import s from './Inp.module.css'

type InpType = {
    value: number
    error: boolean
    callback: (value:number) => void
}

export const Inp = (props: InpType) => {

    let inputStyle = s.inp

    if (props.error){
       inputStyle = inputStyle + ' ' + s.inputError
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callback(+e.currentTarget.value)
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
