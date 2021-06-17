import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./DialogItem/Dialog";
import Message from "./Messages/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message text={m.text} isMine={m.isMine}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.chats}>
                {dialogsElements}
            </div>
            <div className={s.chatWindow}>
                <div className={s.hat}>
                    <div className={s.name}>Юля Анциферова</div>
                    <div className={s.avatarInDialogue}><img src="https://cdn.pixabay.com/photo/2013/07/12/18/20/chessboard-153303_1280.png" alt=""/></div>
                </div>
                <div className={s.messages}>{messagesElements}</div>
                <div className={s.sendBar}>
                    <div><textarea></textarea></div>
                    <div>
                        <button>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;