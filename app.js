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
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area")
let history=[]

playButton.addEventListener("click",play)//함수를 매개변수로 넘김
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandonNum(){
  computerNum = Math.floor(Math.random()*100)+1;//0~1사이의 랜덤숫자를 뽑아줌
  console.log("정답",computerNum);
}

function play(){
  let userValue = userInput.value

  if(userValue<1 || userValue>100){
    resultArea.textContent="1과 100사이의 값입력"
    return
  }
  if(history.includes(userValue)){
    resultArea.textContent="이미입력함"
    return
  }

  chances -- ;
  chanceArea.textContent=`남은기회:${chances}번`
  console.log("찬스는", chances)

  if(userValue < computerNum){
    resultArea.textContent = "UP!!"
  }else if(userValue > computerNum){
    resultArea.textContent = "DOWN!!"
  }else{
    resultArea.textContent = "OK!!"
    gameOver = true
  }

  history.push(userValue)
  console.log(history)

  if(chances < 1){
    gameOver = true
  }
  if(gameOver ==true){
    playButton.disabled = true
  }
}

function reset(){
  //user input창이 깨긋이 정리됨
  userInput.value = ""
  //새로운번호가 생성됨
  pickRandonNum()
  gameOver = false
  playButton.disabled = false
  chances = 5
  chanceArea.textContent=`남은기회:${chances}번`
  resultArea.textContent="결과값이 여기로 나옵니다"
}
pickRandonNum();

