function addNumbers (a:number, b:number): number{
   let add:number =  a+b
   return add
}

function addNumbers2 (a:number, b:number): any{
    let add:number =  a+b
   return {}
 }


let r:number = addNumbers(10,20)

console.log(r)