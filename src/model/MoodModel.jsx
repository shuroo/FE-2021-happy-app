class MoodModel{
    
    constructor(image,title,rate){
        this.image = image;
        this.title = title;
        this.rate = rate;
        this.key = title+"_"+rate;
    }
}

export default MoodModel;