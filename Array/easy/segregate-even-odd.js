// Given an array arr[] of integers, segregate even and odd numbers in the array such that all the even numbers should be present first, and then the odd numbers.
// Examples:
// Input: arr[] = {7, 2, 9, 4, 6, 1, 3, 8, 5}
// Output: 2 4 6 8 7 9 1 3 5

function segregateEvenOdd(arr) {
	let segregatedArray = [];
	let odd = [];
    for (const element of arr) {
        if (element % 2 === 0) {
			segregatedArray.push(element);
		} else {
            odd.push(element)
        }
    }
	segregatedArray = [...segregatedArray, ...odd]
    console.log(segregatedArray);
}
segregateEvenOdd([7, 2, 9, 4, 6, 1, 3, 8, 5]);
