import React from "react";
import s from './Btn.module.css'

type BtnType = {
    name: string
    callback: () => void
    disableState: boolean
}

export const Btn = (props: BtnType) => {
    const onClickHandler = () => {
        props.callback()
    }
    const styleBtn = s.btn
    return (
        <button
            className={styleBtn}
            onClick={onClickHandler}
            disabled={props.disableState}
        >
            {props.name}
        </button>
    )
}