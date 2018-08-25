/* 1 task */
let findType = (x) => {
    return typeof x;
}

/* 2 task */
let forEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

/* 3 task */
let map = (arr, callback) => {
    let newArr = [];
    forEach(arr, function(el) {
        newArr.push(callback(el));
    });
    return newArr;
}

/* 4 task */
let filter = (arr, callback) => {
    let newArr = [];
    forEach(arr, function(el) {
        let check = callback(el);
        if (check) {
            return newArr.push(el);
        }
    });
    return newArr;
}

/* 5 task */
let getAdultAppleLovers = (arr) => {
    let filterAge = filter(arr, function(el) {
        return el.age > 18 && el.favoriteFruit === 'apple';
    });
    let newArr = map(filterAge, function(el) {
        return el.name;
    });
    return newArr;
}

/* 6 task */
let keys = (obj) => {
    let newArr = [];
    for (el in obj) {
        newArr.push(el);
    }
    return newArr;
}

/* 7 task */
let values = (obj) => {
    let newArr = [];
    for (el in obj) {
        newArr.push(obj[el]);
    }
    return newArr;
}

/* 8 task */
let showFormattedDate = (date) => {
    let month = date.toLocaleString("en-us", { month: "short" });
    let year = date.getFullYear();
    let day = date.getDate();
    return `It is ${day} of ${month}, ${year}`;
}