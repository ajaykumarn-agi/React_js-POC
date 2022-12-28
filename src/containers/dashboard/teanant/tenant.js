import React from "react";
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import './tenant.css'
import MyModalComponent from "./mymodal.component";

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
    let modalData = {
        title: 'New Tenant',
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);

    function openFromParent() {
        modalData.title='Edit Tenant'
        setIsOpen(true);
        
      }
      
    
      function handleCloseModal(event, data) {
        console.log(event, data);
        setIsOpen(false);
      }
    
      function handleAfterOpen(event, data) {
        console.log(event, data);
      }

      
    return (
        <>
            

<MyModalComponent
        dynData={modalData}
        IsModalOpened={modalIsOpen}
        onCloseModal={handleCloseModal}
        onAfterOpen={handleAfterOpen}
      />


            <DataTable
                title={
                    <div> Tentants
                        <span class="btnRight">
                            <Button variant="primary" size="sm" onClick={openFromParent}>Create</Button>
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