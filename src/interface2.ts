//contract, create a Type
interface StringFormat{
    (str:string, isUpper:boolean):string
}

//annotating the variable with the type StringFormat
let format:StringFormat

//implementing the funcion
format=function  (str:string, isUpper:boolean) {
    return isUpper ? str.toUpperCase() : str.toLowerCase()
}


let lowerCase:StringFormat

lowerCase =function (str:string){
    return str.toLowerCase()
}

console.log(lowerCase('VIRMERSON', false))

console.log (format ('virmerson', true))

