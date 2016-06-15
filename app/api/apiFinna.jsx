var jQuery = require('jquery');

const FINNA_API_BASE_URL = 'https://api.finna.fi/v1/search?';

const PARAMS = {
    type: 'AllFields',
    limit: 100,
    filter: ['first_indexed:[NOW-1MONTHS/DAY TO NOW]', '~major_genre_str_mv:fiction'],
    sort: 'last_indexed desc'
};

module.exports = {
    getBooks: function(type) {
        var requestUrl = `${FINNA_API_BASE_URL}` + $.param(PARAMS);

        switch (type) {
            case 'book':
                requestUrl += '&filter[]=~building:1/Vaski/1/&filter[]=~format:1/Book/Book/';
                break;
            case 'ebook':
                requestUrl += '&filter[]=~building:0/Vaski/&filter[]=~format:1/Book/eBook/';
                break;
            case 'all':
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