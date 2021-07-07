// Write your solution in this file!
const employee = {
    name: "Raymond" ,
    streetAddress: "61 Beltran st" 
} ;


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee}

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway"

    return employee;
}

function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee.name;
    return employee
}
