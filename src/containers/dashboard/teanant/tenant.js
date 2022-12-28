import React,  { useState } from "react";
import DataTable from 'react-data-table-component';
import { Button, Modal } from 'react-bootstrap';
import './tenant.css'

const columns = [
    {
        name: 'Tenant ID',
        selector: row => row.teantId,
        sortable: true,
    },
    {
        name: 'Tenant Name',
        selector: row => row.tenantName,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Description',
        selector: row => row.description,
    },
    {
        name: 'Date Created',
        selector: row => row.dateCreated,
    },
    {
        name: 'Date Modified',
        selector: row => row.dateModified,
    }
];

const data = [
    {
        teantId: 1,
        tenantName: 'Beetlejuice',
        status: '1988',
        description: '',
        dateCreated: '',
        dateModified: '',
    },
    {
        teantId: 1,
        tenantName: 'Beetlejuice',
        status: '1988',
        description: '',
        dateCreated: '',
        dateModified: '',
    },
]

function Tenant() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

        <DataTable
            title={
                <div> Tentants
                    <span class="btnRight">
                        <Button variant="primary" size="sm"  onClick={handleShow}>Create</Button>
                        &nbsp;
                        <Button variant="outline-dark" size="sm">Close</Button>
                    </span>
                </div>
            }
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            pointerOnHover
        />
        </>
    );
}
export default Tenant;