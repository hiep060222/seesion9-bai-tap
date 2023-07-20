let a = +prompt("nhập số A");
let b = +prompt("nhập số B");
let c = +prompt("nhập số C");
if (a > b && a > c) {
    if (b > c) {
        document.write("số lớn nhất là " + a);
        document.write("số bé nhất là " + c);
    }
    else {
        document.write("số lớn nhất là " + a);
        document.write("số bé nhất là " + b);
    }
}
else if (b > a && b > c) {
    if (a > c) {
        document.write("số lớn nhất là " + b);
        document.write("số bé nhất là " + c);
    }
    else {
        document.write("số lớn nhất là " + b);
        document.write("số bé nhất là " + a);
    }
}
else {
    if (a > b) {
        document.write("số lớn nhất là " + c);
        document.write("số bé nhất là " + b);
    }
    else {
        document.write("số lớn nhất là " + c);
        document.write("số bé nhất là " + a);
    }
}