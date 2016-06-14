var React = require('react');

var ResultList = ({records}) => {
    if (records) {
        return (
            <ul>
                {records.map(function(records) {
                    return <li key={records.id}> {records.nonPresenterAuthors[0].name}: {records.title} </li>;
                })}
            </ul>)
    } else {
        return;
    }
};

module.exports = ResultList;
                                                               
                                                            
                                                                
                                  
                                
                       
                                                      
                    