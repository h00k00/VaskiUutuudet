var jQuery = require('jquery');

const FINNA_API_BASE_URL = 'https://api.finna.fi/v1/search?';
const FINNA_API_URL = 'https://api.finna.fi/v1/search?type=AllFields&filter[]=~building:"0/Vaski/&filter[]=search_daterange_mv:"[2016 TO 2016]"&filter[]=~format:"1/Book/eBook/"&filter[]=~major_genre_str_mv:"fiction"&sort=main_date_str desc&limit=40';

var params = {
    type: 'AllFields',
    limit: 40,
    filter: ['~building:0/Vaski/', '~language:fin', 'search_daterange_mv:[2016 TO 2016]', '~major_genre_str_mv:fiction'],
    sort: 'main_date_str desc'
};

module.exports = {
    getBooks: function(type) {
        var requestUrl = `${FINNA_API_URL}`;
        var searchParams = params;

        switch (type) {
            case 'book':
                searchParams.filter.push('~format:1/Book/Book/');
                break;
            case 'ebook':
                searchParams.filter.push('~format:1/Book/eBook/');
                break;
        }
//        var requestUrl = `${FINNA_API_BASE_URL}` + $.param(searchParams);

        return $.ajax({
            url: requestUrl,
            dataType: 'jsonp'
        }).then(function(data) {
            return data;
        });
    }
}