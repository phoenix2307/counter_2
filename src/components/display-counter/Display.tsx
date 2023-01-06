import React from 'react'
import s from './Display.module.css'
import {InputCounter} from "../input-counter/Input";
import {Button} from "../button-counter/Button";

type DisplayPropsType =  {

}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={s.displayCounter}>
            <div className={s.positionInputs}>
                <InputCounter type={'number'} span={'max value:'} callBackHandler={()=>{}}/>
                <InputCounter type={'number'} span={'min value:'} callBackHandler={()=>{}}/>
            </div>
            <div className={s.positionButton}>

                <Button nameButton={'set'} callBackHandler={()=>{}}/>
            </div>

        </div>
    )
}
