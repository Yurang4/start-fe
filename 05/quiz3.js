const text = document.querySelector(".txt");
const text_btn = document.querySelector(".text-btn");
const red_btn = document.querySelector(".add-red");
const add_btn = document.querySelector(".add-btn");
const delete_btn = document.querySelector(".delete-btn");
const reset_btn = document.querySelector(".reset-btn");
const toggle_btn = document.querySelector(".toggle-btn");
const image_btn = document.querySelector(".image-btn");

var is_red = false;
var box_count = 1;
var box_visible = true;


function red_click() {
  for (var i = 0; i < box_count; i++) {
    document.querySelectorAll(".box")[i].classList.add("red");
  }
  is_red = true;
}

function add_click() {
  var new_box = document.createElement('div');
  if (is_red) {
    new_box.classList.add("box", "red");
  }
  else {
    new_box.classList.add("box");
  }
  document.querySelector('body').appendChild(new_box);
  box_count++;
}

function del_click() {
  if (box_count > 0) {
    var last_box = document.querySelectorAll(".box")[box_count - 1];
    document.querySelector('body').removeChild(last_box);
    box_count--;
  }
}

function text_click() {
  var text_value = text.value;
  for (var i = 0; i < box_count; i++) {
    document.querySelectorAll(".box")[i].innerHTML = text_value;
  }
}

function reset_click() {
  if (box_count > 0) {
    var boxes = document.querySelectorAll(".box");
    for (var i = 0; i < box_count; i++) {
      boxes[i].remove();
    }
    box_count = 0;
  }
}

function toggle_click() {
  if(box_visible){
    for (var i = 0; i < box_count; i++) {
      document.querySelectorAll(".box")[i].style.display = "none";
    }
    box_visible = false;
  }
  else {
    for (var i = 0; i < box_count; i++) {
      document.querySelectorAll(".box")[i].style.display = "block";
    }
    box_visible = true;
  }
}

function image_click() {
  var image = "https://i.imgur.com/69NjYBH.png";
  var image_tag = `<img src=${image}>`;
  if(box_count <= 0){
    var new_box = document.createElement('div');
    new_box.classList.add("box");
    document.querySelector('body').appendChild(new_box);
    box_count = 1;
  }
  for (var i = 0; i < box_count; i++) {
    document.querySelectorAll(".box")[i].innerHTML = image_tag;
  }
}

text_btn.addEventListener("click", text_click);
red_btn.addEventListener("click", red_click);
add_btn.addEventListener("click", add_click);
delete_btn.addEventListener("click", del_click);
reset_btn.addEventListener("click", reset_click);
toggle_btn.addEventListener("click", toggle_click);
image_btn.addEventListener("click", image_click);
