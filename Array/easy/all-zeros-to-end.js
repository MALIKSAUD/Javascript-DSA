function moveZerosToEnd(arr) {
    let newArray = []
    let zerosArray = [];
	for (const element of arr) {
		if (element === 0) {
			zerosArray.push(element)
		} else {
            newArray.push(element)
        }
	}
    newArray.push(...zerosArray)
	console.log(newArray);;
}

moveZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]);
