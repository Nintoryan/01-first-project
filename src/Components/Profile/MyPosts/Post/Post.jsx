import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"/>
            {props.text}
            <div>
                <span>{props.likesCount}</span>
                <span>{` ${likeOrLikes(props.likesCount)}`}</span>
                <img src=""/>
            </div>
        </div>
    );
}
export default Post;

function likeOrLikes(amount) {
    return (amount > 1) ? "likes" : "like";
}