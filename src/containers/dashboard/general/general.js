import React from 'react';
import TenGeneral from './tenantGenaral';
import TenaCacheManagement from './tenanCacheManagement';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



function General() {
    return (
        <div>
    

            <Card>
                <Card.Title className="newSubHeading">General <span class="btnRight">
                    <Button variant="primary" size="sm" >Save</Button>
                </span></Card.Title>
                <TenGeneral />
                <Card.Title className="newSubHeading">Cache Management</Card.Title>
                <TenaCacheManagement />
                {/* <Card.Body>
                    <span class="btnRight">
                        <Button variant="primary" size="sm" >Save</Button>
                    </span>
                    <br />
                    <TenGeneral />
                    <br />
                    <TenaCacheManagement />
                </Card.Body> */}
            </Card>

        </div>
    );
}

export default General;