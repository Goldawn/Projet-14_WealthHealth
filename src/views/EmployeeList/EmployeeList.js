import React, { useState } from 'react';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FilterMatchMode } from 'primereact/api'
import { InputText } from 'primereact/inputtext'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';  
import "primeicons/primeicons.css";

import './EmployeeList.css'

const EmployeeList = () => {

    const [filters, setFilters ] = useState({ 
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    })

    const data = useSelector(state =>  state.employee)
    console.log(data)
    

    return (
        <>
            <h1>Employee List</h1>
            <div className="table-container">

            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" onInput={(e) => setFilters({
                    ...filters,
                    global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
                })}/>
            </span>
                
                <DataTable 
                value={data} 
                sortMode="multiple" 
                filters={filters} 
                paginator 
                rows={10}
                rowsPerPageOptions={[10,25,50, 100]}
                totalRecords={3}
                >
                    <Column field="firstname" header="First Name" sortable />
                    <Column field="lastname" header="Last Name" sortable />
                    <Column field="startDate" header="Start Date" sortable />
                    <Column field="department" header="Department" sortable />
                    <Column field="birthDate" header="Date of Birth" sortable />
                    <Column field="street" header="Street" sortable />
                    <Column field="city" header="City" sortable />
                    <Column field="state" header="State" sortable />
                    <Column field="zipCode" header="Zip Code" sortable />
                </DataTable>
            </div>
            <Link to="/">Home</Link>
        </>
    );
}

export default EmployeeList;