

// get randhom interget between 1 to 6
function d6() {
    return Math.floor(Math.random() * 6) + 1;
}
// get a rools => [num, ...],
function getRolls(n) {
    return Array.from({ length: n }, () => d6());
}
// get sum of sums.
function sum(nums) {
    return nums.reduce((prev, cur) => prev + cur, 0);
}

export { d6, getRolls, sum };