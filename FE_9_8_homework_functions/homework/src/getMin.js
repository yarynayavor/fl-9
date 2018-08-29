let getMin = (...arg) => {
    let min = 0;
    for (let i = 0; i < arg.length; i++) {
        if (min === 0 || min > arg[i]) {
            min = arg[i];
        }
    }
    return min;
}