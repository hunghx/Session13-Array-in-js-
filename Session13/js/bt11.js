// có 1 mảng ds sản phẩm
let products =  ["chocolate", "marshmallow", "cookies", "chips"];
// có 1 mảng giỏ hàng
let carts =[];

 document.write(products.join("\n"))
while(true){
    let productName = prompt("Nhập vào sản phẩm muốn mua");

    // kiểm tra tồn tại trong cua hang
    let flag = false;
    for (let i = 0; i < products.length; i++) {
       if(products[i] === productName){
            flag = true;
            break;
       }
    }
    // cách 2 : sử dụng phương thức của mảng
    // let flag = products.includes(productName)

    if(!flag){
        // nếu không có
        alert("We don't have that item")
    }else{
        // nếu có thì cho phép mua
        // kiểm tra tồn tại trong giỏ hàng
        let idEdit;
        let check = false;
        for (let i = 0; i < carts.length; i++) {
           if(carts[i][0] === productName){
                // đã tồn tại 
                check = true;
                idEdit =i;
                break;
           }
        }

        if(check){
            // tăng số lượng thêm 1
            carts[idEdit][1] +=  1 
        }else{
            // thêm mới 1 item vào giỏ hàng
            carts.push([productName,1])
        }
         
    }

    
    alert(carts)

    let continueBuy = confirm("Bạn có muốn tiếp tục mua không") ;
    if(!continueBuy){
        break;
    }

   
}
