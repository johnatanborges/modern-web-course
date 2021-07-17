Array.prototype.reduce2 = function(callback) {
    let accumulator = this[0]
    for (let i = 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

const sum = (total, value) => total + value

const nums = [1, 2, 3, 4, 5]

console.log(nums.reduce2(sum)) // 15
