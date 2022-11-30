function raiseError (): never{
    throw new Error("I'm an error")
}


let x = raiseError()
//dados

/* 
undefine = void
{}  = object
[]  = Array
1   = number
'a' = string 
10-10-2022 = date
false = boolen
*/

function div(a:number, b:number):number{
    if (b==0){
        raiseError()
    }
    return a/b
}

console.log(div(10,0))
// function reject (){
//     return raiseError()
// }
