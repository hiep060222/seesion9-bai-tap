let thang = +prompt("Nhập tháng bất kỳ")
switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write("có 31 ngày");
        break;
    case 2:
        document.write("có 28 ngày hoặc 29 ngày");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write("có 30 ngày");
        break;
    default:
        document.write("không hợp lệ");
        break;
}