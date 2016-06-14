var React = require('react');

var ItemWrapper = React.createClass({
    render: function () {
        return <tr>
            <td>
            {this.props.data.nonPresenterAuthors[0].name}
            </td>
            <td>{this.props.data.title}</td>
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
                            <th>Kirjailija</th>
                            <th>Teos</th>
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
                                                               
                                                            
                                                                
                                  
                                
                       
                                                      
                    