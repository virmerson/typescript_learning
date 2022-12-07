// function getFullName(firstname:string, lastname:string ){
//     return `${firstname} ${lastname}`
// }

//console.log(getFullName('Virmerson', 'Santos'))

// function getFullName(person: { firstname:string, lastname:string} ){
//     return `${person.firstname} ${person.lastname}`
// }

interface PersonInterface{
    readonly ssn?:string;
    firstname:string;
    middlename?:string;
    lastname:string;
}


function getFullName(person: PersonInterface){
    if (person.middlename)
        return `${person.firstname} ${person.middlename} ${person.lastname}`
    else 
        return `${person.firstname} ${person.lastname}`
}


let jao:PersonInterface={
    firstname:'Jão',
    lastname:'da Silva'
}

let maria:PersonInterface={
    ssn:'999-999-999',
    firstname:'Maria',
    middlename:'Rita',
    lastname:'da Silva'
}

maria.firstname= 'Mariah'
maria.lastname='de Souza'
//maria.ssn='10'

console.log(getFullName(jao))
console.log(getFullName(maria))


