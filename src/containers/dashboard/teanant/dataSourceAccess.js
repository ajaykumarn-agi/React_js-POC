import Card from 'react-bootstrap/Card';

function DataSource({dbSources}) {
    console.log(dbSources)
    return (
        <div>
        {dbSources.map(name => (
            <li>
                {name}
            </li>
        )
        
        )}
        </div>
    );
};
export default DataSource;