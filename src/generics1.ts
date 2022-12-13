

function getRandomAnyElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];


let r1:number = getRandomAnyElement<number>(numbers)
let r2:string = getRandomAnyElement<string>(colors)

console.log(r1);
console.log(r2);

function merge<U, V>(obj1: U, obj2: V) {
    console.log(typeof obj1)
    console.log(typeof obj2)
    return {
        ...obj1,
        ...obj2
    };
}

let result2 = merge<object,number>(
    { name: 'John' },
   1
);

let result3 = merge<object,string>(
    { name: 'John' },
   "Banana"
);

let result4 = merge<object,object>(
    { name: 'John' },
   {jobTitle:"Web Developer"}
);


console.log(result2);
console.log(result3);
console.log(result4);