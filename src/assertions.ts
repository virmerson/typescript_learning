function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice=  <string>getNetPrice (10, 0.05, true)
console.log(netPrice)


let netPrice2=  <number>getNetPrice (10, 0.05, false)
console.log(netPrice2)

let netPrice3:string=  getNetPrice (10, 0.05, true) as string
console.log(netPrice3)


let netPrice4:number=  getNetPrice (10, 0.05, false) as number
console.log(netPrice4)
