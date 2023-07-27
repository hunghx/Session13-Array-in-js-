let number = 49;
 let flag = false; // giả sử false là số nt, thì ngược lại true không là số nguyên tô
if (number > 1) {
 
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      // i là ước của number -> không là snt
      flag = true;
      break;
    }
  }
  // kết luận
  if (flag == true) {
    // không là snt
    console.log("không phải snt");
  } else {
    // là snt
    console.log("là snt");
  }
} else {
  // kết luận
  console.log(" không phải snt");
}



// kết luận
// if(flag == true){
//     // không là snt

// }else{
//     // là snt
// }
