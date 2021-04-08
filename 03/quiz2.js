//2차시 만든 구구단코드를 함수로 작성하세요

function 구구단() {
  for(var i=2;i<=9;i++)
  {
    for(var j=1;j<=9;j++)
    {
      console.log(i+' x '+j+' = '+i*j);
    }
  }
}

구구단();

//메소드가 포함된 객체를 생성하세요

var person = {
  nick: 'FE',
  age: 28,
  area: 'jeju',
  hobby: ['js', 'html'],
  hello: function() {
    console.log('hello');
  }
};

//window.prompt() 를 사용하여 사용자에게 숫자값을 입력받고 받은 숫자값들의 합을 출력하는 코드를 작성하세요.

var sum = 0;
var input = 0;
while (input != null) {
  input = prompt('더할 숫자를 입력하세요');
  sum += Number(input);
}
alert(sum);
