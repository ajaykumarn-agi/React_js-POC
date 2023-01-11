import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';

function DataSource({dbSources}) {
    console.log(dbSources)
    return (
        <div>
        {dbSources.map(name => (
           <Card>
                 <Row className="show-grid">
                    <Col>
                        {name}
                    </Col>
                </Row>
                    
            </Card>
        )
        
        )}
        </div>
    );
};
export default DataSource;