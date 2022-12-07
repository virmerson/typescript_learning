"use strict";
// function getFullName(firstname:string, lastname:string ){
//     return `${firstname} ${lastname}`
// }
function getFullName(person) {
    if (person.middlename)
        return `${person.firstname} ${person.middlename} ${person.lastname}`;
    else
        return `${person.firstname} ${person.lastname}`;
}
let jao = {
    firstname: 'Jão',
    lastname: 'da Silva'
};
let maria = {
    ssn: '999-999-999',
    firstname: 'Maria',
    middlename: 'Rita',
    lastname: 'da Silva'
};
maria.firstname = 'Mariah';
maria.lastname = 'de Souza';
//maria.ssn='10'
console.log(getFullName(jao));
console.log(getFullName(maria));
