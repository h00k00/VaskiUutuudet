var jsonp = require('jsonp');

const FINNA_API_URL = 'https://api.finna.fi/v1/search?lookfor=Crumb&type=AllFields&filter%5B%5D=~building%3A%221%2FVaski%2F1%2F%22&callback=puppu';
// proxy http://cors.io/?u=

module.exports = {
  getBooks: function () {
//    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${FINNA_API_URL}`;

    return jsonp(requestUrl, null, function (err, data) {
        if (err) {
            console.error(err.message);
            return false;
        } else {
            console.log(data);
            return true;
        }
    });
    
  }
}