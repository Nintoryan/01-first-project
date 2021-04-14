import React from 'react';
import prof from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div>
            <div className={prof.banner}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/419/144/non_2x/geometric-3d-cubes-pattern-free-vector.png"></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
        );
}
export default Profile;