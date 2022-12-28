import TenGeneral from './tenantGenaral';
import TenaCacheManagement from './tenanCacheManagement';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



function General() {
  return (
    <div>
        <div>
            <span class="btnRight">
                <Button variant="primary" size="sm" >Save</Button>
            </span>
        </div>
        <Card>
            <span>
                <TenGeneral/>
            </span>
        </Card>
       <Card>
        <span>
                <TenaCacheManagement/>
            </span>
       </Card>
       
        
        
    </div>
  );
}

export default General;