const EXPRESS = require('express'); 
const fetch = require('node-fetch'); 





try {
    var destination = "http://localhost:3005/getEmployeeShifts?id=1";
    const that = this;
    sendHer('', destination, finish);


    function sendHer(jsonpackage, url, cb) {
      return fetch(url,{}
	   ).then(checkStatus)
        .then(parseJSON)
        .then(cb)
        .catch((error) => console.log(error.message));
    }



    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    }
    
    function parseJSON(response) {
      return response.json();
    }
    
    function finish(response) {
		console.log("finish response: "+JSON.stringify( response ) );
    }////End of function finish();
	
	
} catch (e) {
  console.log("Try Catch error: "+e);
}