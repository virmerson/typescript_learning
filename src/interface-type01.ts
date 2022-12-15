interface Pair<K, V> {
    key: K;
    value: V;
}


let jan = {
    key:'jan',
    value:1
};

let azul = {
    key:"azul",
    value:"0000ff"
}


let cor: Pair<string,string> = azul
let month:Pair<string,number>=jan
