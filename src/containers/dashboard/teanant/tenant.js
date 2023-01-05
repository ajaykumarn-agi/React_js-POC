import React, { useState, useEffect }from "react";
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import './tenant.css'
import MyModalComponent from "./mymodal.component";
import axios from "axios";





function Tenant() {
    
const columns = [
    {
        name: 'Tenant ID',
        selector: row => row.tenantId,
        sortable: true,
        cell: (row) => (
            <Button href onClick={openFromParent}>
                {row.tenantId}
            </Button>
        ),
        
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {
        name: 'Tenant Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.tenantStatus,
    },
    {
        name: 'Description',
        selector: row => row.description,
    },
    {
        name: 'Date Created',
        selector: row => row.createdOn,
    },
    {
        name: 'Date Modified',
        selector: row => row.lastModifiedOn,
    }
];

    let modalData = {
        title: 'New Tenant',
      };
      const [modalIsOpen, setIsOpen] = React.useState(false);
      const [tenants, setTenants] = React.useState({});

      const getTenantList = () => {
        
        axios.get(`http://localhost:8080/agBalance-ConfigTool/servlet/rest/test`).then(res => {
            setTenants(res.data);
        }).catch(err => {
            setTenants({});
        });
      }


    function openFromParent() {
        modalData.title='Edit Tenant'
        setIsOpen(true);
        
      }

      useEffect(() => {
        getTenantList();
      });
      

    
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
                    <div > <span className="newSubHeading">Tentants</span>
                        <span class="btnRight">
                            <Button variant="primary" size="sm" onClick={openFromParent}>Create</Button>
                            &nbsp;
                            <Button variant="outline-dark" size="sm">Close</Button>
                        </span>
                    </div>
                }
                columns={columns}
                data={tenants}
                pagination
                highlightOnHover
                pointerOnHover
            />
  
        </>
    );
}
export default Tenant;