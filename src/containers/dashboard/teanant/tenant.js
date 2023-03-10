import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import { Button } from 'react-bootstrap';
import './tenant.css'
import MyModalComponent from "./mymodal.component";
import axios from "axios";




function Tenant() {
    const [loaded, setLoaded] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [tenants, setTenants] = useState([]);
    const [parentData, setParentData] = useState({});
    

    let modalData = {
        title: 'New Tenant',
        selectedRow:'',
        isNew:true
    };

    const getTenantList = async () => {
        setLoading(true);
        

        const response = await axios.get(
            `http://localhost:8080/agBalance-ConfigTool/servlet/rest/test`
        );


        setTenants(response.data);

        setLoading(false);

    }

   

    const columns = [
        {
            name: 'Tenant ID',
            selector: row => row.tenantId,
            sortable: true,
            cell: (row) => (
                <p style={{float : 'left', paddingRight : '5px',color:'blue'}} onClick={
                    (e) => openFromParentRow(e,row)
                    }>
                    {row.tenantId}
                </p>
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


    function openFromParent() {
        setParentData(modalData)
        setIsOpen(true);

    }

    function openFromParentRow(event, data) {
        modalData.title = 'Edit Tenant';
        modalData.selectedRow = data;
        modalData.isNew = false;
        console.log(data);
        // modalData.selectedRow = row;
        setParentData(modalData)
        setIsOpen(true);

    }

    useEffect(() => {
        if (!loaded) {
            console.log("running");
            getTenantList();
            setLoaded(true);
        }

    }, [loaded]);



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
                dynData={parentData}
                IsModalOpened={modalIsOpen}
                onCloseModal={handleCloseModal}
                onAfterOpen={handleAfterOpen}
            />


            <DataTable
                title={
                    <div > <span className="newSubHeading">Tenants</span>
                        <span class="btnRight">
                            <Button variant="primary" size="sm" onClick={openFromParent}>Create</Button>
                            &nbsp;
                            <Button variant="outline-dark" size="sm">Close</Button>
                        </span>
                    </div>
                }
                columns={columns}
                data={tenants}
                progressPending={loading}
                pagination
                highlightOnHover
                pointerOnHover
            />

        </>
    );
}
export default Tenant;