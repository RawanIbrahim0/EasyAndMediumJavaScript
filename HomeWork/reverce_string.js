
const reverse_string = (str) => {
    let arr = [];

/*     for (let i = str.length-1; i < 0; i--) {
 */    
/* let j=str.length-1;
console.log(j) */
for (let i = 0; i < str.length ; i++) {
        arr.push(str[i]);
    }
    console.log(arr);
    arr.reverse();
    console.log(arr);
    let new_str = "";
    for (let i = 0; i < arr.length; i++) {
        new_str = new_str + arr[i];
    }

    return new_str;
}

console.log(reverse_string("Rawan Ibrahim"));