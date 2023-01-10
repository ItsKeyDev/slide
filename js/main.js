// lấy ra HTML Collection
let circles = document.getElementsByClassName("circle");

let i = 0;

//setInterval dùng để chạy thời gian vô hạn mỗi 2s
setInterval(changeBgC, 2000);

//hàm thay đổi background
function changeBgC() {
  circles[i].style.backgroundColor = "purple";
  if (i == 0) {
    circles[4].style.backgroundColor = "#aaa";
  }
  oder(i);
  i++;
  if (i == 5) {
    i = 0;
  }
}

function oder(number) {
  for (let index = 0; index < number; index++) {
    circles[index].style.backgroundColor = "#aaa";
  }
}
