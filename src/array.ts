let fruits:string[] = ['apple', 'banana', 'grape']

fruits.push('Water Melon')
fruits.push('Orange')

let people: Array<String> = ["Zé","Maria"]

people.push("Jão")

people.forEach( (p)=>{
    console.log(p)
} )

//normal type
let values1: (string|number) [] = [10 , 'Pineapple', 1]


//generic type
let values2: Array <string | number> = [10,'Pineapple', 1]

