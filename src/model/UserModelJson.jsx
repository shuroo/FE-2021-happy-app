
// User model to be read from json
class UserModelJson {
 
    constructor({email,name,role,id}){
        this.email = email;
        this.id = id;
        this.name = name;
        this.role = role;
        this.key = id;

    }
}

export default UserModelJson;