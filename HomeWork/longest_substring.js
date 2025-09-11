
const is_found = (arr, ch) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ch) {
            return true;
        }
    }
    return false;
}

const longest_substring = (str) => {
    let arr = [];
    arr.push(str[0]);
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            continue;
        }
        if (!is_found(arr, str[i])) {
            arr.push(str[i]);
        }
    }
    console.log(arr);
    return arr.length;
}

/* console.log(is_found(['a','c','d'],'k'));
 */
/* console.log(longest_substring("geeksforgeeks"));
console.log(longest_substring("aaa"));
console.log(longest_substring("abcdefabcbb")); */

console.log(longest_substring("rawan ibrahim"));