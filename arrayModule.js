export function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}

export function reverseArray(arr) {
    return arr.slice().reverse();
}