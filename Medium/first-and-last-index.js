const first_last_index = (arr, num) => {
    let index_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
        index_arr.push(i);
        }
    }
    console.log(index_arr);
    let fal=[];
    fal.push(index_arr[0]);
    fal.push(index_arr[index_arr.length-1]);
    return fal;
}

console.log(first_last_index([10,20,30,20,50,20,20],20));