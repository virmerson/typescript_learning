function multiply (a:number, b:number, c?:number):number{
   if (typeof c !='undefined')
        return a*b*c

    return a*b
}


console.log(multiply(1,2,3))

console.log(multiply(1,2))

//multiply(3) error