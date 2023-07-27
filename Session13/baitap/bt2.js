// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
let arr = [11,22,33,44,55,66,88,77,99,100];
let max = Math.max(11,22,33,44,55,66,88,77,99,100);
let index = arr.indexOf(max);
console.log("Phần tử trong mang có giá trị lớn nhất là:"+index);