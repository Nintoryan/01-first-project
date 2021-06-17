import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post text={p.text} likesCount={p.likesCount}/>);
    postsElements = postsElements.reverse();


    let newPostElement = React.createRef();

    let addPost = ()=>{
        let text = newPostElement.current.value;
        props.dispatch({type:"ADD_POST", postText:text});
        newPostElement.current.value = null;
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.addPost}>
                <div>
                    <h2>Add new post</h2>
                    <textarea ref={newPostElement} placeholder="What's new?"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.verticalLine}>
                <hr/>
            </div>
            <div className="myPosts">
                <h2>My posts</h2>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>);
}
export default MyPosts;