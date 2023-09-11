function rearrangeArraySuchThatEvenPositionedAreGreaterThanOdd(arr) {
for (let index = 0; index < arr.length; index++) {
    if (index % 2 === 0 && arr[index] > arr[index +1]) {
        swapElements(arr, index)
    } else if(index % 2 === 1 && arr[index+1] > arr[index]) {
    swapElements(arr, index)
    }
}
console.log(arr);
};

function swapElements(array, i) {
    let temp = array[i];
    array[i] = array[i +1];
    array[i+1] = temp;
}

rearrangeArraySuchThatEvenPositionedAreGreaterThanOdd([6, 4, 2, 1, 8, 3]);