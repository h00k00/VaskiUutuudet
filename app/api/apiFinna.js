import jQuery  from 'jquery';

const FINNA_API_BASE_URL = 'https://api.finna.fi/v1/search?';

const PARAMS = {
    type: 'AllFields',
    limit: 100,
    filter: ['last_indexed:[NOW-32DAYS/DAY TO NOW]', '~major_genre_str_mv:fiction'],
    sort: 'main_date_str'
};

export default  {
    getBooks(type) {
        var requestUrl = `${FINNA_API_BASE_URL}` + $.param(PARAMS);

        switch (type) {
            case 'Kirjat':
                requestUrl += '&filter[]=~building:1/Vaski/1/&filter[]=~format:1/Book/Book/';
                break;
            case 'eKirjat':
                requestUrl += '&filter[]=~building:0/Vaski/&filter[]=~format:1/Book/eBook/';
                break;
            case 'Spefi':
                requestUrl += '&bool0[]=OR&lookfor0[]=fantasiakirjallisuus&lookfor0[]=tieteiskirjallisuus&lookfor0[]=spekulatiivinen&join=AND&filter[]=~format:0/Book/&filter[]=~building:1/Vaski/1/'
                break;
            case 'Sarjakuvat':
                requestUrl += '&bool0[]=OR&lookfor0[]=ykl 85.32&lookfor0[]=ykl 85.35&lookfor0[]=ykl 85.331&join=AND&filter[]=~building:1/Vaski/1/';
                break;
            case 'Jännitys':
                requestUrl += '&lookfor0[]=jännityskirjallisuus&filter[]=~building:1/Vaski/1/';
                break;
            case 'Rikos':
                requestUrl += '&lookfor0[]=rikoskirjallisuus&filter[]=~building:1/Vaski/1/';
                break;
            case 'all':
                break;
        }

        console.log(requestUrl);

        return $.ajax({
            url: requestUrl,
            dataType: 'jsonp'
        }).then(function(data) {
            return data;
        });
    }
}
