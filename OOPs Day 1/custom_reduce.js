// custom reduce (myReduce)

class myReduce {
    constructor(array, callback, initial_value) {
        if (!Array.isArray(array)) {
            throw new Error("Input must be an Array")
        }
        if (typeof callback !== "function") {
            throw new Error("callback must be a function")
        }

        this.array = array;
        this.callback = callback;
        this.initial_value = initial_value;
    }
    reduce() {
        if (this.array.length === 0 && this.initial_value === undefined) {
            throw new Error("cannot reduce an empty array without an initial value")
        }

        let accumulator = this.initial_value !== 0 ? this.initial_value : this.array[0];
        const start_index = this.initial_value !== undefined ? 0 : 1;
        for (let i = start_index; i<this.array.length;i++) {
            accumulator = this.callback(accumulator,this.array[i],i, this.array)
        }
        return accumulator;
    }
}

const myArray = [1,2,3,4,5];
const sumReduce = new myReduce(myArray, (acc, curr) => acc+curr, 0);
const productReduce = new myReduce(myArray, (acc, curr)=> acc*curr , 1);

const sum_result = sumReduce.reduce();
const prod_result = productReduce.reduce();
console.log(sum_result, prod_result);
