let getClosestToZero = (...arg) => {
    let k = undefined;
    for (let i = 0; i < arg.length; i++) {
        if (k === undefined || Math.abs(arg[i]) <= Math.abs(k)) {
            k = arg[i];
        }
    }
    return k;
}