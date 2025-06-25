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

let patient = {
  name : "kim",
  age : 28,
  disease : "cold"
}

console.log(patient)
console.log(patient.name)


patient.name = "jk"
console.log(patient.name)


let patientList = [
  {name : "kim", age : 13},
  {name : "kim1", age : 14},
  {name : "kim2", age : 15}
]

console.log(patientList)

console.log("첫번째환자는 :", patientList[0])
console.log("첫번째환자의 나이는 :", patientList[0]["age"])

console.log("두번째 환자의 이름은:", patientList[1].name)