const toArray = (num) => {
    let arr = [];
    while (num != 0) {
        arr.push(num % 10);
        num = Math.floor(num / 10);
    }
    return arr.reverse();
}

const return_index_max = (arr) => {
    let max = arr[0];
    let index_max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index_max = i;
        }
    }
    return index_max;
}

const swap = (arr, i, index_max) => {
    let temp = arr[i];
    arr[i] = arr[index_max];
    arr[index_max] = temp;
    return arr;
}

const toNumber = (arr) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = num * 10 + arr[i];
    }
    return num;
}

const largest_digits_swap = (num) => {
    let arr = toArray(num);
    let index_max=return_index_max(arr);
    arr = swap(arr, 0, index_max);
    return toNumber(arr);
}

console.log(largest_digits_swap(23049));