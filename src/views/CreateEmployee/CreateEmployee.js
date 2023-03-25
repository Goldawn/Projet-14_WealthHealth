import React, { useEffect, useState } from 'react';
import {Modal} from '@goldawn/react-modal-component'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
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
    const [isValidForm, setIsValidForm ] = useState(false)

    useEffect(() => {        
        const isCompleted = checkFields(employeeData);
        setIsValidForm(isCompleted)
    },[employeeData])

    const changeHandler = e => {
        setEmployeeData((previousState) => ({
          ...previousState,
          [e.target.name]: e.target.value
        })
        )
    }

    const checkFields = (formObj) => {
        for (let key in formObj) {
            if (formObj[key] === null || formObj[key] === "")
                return false
        }
        return true;
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
                            options={states}
                            optionLabel="name"
                        /> 
                    </div>
                </div>
                <Button type="submit" label="Submit" disabled={!isValidForm}/>
            </form>

            <Modal isOpen={isOpen} handleClose={handleClose} allowEscape>
                <p>Employee Created !</p>
                <Link to="/employee-list">View employee list</Link>
            </Modal>
      </>
    );
}

export default CreateEmployee;