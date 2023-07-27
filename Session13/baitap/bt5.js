// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.

let number = +prompt('Nhập sô lượng bạn muốn kiểm  tra');
let arr = [];
for (let i=0; i<number; i++) {
    let element = +prompt('Nhập phàn tử bạn muốn kiểm tra')
    arr.push(element);
}


let count = 0;
for (let j=0; j<arr.length; j++) {
    if (arr[j] < 0) {
        count++
    }
}
console.log(count);