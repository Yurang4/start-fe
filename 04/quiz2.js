var select_box = null;

function print_board() {

  var board = document.getElementById("board");
  var board_width = 4;
  var board_height = 4;
  var str = '';

  for(var i=0; i<board_height; i++){
    for(var j=0; j<board_width; j++){
      // TODO : 여기에 필요한 코드를 작성해주세요.
      if ((i+j) % 2 === 0) {
        str += '<span class=black></span>';
      }
      else {
        str += '<span class=white></span>';
      }
    }  
  }
  board.innerHTML = str;
}

function box_click() {
  if(select_box != null){
    select_box.classList.remove("red");
  }
  select_box = this;
  this.classList.add("red");
}

function add_event() {
  var box = document.querySelectorAll('span');

  for(var i=0;i<box.length;i++){
    box[i].addEventListener("click", box_click);
  }
}

print_board();
add_event();