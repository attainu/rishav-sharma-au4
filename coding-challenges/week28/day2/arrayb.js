var tmp = new Array();
var v = new Array();
for (i = 0; i < 1; i++) {
    var j = 0;
    tmp[i] = setInterval(function () {
        if (j < 10) {
            console.log(j);
            j++;
        }
    }, 5000);
}