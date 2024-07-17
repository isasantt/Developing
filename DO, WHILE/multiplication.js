var x = prompt("Insert a number");
var y = prompt ("Insert a number"); // Number of times it will be multiplied
var z = 0;
while (z<y) {
    z++;
    document.write(x, "x", z, "=", y*(x*z), "<br>");
}