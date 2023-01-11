import Form from 'react-bootstrap/Form';

function IdpTenant({selectedRow}) {
  return (
    <Form>
      <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>SSO URL</Form.Label>
        <Form.Control type="text"  defaultValue={selectedRow.tenantSsoModel.ssoUrl}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
        <Form.Label>Idp Entity Id</Form.Label>
        <Form.Control type="text" defaultValue={selectedRow.tenantSsoModel.entityId} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>IdP File</Form.Label>
            <Form.Control type="file" multiple size='sm'/>
      </Form.Group>
    </Form>
  );
}

export default IdpTenant;
