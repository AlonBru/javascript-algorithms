
export default class PriorityQueue{
    constructor() {
        this.queue = []
    }
    isEmpty() {
        return this.queue.length === 0
    }
    peek(){
        return this.isEmpty() 
        ? null 
        : this.queue[this.queue.length-1].value;
    }
    add(value,priority=0){
        const item = {value, priority} 
        if(this.isEmpty()){ 
            this.queue.unshift(item);
            return
        } 
        for(let i = 0; i<this.queue.length;i++){
            if(this.queue[i].priority<=item.priority){
                this.queue.splice(i,0,item)
                return
            }
        }
        this.queue.push(item)
    
    }
    poll(){
        return this.isEmpty()
        ? null
        : this.queue.pop().value
    }
    findByValue(value){
        for(let item of this.queue){
            if(item.value===value){
                return this.queue.indexOf(item);
            }
        }
        return null
    }
    changePriority(value, priority){
        const i = this.findByValue(value)
        this.queue.splice(i,1)
        this.add(value, priority)
         
    }
    hasValue(value){
        return(Number.isInteger(this.findByValue(value)))
    }
    
} 
