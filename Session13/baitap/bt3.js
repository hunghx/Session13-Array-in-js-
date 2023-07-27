// bài 3 Viết chương trình khởi tạo nhập vào một mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó và 
//giá trị trung bình của các phần tử trong mảng.

let x=[2,5,7,9,15];
let max=x[0];
let sum=0;
for(let i=1;i<x.length;i++){
    if(x[i]>max){
        max=x[i];
    }
    sum+=x[i]
} console.log(max + "là số lớn nhất");
console.log("TBC",sum/x.length);