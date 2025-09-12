const sub_arrays = (arr) => {
    let sub = [];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            sub.push([arr[i], arr[j], j - i]);
        }
    }
    return sub;
}

const area = (subarr) => {
    let min = Math.min(subarr[0], subarr[1]);
    return min * subarr[2];
}

const container_with_most_water = (arr) => {
    let total_arr = sub_arrays(arr);
    let max_area = area(total_arr[0]);
    let result_arr = [];
    for (let i = 0; i < total_arr.length; i++) {
        if (area(total_arr[i]) > max_area) {
            max_area = area(total_arr[i]);
            result_arr = total_arr[i];
        }
    }
    console.log("Elements : " + "(" + result_arr[0] + "," + result_arr[1] + ")");
    return max_area;
}

/*console.log(sub_arrays([1,4,5,3,8]));*/

/*console.log(area([4,3,4]));*/

/*console.log(container_with_most_water([1, 5, 4, 3]));*/
/*console.log(container_with_most_water([3, 1, 2, 4, 5]));*/

console.log("The Max Area : " + container_with_most_water([2, 1, 8, 6, 4, 6, 5, 5]));
