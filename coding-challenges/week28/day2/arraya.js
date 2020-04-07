var tmp = new Array();
for (i = 0; i < 5; i++) {
    var j = 0;
    tmp[i] = setInterval(function () {
        if (j < 6) {
            console.log(j);
            j++;
        }
    }, 5000);
}

