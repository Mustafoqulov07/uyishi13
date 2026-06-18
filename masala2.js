function firstUnique(arr) {
    let a = new Map();
    for (let i of arr) {
        let count = 0;
        for (let x of arr) {
            if (i === x) {
                count++;
            }
        }
        a.set(i, count);
    };
    for (i of arr) {
        if (a.get(i) === 1) {
            return i;
        }
    }
};

console.log(firstUnique([1, 1, 1, 2, 3, 2, 1, 4]))

