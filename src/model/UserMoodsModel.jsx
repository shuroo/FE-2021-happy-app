
class UserMoodsModel {
     
    constructor(userModel){ 
        console.log(JSON.stringify(userModel));
        this.moodDate = userModel.get("moodDate");
        this.id = userModel.id;
        this.moodRate = userModel.get("moodRate");
        this.key = userModel.id;

    }
}

export default UserMoodsModel;