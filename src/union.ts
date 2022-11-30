function addTwoNumbers (a:string | number, b: string| number){

    if (typeof a ==='number' && typeof b ==='number'){
        return a+b
    }else  if (typeof a ==='string' && typeof b ==='string'){
        return a.concat(b)
    }

    throw new Error('Parameter a and parameter b are not the same type')
}

let result = addTwoNumbers('1',2)
console.log(result)