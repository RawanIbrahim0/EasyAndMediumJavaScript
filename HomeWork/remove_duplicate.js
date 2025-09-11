
const remove_duplicate = (arr) => {
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}

console.log(remove_duplicate([1,2,3,4,5]))
console.log(remove_duplicate([1,1,1,2,2,2,3,4,4,4,5,6,6,6]))