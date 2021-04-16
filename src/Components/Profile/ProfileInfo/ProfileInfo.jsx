import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div className={s.banner}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/419/144/non_2x/geometric-3d-cubes-pattern-free-vector.png"></img>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"/>
                </div>
                <div className={s.description}>
                    <div className={s.name}>Emotional Shawty🙍</div>
                    <div className={s.moto}>Love is stronger than fear.</div>
                    <div><hr/></div>
                    <div>Date of birth: January 6, 1998</div>
                    <div>Town: Moscow</div>
                    <div>Family status: Active</div>
                    <div>Works ar: "Not your business"</div>
                </div>
            </div>
        </div>
        );
}
export default ProfileInfo;