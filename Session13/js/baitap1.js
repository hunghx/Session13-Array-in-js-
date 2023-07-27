// Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2 số chẵn.

// Ví dụ nếu bạn nhập vào 2|454|6|8 thì kết quả của chương trình sẽ là 2-454-6-8.

// B1 cho người dùng nhập vào 1 chuỗi số
// B2 chuyển đổi chuỗi thành mảng theo diều kiện nào đó [2,454,6,8]
// B3 dùng join để nối dấu "-"

// Chuỗi trong js cũng 1 là 1 mảng , bởi vì chuỗi la 1 tập hợp kí tự
// let string = prompt("Nhập 1 số");
// let arr = [];
// for(let i = 0 ; i < string.length;i++){
// //    console.log(string.charAt(i)%2==0);
// if(string.charAt(i)%2==0 && string.charAt(i+1)%2==0){
//  arr.push(string.charAt(i));
// }else{
//     let temp = "";
//     for(let j = i; j<string.length-1;j++){
//         temp +=string.charAt(j); // j =  1 "454"
//         if(string.charAt(j)%2==0 && string.charAt(j+1)%2==0){
//             i = j; // i =3;
//             break;
//         }
//     }
//     arr.push(temp)
// }

// }
// console.log(arr.join("-")); // [2,454,6,8]

// B1 Nhập vào
// B2 duyệt từng kí tự của chuỗi
// nếu phát hiện 2 í tự chẵn thì pusj=h thêm dấu "-"
let string = prompt("Nhập 1 số");
let arr = [];
for (let i = 0; i < string.length; i++) {
  //    console.log(string.charAt(i)%2==0);
  arr.push(string.charAt(i))
  if (string.charAt(i) % 2 == 0 && string.charAt(i + 1) % 2 == 0 && i != (string.length-1)) {
    arr.push("-");
  }
}

console.log(arr);
