let getClosestToZero = (...arg) => {
    let k = 0;
    for (let i = 0; i < arg.length; i++) {
        if (k === 0 || Math.abs(arg[i]) <= Math.abs(k)) {
            k = arg[i];
        }
    }
    return k;
}