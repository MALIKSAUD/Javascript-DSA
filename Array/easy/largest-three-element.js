function largestThreeDistinctElements(arr) {
    let threeLargeNumbers = [];
    let sortedArray = arr.sort((a,b) => a - b);
    threeLargeNumbers.push(sortedArray[sortedArray.length -1], sortedArray[sortedArray.length -2], sortedArray[sortedArray.length -3]);
    console.log(threeLargeNumbers);
}

largestThreeDistinctElements([10, 4, 3, 50, 23, 90]);
