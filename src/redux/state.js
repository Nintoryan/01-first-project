let state = {
    dialogsData:{
        dialogs: [
            {id:1,name:"Ваня"},
            {id:2,name:"Лёша"},
            {id:3,name:"Юля"}
        ],
        messages: [
            {text:"Привет"},
            {text:"Ну ты как там?"},
            {text:"Скоро придёшь?"}
        ]
    },
    profileData:{
        posts: [
            {id: 2,text:"Hello everybody !",likesCount:12},
            {id: 1,text:"WHY NOBODY LIKES MY POSTS???",likesCount: 5},
            {id: 0,text:"Hi, it's my first post!",likesCount: 1}
        ]
    }
};

export default state;