const brokenKeyBoared = (str, ch) => {
    let arr = [];
    let k = 0;
    let start = 0;
    let count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            arr[k] = "";
            for (let j = start; j < i; j++) {
                arr[k] += str[j];
            }
            start = i + 1;
            k++;
        }
        if (i == str.length - 1) {
            arr[k] = "";
            for (let j = start; j <= i; j++) {
                arr[k] += str[j];
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let hasChar = false;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == ch) {
                hasChar = true;
                break;
            }
        }
        if (!hasChar) {
            count++;
        }
    }

    return count;
};



console.log(brokenKeyBoared("Hello World! Rawan Ibrahim","r"));
