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
