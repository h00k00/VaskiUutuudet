var jQuery = require('jquery');

const FINNA_API_BASE_URL = 'https://api.finna.fi/v1/search?';
const FINNA_API_URL = 'https://api.finna.fi/v1/search?type=AllFields&filter[]=~building:"0/Vaski/&filter[]=search_daterange_mv:"[2016 TO 2016]"&filter[]=~format:"1/Book/eBook/"&filter[]=~major_genre_str_mv:"fiction"&sort=main_date_str+desc&limit=40&callback=finnaCallback';

var params = {
    type: 'AllFields',
    limit: 40,
    filter: ['~building:0/Vaski/', '~language:eng', '~format:1/Book/eBook/', 'search_daterange_mv:[2016 TO 2016]', '~major_genre_str_mv:fiction'],
    sort: 'main_date_str desc'
};

module.exports = {
    getBooks: function(type) {
//        var requestUrl = `${FINNA_API_URL}`;
        var requestUrl = `${FINNA_API_BASE_URL}` + $.param(params);

        console.log(requestUrl);
        
        switch (type) {
            case 'book':
                break;
            case 'ebook':
                break;
        }
        
        return $.ajax({
            url: requestUrl,
            dataType: 'jsonp'
        }).then(function(data) {
            return data;
        });
    }
}