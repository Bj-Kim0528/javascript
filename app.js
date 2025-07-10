// let hello = 'Hello World';

// 整数を代入する
// let int1 = 1;

// // 負数を代入する
// let int2 = -10;

// // 小数点を代入する
// let float1 = 3.14;

// // 文字列を代入する
// let str1 = 'JavaScriptを覚えよう';

// let str1 = 'Hello';
// let str2 = 'World!!';


// alert(hello);

// alert(4 + 3);

// // 引き算
// alert(8 - 5);

// // 掛け算
// alert(2 * 6);

// // 割り算
// alert(10 / 2);

// alert(str1 + str2);

// alert('Hello' + 'World');

// let orange = 100;
// let apple = 110;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がりんごより高い');
// }


// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// // メイン部分
// let alertString;

// // 作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");

// //変数の中身をアラートで表示する
// alert(alertString);

// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert('あなたの選んだ手は' + user_hand + 'です。');

// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 );

//   if(js_hand_num == 0){
//     js_hand = "グー";
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ";
//   } else if(js_hand_num == 2){
//     js_hand = "パー";
//   }

//   return js_hand;
// }


// let a = 40
// let b = 10
// let temp = 0

// temp = a 

// a = b

// b = temp

// temp = 0


// console.log(a, b)


// let a = !false
// console.log(a)

// let patient = {
//   name : "kim",
//   age : 28,
//   disease : "cold"
// }

// console.log(patient)
// console.log(patient.name)


// patient.name = "jk"
// console.log(patient.name)


// let patientList = [
//   {name : "kim", age : 13},
//   {name : "kim1", age : 14},
//   {name : "kim2", age : 15}
// ]

// console.log(patientList)

// console.log("첫번째환자는 :", patientList[0])
// console.log("첫번째환자의 나이는 :", patientList[0]["age"])

// console.log("두번째 환자의 이름은:", patientList[1].name)

// let menu = 2

// switch (menu){
//   case 1 :
//     console.log("물건사기")
//     break;
//   case 2 :
//     console.log("잔고확인") 
//     break;
//   case 3 :
//     console.log("히스토리확인")
//     break;
//   default :
//     console.log("홈으로가기")
// }

// //i=i+1 이 i++
// for(let i =1;i<11;i++){
//   console.log("눈나!",i)
// }

// for(let i =1;i<11;i++){
//   if (i%2==0){
//     console.log("눈나!",i)
//   }
// }

// for(let i = 2; i<=9; i++){
//   console.log(i,'단')
//   for(let j= 1; j<=9; j++){
//     console.log(i,'*',j,'=',i*j)
//   }
// }


// let i =2
// while(i<10){
//   console.log("실행",i)
//   i++;
// }

// let fruit = ["ba","na","na"]
// //length는 배열의 갯수(위의 배열은 3개이므로 3)
// for(let i = 0;i<fruit.length;i++){
//   console.log(fruit[i])
// }

// let fruit=["ba","na","na","good"]

// for(let i=0;i<fruit.length;i++){
//   console.log("나는",fruit[i])
// }
//for ... of 세부조절은 안되나 순회형 자료의것을 꺼내오기 쉬움
// let sentense = "나는 코딩이 너무 좋아"
// for(let item of fruit){
//   console.log("나는 of",item)
// }
// for(let char of sentense){
//   console.log("char",char) 
// }


// // for ... in 객체의 키값이있나 없나 확인할때 사용가능
// let person={
//   name: "나",
//   age:25,
//   // cute:false
// }
// // for(let key in person){
// //   console.log("key",key)
// //   if(key==="cute"){
// //     console.log("누나는?",person[key])
// //   }
// // }
// for(let key in fruit){
//   console.log("key",key)
// }

// for(let i=1; i<51; i++){
//   let strValue = i.toString() // 문자열로바꿈
//   let result = ""

//   for(let j=0; j<strValue.length; j++){
//     if(strValue[j]==="3" || strValue[j]==="6" || strValue[j]==="9"){
//       result = result+"짝"
//     }
//   }

//   console.log(result.length>0?result:i)
// }

// function 함수이름(매개변수) {
//   // 내용 입력
//   return 반환값;
// }


// function greet(firstName, lastName){
//   console.log("안녕 내이름은",firstName,lastName,"이야")
// }

// greet("김", "병준")


// function meetAt(year, month, day){
//   if(year&&month&&day){
//     return console.log(`${year}/${month}/${day}`)
//   }
//   else if(year&&month){
//     return console.log(`${year}년 ${month}월`)
//   }
//   else if (year){
//     return console.log(`${year}년`)
//   }
// }

// function findSmallestElement(arr){
//   arr.forEach(item=>{
//     console.log(item);
//   });
// }

// const items = ['s','p','k']
// findSmallestElement(items)

// function findSmallestElement(arr){
//   if (arr.length == 0){
//     return 0
//   }

//   let min = arr[0];

//   for (let i = 1; i<arr.length; i++){
//     if (arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;

// }
// const items = [4,1,2]
// console.log(findSmallestElement(items));

function integerDivide(dividend) {
  let quotient1 = 0;
  
  let remainder = dividend;

  // 나머지가 divisor 이상인 동안 뺄셈 반복
  while (remainder >= 50000) {
    remainder -= 50000;
    quotient1++;
  }


  let quotient2 = 0;

  while (remainder >= 10000) {
    remainder -= 10000;
    quotient2++;
  }

  let quotient3 = 0;

  while (remainder >= 5000) {
    remainder -= 5000;
    quotient3++;
  }

  let quotient4 = 0;

  while (remainder >= 1000) {
    remainder -= 1000;
    quotient4++;
  }

  let quotient5 = 0;

  while (remainder >= 500) {
    remainder -= 500;
    quotient5++;
  }

  let quotient6 = 0;

  while (remainder >= 100) {
    remainder -= 100;
    quotient6++;
  }
  
  console.log(`50000 x ${quotient1}`);
  console.log(`10000 x ${quotient2}`);
  console.log(`5000  x ${quotient3}`);
  console.log(`1000  x ${quotient4}`);
  console.log(`500 x ${quotient5}`);
  console.log(`100  x ${quotient6}`);
}

integerDivide(1800);