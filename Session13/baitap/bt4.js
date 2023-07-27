//Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên 
//và đảo ngược các phần tử trong mảng đó.
let number=+prompt("Nhap vao so luong phan tu ban muon them:");
let arr=[];
for(let i=0;i<number;i++){
    let element=+prompt(`Nhap vao gia tri cua phan tu thu ${i}`);
    arr.push(element);
}
console.log(arr.reverse());


