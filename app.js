
//변수 목록
let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")
let taskList = []


//액션 목록
addButton.addEventListener("click",addTask)



// 함수목록
function addTask(){
  let task ={
    id: randomIDGenrate(),
    taskContent: taskInput.value,
    isComplete: false
  }
  taskList.push(task)
  render()
  console.log(taskList);
}

function render(){
  let resultHTML = "";
  for(i=0;i<taskList.length;i++){
    if(taskList[i].isComplete == true){
      resultHTML +=
      `
        <div class="task">
          <div class="task-done">${taskList[i].taskContent}</div>
          <div>
            <button>Check</button>
            <button>Delete</button>              
          </div>
        </div>
      `
    } else {
      resultHTML += 
      `
        <div class="task">
          <div>${taskList[i].taskContent}</div>
          <div>
            <button>Check</button>
            <button>Delete</button>              
          </div>
        </div>
      `
    }
  }
  document.getElementById("task-board").innerHTML= resultHTML

}


function randomIDGenrate(){
  return '_' + Math.random().toString(36).substring(2, 9);
}

console.log(taskInput)

