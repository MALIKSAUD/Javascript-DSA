function maxMinArrangement(arr) {
    let rearrangedArray = [];
    let small = 0;
    large = arr.length - 1;
    let shouldPickFromLast = true;
    for (let i = 0; i < arr.length; i++) {
        if (shouldPickFromLast) {
            rearrangedArray.push(arr[large--])
        } else {
            rearrangedArray.push(arr[small++])
        }
        shouldPickFromLast = !shouldPickFromLast
    }
    console.log(rearrangedArray);
}
maxMinArrangement([1, 2, 3, 4, 5, 6, 7])