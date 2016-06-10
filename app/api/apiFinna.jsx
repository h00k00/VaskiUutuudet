var jQuery = require('jquery');

const FINNA_API_URL = 'https://api.finna.fi/v1/search?type=AllFields&filter%5B%5D=~building%3A%220%2FVaski%2F&filter[]=search_daterange_mv:%22[2016%20TO%202016]%22&filter[]=~format:%221/Book/eBook/%22&filter%5B%5D=~major_genre_str_mv%3A%22fiction%22&sort=main_date_str+desc&callback=finnaCallback';

module.exports = {
    getBooks: function() {
        var requestUrl = `${FINNA_API_URL}`;
        
        return $.ajax({
            url: requestUrl,
            dataType: 'jsonp'
        }).then(function(data) {
            return data;
        });
    }
}