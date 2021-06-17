import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) =>{
    console.log(props)
    if(props.isMine){
        return(
            <div className={s.myMessage}>
                {props.text}
            </div>
        );
    }else{
        return(
            <div className={s.message}>
                {props.text}
            </div>
        );
    }

}

export default Message;