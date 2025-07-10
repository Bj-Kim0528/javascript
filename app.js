//랜덤번호 지정
//유저가 번호를 입력, go라는 버튼을 입력
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Reset버튼을 누르면 게임이 리셋
//5번의기회를 다쓰면 게임이 끝남(더이상 추측불가, 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않음
//유저가 이미 입력한 숫자를 또입력하면, 알려주기, 기회를 깍지 않음


let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click",play)//함수를 매개변수로 넘김

function pickRandonNum(){
  computerNum = Math.floor(Math.random()*100)+1;//0~1사이의 랜덤숫자를 뽑아줌
  console.log("정답",computerNum);
}

function play(){
  let userValue = userInput.value
  if(userValue < computerNum){
    resultArea.textContent = "UP!!"
  }else if(userValue > computerNum){
    resultArea.textContent = "DOWN!!"
  }else{
    resultArea.textContent = "OK!!"
  }
}
pickRandonNum();

