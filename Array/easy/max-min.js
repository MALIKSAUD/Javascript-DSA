// Given a sorted array of positive integers, rearrange the array alternately i.e first element should be a maximum value, at second position minimum value, at third position second max, at fourth position second min, and so on. 
// Examples: 
// Input: arr[] = {1, 2, 3, 4, 5, 6, 7} 
// Output: arr[] = {7, 1, 6, 2, 5, 3, 4}

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