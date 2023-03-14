import React, { useState } from 'react';
import {Modal} from '@goldawn/react-modal-component'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";  
import "./CreateEmployee.css";

const CreateEmployee = () => {

    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOpen = (e) => {
        e.preventDefault();
        setIsOpen(true)
    }

    const handleClose = () => setIsOpen(false)
    
    const departments = [
        { name: 'Sales', code: 'NY' },
        { name: 'Marketting', code: 'RM' },
        { name: 'Engineering', code: 'LDN' },
        { name: 'Human Resources', code: 'IST' },
        { name: 'Legal', code: 'PRS' }
    ];
    
    const [employeeData, setEmployeeData] = useState({
        firstname: '',
        lastname: '',
        startDate: new Date(),
        department: '',
        birthDate: new Date(),
        street: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const changeHandler = e => {
        setEmployeeData((previousState) => ({
          ...previousState,
          [e.target.name]: e.target.value
        })
        )
      }

    const  submitHandler = e => {
    e.preventDefault()
    console.log(employeeData)
    setIsOpen(true)
    employeeData.birthDate = employeeData.birthDate.toString();
    employeeData.startDate = employeeData.startDate.toString();
    employeeData.department = employeeData.department.name;
    employeeData.state = employeeData.state.name;
    dispatch({ type: "employee/addEmployee", payload: employeeData})
    // saveData('token', fetchedData.body.token)
    // navigate('/employee-list');
    }
    

    const { firstname, lastname, startDate, department, birthDate, street, city, state, zipCode } = employeeData
    
    return (
        <>
            <h1>HRnet</h1>
            <Link to="/employee-list">View current employees</Link>
            <form id="create-employee-form" onSubmit={submitHandler}>
                <h2>Create employee</h2>
                <div>
                    <div className="form-column bio">
                        <label htmlFor="firstname">First Name</label>
                        <InputText id="firstname" name="firstname" value={firstname} onChange={changeHandler} />
                        <label htmlFor="lastname">Last Name</label>
                        <InputText id="lastname" name="lastname" value={lastname} onChange={changeHandler} />
                        <label htmlFor="birthDate">Date of Birth</label>
                        <Calendar inputId={"birthDate"} name="birthDate" value={birthDate} onChange={changeHandler} />
                        <label htmlFor="startDate">Start Date</label>
                        <Calendar inputId={"startDate"} name="startDate" value={startDate} onChange={changeHandler} />
                        <label htmlFor="department">Department</label>
                        <Dropdown 
                            name="department"
                            id={"department"}
                            value={department}
                            onChange={changeHandler}
                            options={departments}
                            optionLabel="name" 
                            // placeholder="Select a department"
                            // className="w-full md:w-14rem"
                        />
                    </div>
                    <div className="form-column adress">
                        <span className="adress-span">adress</span>
                        <label htmlFor="street">Street</label>
                        <InputText id="street" name="street" value={street} onChange={changeHandler} />
                        <label htmlFor="city">City</label>
                        <InputText id="city" name="city" value={city} onChange={changeHandler} />
                        <label htmlFor="zipCode" className="font-bold block mb-2">Zip Code</label>
                        <InputNumber inputId="zipCode" name="zipCode" value={zipCode} onValueChange={changeHandler} />
                        <label htmlFor="state">State</label>
                        <Dropdown
                            name="state"
                            id={"state"}
                            value={state}
                            onChange={changeHandler}
                            options={departments}
                            optionLabel="name" 
                            // placeholder="Select a department" 
                            // className="w-full md:w-14rem"
                        /> 
                    </div>
                </div>
                <Button type="submit" label="Submit"/>
            </form>

            {/* <button onClick={handleOpen}>Open Modal</button> */}
            <Modal isOpen={isOpen} handleClose={handleClose} allowEscape>
                <h1>Employee Created !</h1>
                <p>firstname: {employeeData.firstname}</p>
                <p>lastname: {employeeData.lastname}</p>
                <p>startDate: {employeeData.startDate}</p>
                <p>department: {employeeData.department}</p>
                <p>birthDate: {employeeData.birthDate}</p>
                <p>street: {employeeData.street}</p>
                <p>city: {employeeData.city}</p>
                <p>state: {employeeData.state}</p>
                <p>zipCode: {employeeData.zipCode}</p>
            </Modal>
      </>
    );
}

export default CreateEmployee;