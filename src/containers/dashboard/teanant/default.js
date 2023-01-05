import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function DefaultTenCre({selectedRow}){
  return (
    <Form>
      <fieldset title='Default'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridTenantId">
          <Form.Label>Tenant ID</Form.Label>
          <Form.Control type="text" placeholder="Enter tenant id" value={selectedRow.tenantId}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTenantName">
          <Form.Label>Tenant Name</Form.Label>
          <Form.Control type="text" placeholder="Enter tenant name" value={selectedRow.name}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridStatus">
          <Form.Label>Status</Form.Label>
          <Form.Select defaultValue="Inactive" value={selectedRow.tenantStatus}>
            <option>Active</option>
            <option>Inactive</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDesc">
            <FloatingLabel controlId="floatingTextarea2">Description</FloatingLabel>
                <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                value={selectedRow.description}
                />
          </Form.Group>
      </Row>

      </fieldset>
    </Form>
  );
}

export default DefaultTenCre;