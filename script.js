function timec() {
  var time = document.getElementById("time");

  var d = new Date();
  var state;
  if (d.getHours() > 12) {
    var state = "PM";
  } else {
    var state = "AM";
  }
  time.innerHTML =
    (d.getHours() % 12) +
    ":" +
    d.getMinutes() +
    ":" +
    d.getSeconds() +
    " " +
    state;
}

function dayc() {
  var tme = document.getElementById("dat");
  var d = new Date();

  tme.innerHTML = d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate();
}
setInterval(timec, 1000);
setInterval(dayc, 1000);


let tasktext = document.getElementById("Taskinput");
let taskdate = document.getElementById("taskdate");
let tasktime = document.getElementById("tasktime");
let alltask = document.getElementById("allitem");

let todos = [];

todos = JSON.parse(localStorage.getItem("todos") || []);

renderlist();

function renderlist() {
  for(let i=0;i<todos.length;i++){
    todos[i].id=i;
    console.log(todos[i]);
  }

  
  let task = todos.map(function (item) {
    return `<div class="taskcard">

   <div class="data"> 
   <div class="taskn"><p>${item.title}<p> </div>
    <div class="taskd">${item.tdate} </div>
   <div class"tasktm"> ${item.ttime}</div>
    </div>
    <button onclick="deleteI(${item.id})">Delete</button>
    </div>`;
  });

  let alltodo = task.reduce(function (total, curr) {
    return total + curr;
  },"");
  alltask.innerHTML = alltodo;
}

function deleteI(id) {
  todos = todos.filter((item) => item.id != id);
  renderlist();
  savelocal();
}

function savelocal() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getlocal() {
  localStorage.getItem("todos");
}

function addtask() {
  if (tasktext.value == "") {
    alert("Please enter  Task name");
  } else {
    let todo = {
      id: todos.length+1,
      title: tasktext.value,
      tdate: taskdate.value,
      ttime: tasktime.value,
    };

    todos.push(todo);
    tasktext.value = "";

    renderlist();
    savelocal();
  }
 
  // console.log(todos);

}

