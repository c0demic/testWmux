const newFriend = (state={name: "lixin2"},action)=>{
    switch (action.type){
        case 'changeName':
            return{
                name:action.name
            };
        default:
            return state
    }
};
export default newFriend;