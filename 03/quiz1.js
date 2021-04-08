//배열 count 요소들의 평균값 구하는 코드를 작성하세요
var count = [10,20,30,40,50,60,70,100];
var avg = 0;
for(var i = 0;i<count.length;i++)
{
  avg += count[i];
}
avg = avg/count.length;
console.log(avg);

//구구단을 출력하는 코드를 for구문을 사용하여 작성하세요
for(var i=2;i<=9;i++)
{
  for(var j=1;j<=9;j++)
  {
    console.log(i+' x '+j+' = '+i*j);
  }
}
