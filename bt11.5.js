let x = +prompt("nhập 1 số bất kỳ");
let ketqua = x % 2;
switch (ketqua) {
    case 0: document.write("Số của bạn là số chẵn");
        break;
    case 1: document.write("Số của bạn là số lẻ");
        break;
}