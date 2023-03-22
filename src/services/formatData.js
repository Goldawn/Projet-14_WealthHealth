const formatData = (employeeData) => {
    const { birthDate, startDate, department, state } = employeeData
    // we need to format dates MM/DD/YYYY
    // console.log(employeeData.birthDate.toLocaleDateString('en-US', { month: '2-digit'}))
    const formattedBirthDate = ((birthDate.getMonth() > 8) ? (birthDate.getMonth() + 1) : ('0' + (birthDate.getMonth() + 1))) + '/' + ((birthDate.getDate() > 9) ? birthDate.getDate() : ('0' + birthDate.getDate())) + '/' + birthDate.getFullYear();
    const formattedStartDate = ((startDate.getMonth() > 8) ? (startDate.getMonth() + 1) : ('0' + (startDate.getMonth() + 1))) + '/' + ((startDate.getDate() > 9) ? startDate.getDate() : ('0' + startDate.getDate())) + '/' + startDate.getFullYear();

    return {
        ...employeeData,
       birthDate: formattedBirthDate,
       startDate: formattedStartDate,
       department: department.name,
       state: state.name
    }
}

export default formatData;