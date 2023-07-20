let weight = +prompt("Hãy nhập cân nặng của bạn (kg)");
let height = +prompt("Hãy nhập chiều cao của bạn (m)");
let bmi = weight / (Math.pow(height, 2));
if (bmi < 18.5) {
   document.write('Bạn đang quá gầy');
}
else if (bmi < 25) {
   document.write('Bạn đang có cơ thể bình thường');
}
else if (bmi < 30) {
   document.write('Bạn đang trong giai đoạn tiền béo phì');
}
else if (bmi < 35) {
   document.write('Bạn đang bị béo phì cấp độ I');
}
else if (bmi < 40) {
   document.write('Bạn đang bị béo phì cấp độ II');
}
else {
   document.write('Bạn đang bị béo phì cấp độ III');
}