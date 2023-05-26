// bài 1 
/**
 * Đầu vào:
 * + Lương 1 ngày bao nhiêu
 * + Số ngày làm
 * Xử lý:
 * + Bấm nút kích hoạt hàm tính lương
 * + lương nhận được bằng lương 1 ngày * số ngày làm
 * Đầu ra: 
 * + Hiển thị lương nhận được
 */
var calculateSalary = document.getElementById("calculateSalary");
calculateSalary.onclick =function () {
    var salaryPerDay = parseFloat(document.getElementById("salaryPerDay").value);
    var numberOfDays = parseInt(document.getElementById("numberOfDays").value);
    var totalSalary = salaryPerDay * numberOfDays;
    document.getElementById("totalSalary").value = totalSalary;
}
// Bài 2 
/**
 * Đầu vào:
 * + Nhập lần lượt 5 số thực vào ô 
 * Xử lý:
 * + Bấm nút kích hoạt hàm tính Trung bình:
 * + Tạo biến và lấy giá trị lần lượt 5 số lưu vào
 * + Tính trung bình 5 số thực:
 * + Cộng tất cả lại rồi chia 5 
 * + Sau đó lưu vào biến meanNumber
 * Đầu ra:
 * + Hiển thị giá trị trung bình trong biến meanNumber
 */
var  calculateMean = document.getElementById("calculateMean");
calculateMean.onclick = function () {
    var numberOne = parseFloat(document.getElementById("numberOne").value);
    var numberTwo = parseFloat(document.getElementById("numberTwo").value);
    var numberThree = parseFloat(document.getElementById("numberThree").value);
    var numberFour = parseFloat(document.getElementById("numberFour").value);
    var numberFive = parseFloat(document.getElementById("numberFive").value);
    var meanNumber = (numberOne + numberTwo + numberThree + numberFour + numberFive) / 5;
    document.getElementById("meanNumber").value = meanNumber;
}
// Bài 3
/**
 * Tạo biến const exchangeRate chứa tỷ suất quy đổi Usd qua VND 
 * Đầu vào:
 * + Nhập số tiền Usd muốn quy đổi
 * Xử lý:
 * + Bấm nút kích hoạt hàm quy đổi tiền
 * + Lấy giá trị Usd lưu vào usdMoney
 * + Sau đó nhân với exchangeRate để ra số tiền ở việt nam
 * + Lưu vào biến vnMoney
 * Đầu ra: 
 * + Hiển thị giá trị VND trong biến vnMoney
 */
const exchangeRate = 23500;
var convertMoney = document.getElementById("convertMoney");
convertMoney.onclick = function () {
    var usdMoney = parseFloat(document.getElementById("usdMoney").value);
    var vnMoney = usdMoney * exchangeRate;
    document.getElementById("vnMoney").value = Intl.NumberFormat('vn-VN').format(vnMoney);
}
// Bài 4
/**
 * Đầu vào:
 * + Nhập chiều dài và chiều rộng hình chữ nhật
 * Xử lý: 
 * + Bấm nút kích hoạt hàm tính chu vi, diện tích
 * + Lấy giá trị của chiều dài lưu vào biến length
 * + Lấy giá trị của chiều rộng lưu vào biến width
 * + Tạo biến diện tích là area = length * width
 * + Tạo biến chu vi là perimeter = 2*(length + width)
 * + Lưu vào biến display: với cú pháp display = "Diện tích: " + area + ";";
    display += " Chu vi: " + perimeter;
 * Đầu ra:
    + Hiển thị kết quả lưu trong biến display
 */
var calculate = document.getElementById("calculate");
calculate.onclick = function () {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    var area = length * width;
    var perimeter = 2 * (length + width);
    var display = "Diện tích: " + area + ";";
    display += " Chu vi: " + perimeter;
    document.getElementById("display").value=display;
}
// Bài 5
/**
 * - Đầu vào:
 * + Nhập vào số nguyên dương n 2 ký tự
 * - Xử lý: 
 * + Sử dụng hàm Math.floor() khi lấy n / 10 để có giá trị hàng chục
 * + Lấy n % 10 để lấy phần dư phép tính cũng là giá trị hàng đơn vị
 * + Cộng tổng 2 số lại với nhau lưu vào biến displaySum
 * - Đầu ra: 
 * + Hiển thị tổng lưu trong biến displaySum
 */
var sum = document.getElementById("sum");
sum.onclick= function () {
    var twoDigitsNum = parseInt(document.getElementById("twoDigitsNum").value);
    var hangChuc = Math.floor(twoDigitsNum/10);
    var hangDonVi = twoDigitsNum % 10;
    var displaySum = hangChuc + hangDonVi;
    document.getElementById("displaySum").value = displaySum;
}