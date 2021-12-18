let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];

function fn(array) {
    const a = array.reduce((newArr, present) => {
        return newArr.concat(Array.isArray(present) ? fn(present) : present)
    }, []);
    return a;
}

console.log(fn(arr))