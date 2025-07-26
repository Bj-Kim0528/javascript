//유저가 값을 입력
let taskInput = document.getElementById("task-input");
console.log(taskInput)



//+버튼을 클릭하면, 할일이 추가
let addButton = document.getElementById("add-button")
addButton.addEventListener("click", addTask)

let taskList = []

function addTask(){
  let task = {
    id: randomIDGenrate(),
    taskContent: taskInput.value,
    isComplete: false
  }
  taskList.push(task)
  console.log(taskList);
  render()
}

function render(){
  //내가 선택한 탭에 따라서
  let list=[]
  if(mode === "all"){
    list = taskList;
  }else if(mode === "ongoing" || mode === "done"){
    list = filterList;
  }
  //리스트를 달리보여줘야함
  //all taskList
  //ongoing,done filterList
  let resultHTML = "";
  for(let i=0;i<list.length;i++ ){
    if(list[i].isComplete == true){
      resultHTML += `
      <div class="task">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>              
        </div>
      </div>
      `
    }else{
      resultHTML += `
      <div class="task">
        <div>${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>              
        </div>
      </div>
      `

    }
  }
  document.getElementById("task-board").innerHTML= resultHTML;
}
//유저가 delete버튼을 누르면 할일이 삭제됨


function deleteTask(id){
  //  // id 가 없는 호출 방어
  //  if (!id) return;

  //  // 1) filter 로 불변 처리
  //  taskList = taskList.filter(task => task.id !== id);
  for(let i = 0; i<taskList.length;i++){
    if(taskList[i].id == id){
      taskList.splice(i,1)
      break
    }
  }
  render();
}
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다(객체 사용)
//1. 체크 버튼을 누르면 true로 다시누르면 false로
//2. true 이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안끝난걸로 간주하고 그대로
function toggleComplete(id){
  console.log("id", id);
  for(let i=0;i<taskList.length;i++){
    if(taskList[i].id == id){
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList)
  
}






//진행중 끝남 탭을 누르면, 언터바가 이동한다
//끝남탭은 끝난 아이템만, 진행중인 탭은 진행중인 아이템만 나오게함
let tabs = document.querySelectorAll(".task-tabs div");
let mode = "all"
let filterList = [];

console.log(tabs)
for(let i=1; i<tabs.length;i++){
  tabs[i].addEventListener("click",function(event){filter(event)})
}

function filter(event){
  mode = event.target.id
  filterList = []
  if(mode === "all"){
    render()
  } else if(mode ==="ongoing"){
    //진행중인 아이템을 보여준다
    //task.isComplete=false
    for(let i = 0; i<taskList.length;i++){
      if(taskList[i].isComplete === false){
        filterList.push(taskList[i])
      }
    }
    render()
    console.log("진행중",filterList)
  }else if(mode === "done"){
    //끝나는 케이스
    //task.isComplete=true
    for(let i=0; i<taskList.length;i++){
      if(taskList[i].isComplete === true){
        filterList.push(taskList[i])
      }
    }
    render()
    console.log("끝남",filterList)
  }
}

//전체탭을 누르면 다시 전체 아이템으로 돌아옴


function randomIDGenrate(){
  return '_' + Math.random().toString(36).substring(2, 9);
}