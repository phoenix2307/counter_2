import React from "react";
import s from './Settings.module.css'
import {Button} from "../button-counter/Button";
import {InputCounter} from "../input-counter/Input";

type SettingsPropsType = {

}
export const Settings = (props: SettingsPropsType) => {
    return (
        <div className={s.settingCounter}>
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