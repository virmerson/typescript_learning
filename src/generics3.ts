function prop<T,K extends keyof T> (obj:T, key:K){
    return obj[key]
}

let obj1 = {name: 'John'}

console.log( prop(obj1, 'name') )