import { configureStore, createSlice } from "@reduxjs/toolkit"
import { saveData, loadData } from "../src/services/LocalStorage"

const savedEmployeesFromLocalStorage = JSON.parse(loadData("employeesData"))
const employeeSlice = createSlice({
    name: "employee",
    initialState: savedEmployeesFromLocalStorage ? savedEmployeesFromLocalStorage : [
        {
            firstname: 'Tony',
            lastname: 'Stark',
            birthDate: '05/29/1970',
            startDate: '12/16/1991',
            department: 'Sales',
            street: 'Point Dume',
            city: 'Malibu Point',
            state: 'test',
            zipCode: '10880'
        },
        {
            firstname: 'Hello',
            lastname: 'World',
            startDate: 'World',
            department: 'World',
            birthDate: 'World',
            street: 'World',
            city: 'World',
            state: 'World',
            zipCode: 'World'
        },
        {
            firstname: 'Olivier',
            lastname: 'Goldawn',
            startDate: '02/01/2023',
            department: 'Sales',
            birthDate: '02/06/2023',
            street: 'Rue des Pins',
            city: 'Seloncourt',
            state: 'FR',
            zipCode: '25235'
        }
    ],
    reducers: {
        addEmployee: (currentState, action) => {
            const { firstname, lastname, startDate, department, birthDate, street, city, state, zipCode } = action.payload
            const newEmployee = {
                firstname: firstname,
                lastname: lastname,
                startDate: startDate,
                department: department,
                birthDate: birthDate,
                street: street,
                city: city,
                state: state,
                zipCode: zipCode
            }
            currentState.push(newEmployee)
            saveData("employeesData", JSON.stringify(currentState))
        },
        deleteEmployee: (currentState, action) => {}
    }
})

export const store = configureStore({
    reducer: {
        employee : employeeSlice.reducer
    }
})