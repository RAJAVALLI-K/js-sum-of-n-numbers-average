let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumNum(array) {
    var count = 0, sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
        count++
        // console.log(count);
        // console.log(sum);
    }
    return sum / count
}
console.log(sumNum(array));
