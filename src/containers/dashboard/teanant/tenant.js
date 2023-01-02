import React from "react";
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import './tenant.css'
import MyModalComponent from "./mymodal.component";
import { TenantAPI } from "../../../shared/apis/tenantApi";
import axios from "axios";





function Tenant() {
    
const columns = [
    {
        name: 'Tenant ID',
        selector: row => row.teantId,
        sortable: true,
        cell: (row) => (
            <Button href onClick={openFromParent}>
                {row.teantId}
            </Button>
        ),
        
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
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
        description: 'test',
        dateCreated: '12231',
        dateModified: '',
    },
    {
        teantId: 2,
        tenantName: 'Beetlejuice',
        status: '1988',
        description: '',
        dateCreated: '',
        dateModified: '',
    },
    {
        teantId: 3,
        tenantName: 'Beetlejuice',
        status: '1988',
        description: '',
        dateCreated: '',
        dateModified: '',
    },
    {
        teantId: 4,
        tenantName: 'Beetlejuice',
        status: '1988',
        description: '',
        dateCreated: '',
        dateModified: '',
    },
    {
        teantId: 5,
        tenantName: 'Beetlejuice',
        status: '1988',
        description: '',
        dateCreated: '',
        dateModified: '',
    },
    {
        teantId: 6,
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
    {
        teantId: 1,
        tenantName: 'Beetlejuice',
        status: '1988',
        description: '',
        dateCreated: '',
        dateModified: '',
    },

]

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
        const fetchData = async () => {
            var options = {
              method: "GET",
              url: "http://localhost:8090/tenants",
              headers: {
                accept: "application/json",
                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                "x-rapidapi-key": "ffc2438edbmsh0a88b634e6e77a7p123125jsnfb163d4d72f7",
              },
            };
            console.log(options)
            let data = await axios.request(options);
            console.log("data,", data.data);
        setIsOpen(false);
      }
    }
    
      function handleAfterOpen(event, data) {
        console.log(event, data);
        TenantAPI.getAll();
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
                data={data}
                pagination
                highlightOnHover
                pointerOnHover
            />
  
        </>
    );
}
export default Tenant;