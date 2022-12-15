class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.isFull()) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T | undefined {
        if (this.isEmpty()) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}



const numbers2 = new Stack<number>(5);


while (!numbers2.isFull()){

    let n = randBetween(1,10)
    numbers2.push(n)
    console.log(`Push ${n} into the stack `)
}

while (!numbers2.isEmpty()){
    let n = numbers2.pop()
    console.log(`Pop ${n} from the stack`)

}


let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
