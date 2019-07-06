function rand([ min = 0, max = 1000 ]) {
    if (min > max) [min, max] = [max, min];
    const value = Math.random() * (max- min) + min;
    return Math.floor(value);
}

console.log(rand([50, 40])); // 45

console.log(rand([992])); // 981

console.log(rand([, 10])); // 4

console.log(rand([])); // 436

// console.log(rand()); // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
