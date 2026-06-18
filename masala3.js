function deepReverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (Array.isArray(arr[i])) {
            result.push(deepReverse(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = [1, 4, 5, 6, [1, 2, 3, 1], 1];

console.log(deepReverse(arr));