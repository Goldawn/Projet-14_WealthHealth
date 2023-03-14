import { configureStore, createSlice } from "@reduxjs/toolkit"

const employeeSlice = createSlice({
    name: "employee",
    initialState: [
        {
            firstname: 'Olivier',
            lastname: 'Oudot',
            startDate: '02/01/2023',
            department: 'Sales',
            birthDate: '02/06/2023',
            street: 'Rue des Pins',
            city: 'Seloncourt',
            state: 'FR',
            zipCode: '25230'
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
        },
        deleteEmployee: (currentState, payload) => {}
    }
})

export const store = configureStore({
    reducer: {
        employee : employeeSlice.reducer
    }
})