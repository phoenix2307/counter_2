import React from "react";
import s from './Settings.module.css'
import {Button} from "../button-counter/Button";

type SettingsPropsType = {

}
export const Settings = (props: SettingsPropsType) => {
    return (
        <div className={s.settingsCounter}>
            <div className={s.positionMessage}>Message</div>
            <div className={s.positionButton}>
                <Button nameButton={'inc'} callBackHandler={()=>{}}/>
                <Button nameButton={'reset'} callBackHandler={()=>{}}/>
            </div>

        </div>
    )
}