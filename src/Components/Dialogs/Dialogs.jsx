import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialogItem} ${s.active}`}>
                    <NavLink to="/dialogs/1" activeClassName={s.active}>Ваня</NavLink>
                </div>
                <div className={s.dialogItem}>
                    <NavLink to="/dialogs/2" activeClassName={s.active}>Лёша</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Привет</div>
                <div className={s.message}>Ну ты как там!?</div>
                <div className={s.message}>Йоу</div>
            </div>
        </div>
    );
}

export default Dialogs;