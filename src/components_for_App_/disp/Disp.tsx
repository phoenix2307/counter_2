import React from "react";
import s from './Disp.module.css'
import {Btn} from "../btn/Btn";

type DispType = {

}
export const Disp = (props: DispType) => {
    const dispStyle = 'blockStyle ' + s.disp
    const countStyle = s.countValue
    const BlockButtonsStyle = s.blockBtn
    return (
        <div className={dispStyle}>
            <div className={countStyle}>
                {'0'}
            </div>
            <div className={BlockButtonsStyle}>
                <Btn name={'count'} callback={()=>{}} disableState={true}/>
                <Btn name={'reset'} callback={()=>{}} disableState={true}/>
            </div>


        </div>
    )
}