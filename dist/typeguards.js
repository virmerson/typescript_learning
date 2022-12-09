"use strict";
function add3(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid arguments. Both arguments must be either numbers or strings.');
}
class Student {
    study() { }
}
class Prof {
    teach() { }
}
// function toMentor (m:Mentor){
//     if (m instanceof Prof){
//         console.log('mentoring professor ')
//         m.teach()
//     }else {
//         m.study()
//     }
// }
// function toMentor (m:Mentor){
//     if ( 'teach' in m  ){
//         console.log('mentoring professor ')
//         m.teach()
//     }else {
//         m.study()
//     }
// }
function toMentor(m) {
    if (isProfessor(m)) {
        console.log('mentoring professor ');
        m.teach();
    }
    else {
        m.study();
    }
}
//user-defined guard
function isProfessor(v) {
    return v instanceof Prof;
}
let prof1 = new Prof();
let stud1 = new Student();
//console.log (isProfessor(prof1))
console.log(isProfessor(stud1));
// toMentor(prof1)
// toMentor (stud1)
