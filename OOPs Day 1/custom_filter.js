// custom Array Filter (MineFilter)

class MineFilter {
    constructor(array) {
        if (!Array.isArray(array)) {
            throw new Error("Input must be an Array")
        }
        this.array = array;
    }
        filter(callback) {
            if (typeof callback !== "function") {
                throw new Error("Callback must be a function")
            }
            const filtered_array = []
            for (let i = 0; i<this.array.length; i++) {
                    if (callback(this.array[i], i, this.array)) {
                        filtered_array.push(this.array[i]);
                    }
        }
            return filtered_array;
    }

}

const myArray = [1,2,5,6,7];
const myFilter = new MineFilter(myArray);
const filtered_result = myFilter.filter(item => item > 2);
console.log(filtered_result)