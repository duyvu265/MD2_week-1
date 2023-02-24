function timkiem(data) {
    var i = 1;
    var newarr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            newarr.push(i);
        }
        i++;
    }
    console.log(newarr);
}
var arr = [1, 2, 3, 4, 5, 7, 9];
timkiem(arr);
