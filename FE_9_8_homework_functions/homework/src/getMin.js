let getMin = (...arg) => {
    let min = undefined;
    for (let i = 0; i < arg.length; i++) {
        if (min === undefined || min > arg[i]) {
            min = arg[i];
        }
    }
    return min;
}