const linearSearch = (collection, element) => {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i] === element) {
            return i;
        }
        else if (i === collection.length - 1) {
            return "Not Found";
        }
    }
}


const arr = [25, 23, 55, 6, 78, 100]
console.log('search', linearSearch(arr, 100))