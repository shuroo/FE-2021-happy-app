import Parse from 'parse';

class Utils{
    
    static parseInit(){
        // Hunny keys:
        // const PARSE_APPLICATION_ID = 'IE6u59r2UOS1JwKu5Wr5o7dbiVQMzxsIqUnx9xl1';
        // const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
        // const PARSE_JAVASCRIPT_KEY = '9eKPlczqhsvxqyTKqKKu4qkTaNSAuSNV3pP6vmls';
        
        // Hunny2 keys:
        

        const PARSE_APPLICATION_ID = 'diGq711AFYl6nzB3FASUfc0R8Yk0eKwW0A2HfLl5';
        const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
        const PARSE_JAVASCRIPT_KEY = 'qxSgb6hrFcMHEfJrcVqI8TxzxSzMzKdpltnZCne5';
        
        Parse.serverURL = PARSE_HOST_URL;
        Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    }



    static formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

	static dateFormat(d){
		let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
		let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
		let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        
		return `${da}/${mo}/${ye} ${this.formatAMPM(d)}`;
	}

}

export default Utils;