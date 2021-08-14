
class UserModel {
 
    constructor(parseUser){
        this.email = parseUser.get("email");
        this.id = parseUser.id;
        this.name = parseUser.getUsername();
        this.role = parseUser.get("role");
        this.key = parseUser.id;

    }
}

export default UserModel;