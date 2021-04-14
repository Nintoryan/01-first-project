import React from 'react';
import './Profile.css';

const Profile = () => {
    return(
        <div className="content">
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/001/419/144/non_2x/geometric-3d-cubes-pattern-free-vector.png"></img>
            </div>
            <div>
                ava + desctiption
                <div className="about">
                    <div className="about__body">
                        <div className="about__header">
                            <div className="about__title title">

                            </div>
                            <div className="about__text">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                my post
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
        );
}
export default Profile;