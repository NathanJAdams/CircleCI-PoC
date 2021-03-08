const sum = (...a: Number[]): Number => a.reduce((prev: Number, curr: Number) => prev.valueOf() + curr.valueOf());

export {
    sum
}
