let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];

function translate(array) {
    return array.reduce((newArr, present) => {
        return newArr.concat(Array.isArray(present) ? translate(present) : present)
    }, []);
}

console.log(translate(arr))