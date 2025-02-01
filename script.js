function fibs(number) {
    const arr = [0, 1];
    for (let i = 0; i < number - 2; i++) {
        const newEL = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(newEL);
    }
    return arr;
}

function fibsRec(number, arr = [0, 1]) {
    if (arr.length >= number) {
        return arr;
    }
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(number, arr);
}
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
    const result = [];
    let i = 0; 
    let j = 0; 
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}
console.log(mergeSort([2, 13,9, 10, 3]));
