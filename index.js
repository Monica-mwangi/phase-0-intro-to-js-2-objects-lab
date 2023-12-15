// Write your solution in this file!
let employee = {
   
    name: 'sam',
    streetAdress: '11 Broadway'
}
 function updateEmployeeWithKeyAndValue(employee, key, value){
     let employee2 = {...employee};
     employee2[key] = value;
     return employee2;
 }   
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let employee3 = {...employee};
    delete employee3[key];
    return employee3
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    employee[key] = value;
    return employee;
}
