let isPrime = (n) => {
    const N=2;
    if (n < N) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        } 
    }
    return true;
}