// Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1). 
// Examples :
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

function largestThreeDistinctElements(arr) {
    let threeLargeNumbers = [];
    let sortedArray = arr.sort((a,b) => a - b);
    threeLargeNumbers.push(sortedArray[sortedArray.length -1], sortedArray[sortedArray.length -2], sortedArray[sortedArray.length -3]);
    console.log(threeLargeNumbers);
}

largestThreeDistinctElements([10, 4, 3, 50, 23, 90]);
