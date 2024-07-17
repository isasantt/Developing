var s = 0;
var i = 0;
do {
    var v = parseFloat(prompt("Insert a number"));
    s += v;
    i++;
} while (i<10) {
    var m = s/10;
    document.write("The media of the 10 numbers is ", m);
}