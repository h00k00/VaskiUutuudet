var React = require('react');

var AuthorWrapper = React.createClass({
    render: function () {
        if (this.props.data)
            return <div>{this.props.data[0].name}</div>
        else
            return <div></div>
    }
});

var ItemWrapper = React.createClass({
    render: function () {
        var imageSrc = '';
        if (this.props.data.images != undefined) {
            imageSrc = 'https://api.finna.fi' + this.props.data.images[0];
        }
        return <tr>
            <td><img src={imageSrc} className="cover"/></td>
            <td className="book-author">
            <AuthorWrapper data = {this.props.data.nonPresenterAuthors}/>
            </td>
            <td className="book-title">{this.props.data.title}</td>
            </tr>
    }
});

var ResultList = ({records}) => {
    if (records) {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th><h3>Kirjailija</h3></th>
                            <th><h3>Teos</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                    {records.map(function(records) {
                        return <ItemWrapper key={records.id} data={records}/>
                    })}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return;
    }
};

module.exports = ResultList;
                                                               
                                                            
                                                                
                                  
                                
                       
                                                      
                    