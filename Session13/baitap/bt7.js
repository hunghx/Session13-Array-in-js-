// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//  Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không?
//  Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.

// Gợi ý: Việc xoá ở đây tức là dịch phần tử ở bên phải số đã nhập sang vị trí của số đó,
//  và gán 0 cho phần tử cuối cùng của mảng.
const a = 10;
let arr = [];
let arrDelete = [];
for (let i = 0; i < a; i++) {
  let n = +prompt(`Nhap phan tu thu ${i+1} cua mang 10 phan tu`);
  arr.push(n);
}

let num = +prompt("Nhap 1 so nguyen de kiem tra");
let check = false;// giả sử không tồn tại
for (let i = 0; i < arr.length; i++) {
    if(arr[i] === num){
        // có tồn tại 
        check=true;
    }else{
        arrDelete.push(arr[i]);
    }
}
if(check){
    // thực hiện xóa 
    arr = arrDelete;
}else{
    // thông báo không tồn tại
    alert(`Giá trị ${num} không tồn tại trong mảng`)
}

// hiên thị mảng
console.log(arr);

// console.log(arr);
// let num = +prompt("Nhap 1 so nguyen de kiem tra");
// let index = arr.indexOf(num);
// let arr1 = [];
// if (index != -1) {
//   // console.log("nam trong mang");
//   for (j = 0; j < arr.length; j++) {
//     if (j != index) {
//       arr1.push(arr[j]);
//     }
//   }
//   arr = arr1;
// } else {
//   console.log("khong nam trong mang");
// }
// console.log(arr);
