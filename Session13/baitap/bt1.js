// Bài 1: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.
let arr = [];
for (let i = 0; i < 10; i++) {
  let value = parseInt(prompt(`Nhập vào số nguyên thứ ${i + 1} :`));
  arr.push(value);
}
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    count++;
  }
}
console.log(`Co ${count} so nguyen`);