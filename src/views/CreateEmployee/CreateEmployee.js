import React, { useState } from 'react';
import {Modal} from '@goldawn/react-modal-component'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import logo from '../../images/logo.jpg'
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";  
import "./CreateEmployee.css";
import { departments, states } from "../../data/formData"
import formatData from '../../services/formatData';

const CreateEmployee = () => {

    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch();
    const handleClose = () => setIsOpen(false)
    const defaultForm = {
        firstname: '',
        lastname: '',
        startDate: new Date(),
        department: '',
        birthDate: new Date(),
        street: '',
        city: '',
        state: '',
        zipCode: ''
    }
        
    const [employeeData, setEmployeeData] = useState(defaultForm)

    const changeHandler = e => {
        setEmployeeData((previousState) => ({
          ...previousState,
          [e.target.name]: e.target.value
        })
        )
    }

    const  submitHandler = e => {
        e.preventDefault()
        setIsOpen(true)
        const formattedData = formatData(employeeData)
        dispatch({ type: "employee/addEmployee", payload: formattedData})
        setEmployeeData(defaultForm)
    }
    

    const { firstname, lastname, startDate, department, birthDate, street, city, state, zipCode } = employeeData
    
    return (
        <>
            <img src={logo} alt="logo Wealth Health"></img>
            <h1>HRnet</h1>
            <Link to="/employee-list">View current employees</Link>
            
            <form id="create-employee-form" onSubmit={submitHandler}>
                <h2>Create employee</h2>
                <div>
                    <div className="form-column bio">
                        <label htmlFor="firstname">First Name</label>
                        <InputText id="firstname" name="firstname" value={firstname} onChange={changeHandler} required />
                        <label htmlFor="lastname">Last Name</label>
                        <InputText id="lastname" name="lastname" value={lastname} onChange={changeHandler} required />
                        <label htmlFor="birthDate">Date of Birth</label>
                        <Calendar inputId={"birthDate"} name="birthDate" value={birthDate} onChange={changeHandler} required />
                        <label htmlFor="startDate">Start Date</label>
                        <Calendar inputId={"startDate"} name="startDate" value={startDate} onChange={changeHandler} required />
                        <label htmlFor="department">Department</label>
                        <Dropdown 
                            name="department"
                            id={"department"}
                            value={department}
                            onChange={changeHandler}
                            options={departments}
                            optionLabel="name"
                            required
                        />
                    </div>
                    <div className="form-column adress">
                        <span className="adress-span">adress</span>
                        <label htmlFor="street">Street</label>
                        <InputText id="street" name="street" value={street} onChange={changeHandler} required />
                        <label htmlFor="city">City</label>
                        <InputText id="city" name="city" value={city} onChange={changeHandler} required />
                        <label htmlFor="zipCode" className="font-bold block mb-2">Zip Code</label>
                        <InputNumber inputId="zipCode" name="zipCode" value={zipCode} onValueChange={changeHandler} required />
                        <label htmlFor="state">State</label>
                        <Dropdown
                            name="state"
                            id={"state"}
                            value={state}
                            onChange={changeHandler}
                            options={states}
                            optionLabel="name"
                            required
                        /> 
                    </div>
                </div>
                <Button type="submit" label="Submit"/>
            </form>

            <Modal isOpen={isOpen} handleClose={handleClose} allowEscape>
                <h1>Employee Created !</h1>
            </Modal>
      </>
    );
}

export default CreateEmployee;