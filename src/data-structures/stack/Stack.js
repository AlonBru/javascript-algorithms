import LinkedList from '../linked-list/LinkedList';

export default class Stack {
    constructor(){
        this.data =[];
        this.i=0;
    }
    push(item) {
        this.data[this.i+1]= item;
        this.i++;
    }
    peek() {
        return this.isEmpty() ? null : this.data[i];
    }
    pop(){
        const val = this.data[i]
        this.data[i] = null
        this.i--
        return val
    }
    toString(stringifier= x => x) {
        const str =[]
        for (let x=0;x<i;x++){
            str+= stringifier(this.data(x))+','+str
        }
        return str.slice(0,-1)
    }
    isEmpty() {
        return this.i === 0;
    }
    toArray(){
        return [...this.data].slice(0,i).reverse()
    }
}