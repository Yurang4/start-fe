var board = document.getElementById("board");
var board_width = 4;
var board_height = 4;
var box_count = 0;
var total_box_count = 16;
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