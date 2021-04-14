import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className="posts">
                <Post message="Hello everybody !" likesCount="12"/>
                <Post message="WHY NOBODY LIKES MY POSTS???" likesCount="5"/>
                <Post message="Hi, it's my first post!" likesCount="1"/>
            </div>
        </div>);
}
export default MyPosts;