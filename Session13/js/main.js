// Cú pháp khai báo 1 mảng
let arrayInt = [5, 9, 3, 11, 5, 23, 7, 33, 49];
console.log(arrayInt);
let arrayString = ["babana", "apple"];
console.log(arrayString);
// khai báo mảng sử dụng từ khóa new
// let arr = new Array(8);
// console.log(arr);

// lấy ra phần tử tại vị trí index = 7 của mảng arrayInt
console.log(" Phần tử tai vị trí index = 7 là " + arrayInt[7]);

arrayString[3] = "pineapple";
// for i (iterator)
// for in
for (let index in arrayInt) {
  // dùng để lấy ra lần lượt các chỉ số của phần tử trong mảng
  console.log(arrayInt[index]);
}

// tính tổng các phần tử trong mảng
let sum = 0;
for (let i in arrayInt) {
  console.log(i);
  sum += arrayInt[i];
}
console.log(sum);

// for of
// tính tích của các phần tử trog mảng
let multi = 1;
for (const element of arrayInt) {
  // duyệt theo phần tử mảng
  console.log(element);
  multi *= element;
}
// for i
console.log("====================================");
for (let i = 0; i < arrayInt.length; i++) {
  // duyêt theo vị trí
  console.log("vị trí " + i);
  console.log("giá trị :" + arrayInt[i]);
}
console.log("====================================");
// tìm những phần tử tại vị trí chẵn và in ra
console.log("====================================");
console.log("Những số chia hết cho 3");
console.log("====================================");
for (let i = 0; i < arrayInt.length; i++) {
  // kiểm tra chia hết cho 3
  if (i % 2 == 0) {
    console.log(arrayInt[i]);
  }
}

let arrayAnimals = [];
// them mới 1 phần tử vào cuối mảng
arrayAnimals.push("dog");
arrayAnimals.push("cat");
arrayAnimals.push("bat");
arrayAnimals.push("fish");
arrayAnimals.push("bear");
arrayAnimals.push("dragon");
arrayAnimals.push("bird");
arrayAnimals.push("aligator");
arrayAnimals.push("snake");
arrayAnimals.push("monkey", "chikken", "human");

// cach push hoạt động
//
arrayAnimals[arrayAnimals.length] = "";
console.log(arrayAnimals);
let arrayAns = ["monkey", "chicken", "human"]; // length = 3
for (let i = 0; i < arrayAns.length; i++) {
  //Them lần lượt các pahanf tử vào cuối mảng
  arrayAnimals[arrayAnimals.length] = arrayAns[i];
}
// i = 0 :  arrayAnimals[arrayAnimals.length] = "monkey"
// i = 1 :  arrayAnimals[arrayAnimals.length] = "chiken"
// i = 2 :  arrayAnimals[arrayAnimals.length] = "human"

// phương thức join() : chuyển mảng thành chuỗi
let arrJoin = [1, 2, 3, 4];
let string = arrJoin.join(""); // pattern
console.log("====================================");
console.log(string);
console.log("====================================");
// đảo ngược các phần tử trong mảng : reverse()
console.log(arrJoin.reverse());
// sắp xếp mảng
arrayInt.sort(function (a, b) {
  return b - a;
});
console.log(arrayInt);
// nối mảng
console.log(arrJoin.concat(arrayInt,[1,2,3]));  
// lấy và xóa phần tử cuối pop();
let elementDelete = arrayInt.pop();
console.log(elementDelete);
// bài tập
let arrdemo = [1,2,3,4,5,6,7,8,9];
arrdemo.pop();
arrdemo.pop();
arrdemo.pop();
arrdemo.pop();
arrdemo.push(6,7,8);
arrdemo.pop();
arrdemo.pop();
let deleteItem = arrdemo.pop();
console.log(arrdemo);
console.log(deleteItem);
// arraydemo = 1,2,3,4,5
// deleteItem = 6
// shift unshift

arrdemo.unshift(7,8,9);
arrdemo.shift();
arrdemo.shift();
arrdemo.shift();
console.log(arrdemo);
// chuyển đổi thành chuỗi toString
console.log(arrdemo.toString());
let arr2side = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2side[1][1]);
let arr2 = [[5,8,9,2,10,3],[4,2,6,8,1,0],[5,9,11,2,4,6]];
console.log(arr2[1][4]);
// duyệt mảng 2 chiều 
console.log("================================");
for(let i=0 ; i<arr2.length ; i++){
    // arr2[i] -- là 1 mảng
    for(let j=0 ; j< arr2[i].length; j++){
        console.log(arr2[i][j]);
    }
}
// tạo 1 mảng 2 chiều m x n với các phần tử có giá trị ngẫu nhiên tu 1-99
// Math.round(Math.random()*98+1)
// Math.random() -- 1 < Math.random()*98 +1 < 99
let m=10,n=15;
let arrRandom = new Array(m); // []
console.log(arrRandom);

for(let i=0;i<m;i++){
    arrRandom[i] = new Array(n);
    for(let j=0;j<n;j++){
        // tạo các giá trị ngẫu nhiêu cho từng phần tử
        arrRandom[i][j] = Math.round(Math.random()*98+1);
    }
}
console.log(arrRandom);




// for(let a in arr){  tương tự vòng lặp for(let i=0;i<arr.length;i++){

//}