function guessNumber(n) {
    let min = 1;
    let max = n;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let ret = guess(mid);
        if (ret == 0) {
            return mid;
        }
        if (ret == -1) {
            max = mid - 1;
        }
        else {
            min = mid + 1;
        }
    }
}
;
