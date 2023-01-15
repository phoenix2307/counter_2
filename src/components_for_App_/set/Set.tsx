import React from "react";
import s from './Set.module.css'
import '../../App.css'
import {Inp} from "../input/Inp";
import {Btn} from "../btn/Btn";

type SetType = {}
export const Set = (props: SetType) => {
    const setStyle = 'blockStyle ' + s.set
    const blockInput = s.blockInput
    return (
        <div className={setStyle}>
            <div className={blockInput}>
                <div className={s.inputRow}>
                    <span>{'min value :'}</span>
                    <Inp value={'0'} callback={() => {
                    }}/>
                </div>
                {/*{'Message for Error'}*/}
                <div className={s.inputRow}>
                    <span>{'max value :'}</span>
                    <Inp value={'0'} callback={() => {
                    }}/>
                </div>
            </div>
            <Btn name={'aplly'}
                 callback={() => {
            }}
                 disableState={true}
            />

        </div>
    )
}