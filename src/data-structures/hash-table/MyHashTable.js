const defaultHashTableSize = 32;

export default class HashTable {
    constructor(size = defaultHashTableSize) {
        this.buckets = Array(size).fill([])
        this.keys = []
    }
    bucket(key){
        return this.buckets[this.hash(key)]
    }
    hash(str){
        return str.split('').reduce((acc,cur,)=>acc+cur.charCodeAt(0)-96,0)%(this.buckets.length)
    }
    set(key,value){
        const bucket = this.bucket(key)
        if(this.has(key)){
            bucket.filter(item=>item.key===key)[0].value = value
            return
        }
        this.keys.push(key)
        bucket.push({key,value})
    }
    has(value){
        return this.buckets.some(bucket => {
            return (bucket.some(item => {
                return item.key === value
            }))
        })
        
    }
    get(key){
        if(this.has(key)){
        const bucket = this.bucket(key)
        return bucket.filter(item => item.key === key)[0].value
        }
    }
    getKeys(){
        return this.keys
    }
    delete(key){
        if(!this.has(key)){return null}
        let i = this.keys.indexOf(key)
        this.keys.splice(i,1)
        i = this.bucket(key).findIndex(item => item.key = key)
        this.bucket(key).splice(i,1)
    }
}
