
const reduce_arr = (arr, target) => {
    let i = 0;
    let new_arr = [];
    while (i < arr.length) {
        if (arr[i] < target) {
            new_arr.push(arr[i]);
        }
        i++;
    }
    return new_arr;
}

const sub_arrays = (arr) => {
    let sub = [];
    let n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                sub.push([arr[i], arr[j], arr[k]]);
            }
        }
    }
    return sub;
}

const sum_array = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const three_sum = (arr, target) => {
    let new_arr = reduce_arr(arr, target);
    let sub_arrs = sub_arrays(new_arr);
    let sum = 0;
    for (let i = 0; i < sub_arrs.length; i++) {
        sum = sum_array(sub_arrs[i]);
        if (sum == target) {
            console.log('The Elements Whose Sum Is Equal To ' + target + " : " + sub_arrs[i]);
            return true;
        }
    }
    return false;
}

/* console.log(reduce_arr([1, 4, 24, 6, 13, 2], 13));*/

/* console.log(sub_arrays([1,4,6,2])); */

/* console.log(sum_array([1, 4, 6,10]));*/

console.log(three_sum([1, 4, 24, 6, 13, 2, 5, 7], 12));

