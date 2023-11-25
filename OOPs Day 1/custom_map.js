// Custom map (myMap)

class myMap {
    constructor(array) {
        if (!Array.isArray(array)) {
            throw new Error("input must be an array")
        }
        this.array = array;
    }
    map(callback) {
        if (typeof callback !== "function") {
            throw new Error("callback must be a function")
        }
        const mappedarray = [];
        for (let i = 0; i<this.array.length;i++) {
            mappedarray.push(callback(this.array[i],i,this.array));
        }
        return mappedarray;
    }
}

const myArray = [1,2,3,4,5];
const myMapper = new myMap(myArray);
const squared_array = myMapper.map(item => item*item);
console.log(squared_array);