function myBlend(arr) {
    var n = arr.length;

    for (var i = 0; i < n; i++) {
        var j = Math.floor(Math.random() * n);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr);
