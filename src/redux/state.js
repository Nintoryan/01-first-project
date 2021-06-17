let store = {
    _state: {
        dialogsData:{
            dialogs: [
                {id:1,name:"Ваня"},
                {id:2,name:"Лёша"},
                {id:3,name:"Юля"}
            ],
            messages: [
                {text:"Привет", isMine:false},
                {text:"Привет", isMine:true},
                {text:"Ну ты как там?", isMine:false},
                {text:"Скоро придёшь?", isMine:false},
                {text:"Скоро придёшь,СУКААА!!", isMine:false}
            ]
        },
        profileData:{
            posts: [
                {id: 0,text:"Hi, it's my first post!",likesCount: 1},
                {id: 1,text:"Hello everybody !",likesCount:1},
                {id: 2,text:"WHY NOBODY LIKES MY POSTS???",likesCount: 5}
            ]
        }
    },
    _callSubscriber(){},
    getState(){return this._state;},
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type==="ADD_POST"){

            if(action.postText!==''){
                let newPost = {id:5, text:action.postText,likesCount:0};
                this._state.profileData.posts.push(newPost);
                this._callSubscriber();
            }
        }
    }

}

export default store;
window.store = store;