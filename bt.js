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
 * 
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
 * 
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
 * 
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
 * 
 */
var sum = document.getElementById("sum");
sum.onclick= function () {
    var twoDigitsNum = parseInt(document.getElementById("twoDigitsNum").value);
    var hangChuc = Math.floor(twoDigitsNum/10);
    var hangDonVi = twoDigitsNum % 10;
    var displaySum = hangChuc + hangDonVi;
    document.getElementById("displaySum").value = displaySum;
}