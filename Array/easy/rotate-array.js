// Given an array arr[] of size N, the task is to rotate the array by d position to the left.
// Examples:
// Input:  arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3, 4, 5, 6, 7, 1, 2

function rotateArrayToPosition(arr, d) {
	let temp = []
    temp = arr.slice(0, d)
    arr.splice(0, d)
	arr.push(...temp);
	console.log(arr);
}

rotateArrayToPosition([1, 6, 7, 8], 3);
