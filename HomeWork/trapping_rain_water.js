
const sub_arrays = (arr) => {
    let total_arr = [];
    let leng = arr.length;
    for (let i = 0; i < leng - 1; i++) {
        for (let j = i + 1; j < leng; j++) {
            let max = 0;
            for (let k = i + 1; k < j; k++) {
                if (arr[k] > max) {
                    max = arr[k];
                }
            }
            total_arr.push([arr[i], arr[j], max, i, j]);
        }
    }
    return total_arr;
}

const min = (sub_arr) => {
    let height = Math.min(sub_arr[0], sub_arr[1]) - sub_arr[2];
    let width = sub_arr[4] - sub_arr[3] - 1;
    return height * width;
}

const trapping_rain_water = (arr) => {
    let sum = 0;
    let total_array = sub_arrays(arr);
    for (let i = 0; i < total_array.length; i++) {
        let minn = min(total_array[i]);
        if (minn >= 0) {
            sum = sum + minn;
        }
    }
    return sum;
}

/* console.log(sub_arrays([3, 0, 2, 0, 4])); */
/* console.log(min([3, 4, 2, 0, 4])); */

console.log(trapping_rain_water([3, 0, 2, 0, 4]));
console.log(trapping_rain_water([3, 4, 2, 0, 1, 2]));
console.log(trapping_rain_water([3, 0, 1, 0, 4, 0, 2]));
console.log(trapping_rain_water([1, 2, 3, 4]));