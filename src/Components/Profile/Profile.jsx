import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo/>
            <div className={s.verticalLine}>
                <hr/>
            </div>
            <MyPosts posts={props.state.posts} dispatch={props.dispatch}/>
        </div>
        );
}
export default Profile;