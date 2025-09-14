let temp;

const sort = (arr, a) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].a > arr[j + 1].a) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

/* const my_array = [5, 8, 9, 4];*/

let arr = [
  { a: 2, b: 3 },
  { a: 7, b: 1 },
  { a: 5, b: 6 },
];
/* let sorted_arr = sort(arr); */
console.log(sort(arr, "a"));
