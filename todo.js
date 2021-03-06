const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")
const TODOS_KEY = "todos"



let toDos = []

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
} //투두 array로 저장


function deleteToDo(event) {
  const li = event.target.parentElement //버튼의 부모에 접근
  li.remove()
  toDos= toDos.filter((toDo) => toDo.id !== parseInt(li.id))
  saveToDos();
} //리스트 지우기





function paintToDo(newToDo){

const li = document.createElement("li") //li 만듦
li.id = newToDo.id;
const span = document.createElement("span") //span 만듦
span.innerText = newToDo.text //아래에서 만든 toDoInput.value를 span안에 넣음
const button = document.createElement("button") //버튼 만듦
const button2 = document.createElement("input") //체크박스
button2.setAttribute("type", "checkbox")//체크박스
button.innerText = " ❌" // 버튼에 엑스추가
button.addEventListener("click", deleteToDo) //누르면 리스트가 지워진다
li.appendChild(span); //li 안에 span 넣음
li.prepend(button2);//체크박스
li.appendChild(button); //li 에 버튼 추가
toDoList.appendChild(li) //html에 넣어줌
button2.addEventListener("click" , function(){
  li.style.textDecoration = "line-through"
  })
  
}





function handleToDoSubmit(event){
 event.preventDefault();
 const newToDo = toDoInput.value;
 toDoInput.value = "";
 const newToDoObj = {
   text:newToDo,
   id: Date.now()
 }
 toDos.push(newToDoObj);
 paintToDo(newToDoObj);
 saveToDos();
}
toDoForm.addEventListener("submit" , handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);


if (savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
};



$( 'button.bu' ).click( function() {
  $( '.uu' ).slideToggle();
} );




// const day = document.querySelector(".day")
// const night = document.querySelector(".night")
// const wrap = document.querySelector(".wrap")
// const left = document.querySelector(".left")
// const namet = document.querySelector(".nametax")
// const greer = document.querySelector("#greeting")
// const cloc = document.querySelector("#clock")
// const leftspan = document.querySelector(".left span:nth-of-type(1)")
// const leftspan2 = document.querySelector(".left span:nth-of-type(2)")
// const qut = document.querySelector("#quote")
// const tl = document.querySelector("#todo-list")
// const tdf = document.querySelector(".tdf")



// night.addEventListener('click', function(){
//  wrap.style.backgroundColor = "#3b4751"
//  wrap.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  document.body.style.backgroundColor = "#3b4751"
//  document.body.style.color = "#fff"
//  left.style.backgroundColor = "#3b4751"
//  left.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  leftspan.style.boxShadow = "5px 5px 10px #323c45, -5px -5px 10px #44525d "
//  leftspan2.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  namet.style.backgroundColor = "#3b4751"
//  namet.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  greer.style.backgroundColor = "#3b4751"
//  greer.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  cloc.style.backgroundColor = "#3b4751"
//  cloc.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  cloc.style.color = "#fff"
//  qut.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  tl.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "
//  tdf.style.boxShadow = " 5px 5px 10px #323c45,-5px -5px 10px #44525d "

//  $('.left span').hover(function(){
//   $(this).css('boxShadow','inset  5px 5px 10px #323c45,inset  -5px -5px 10px #44525d ');
//   $(this).css('backgroundColor',' #3b4751');
// }, function() {
//   $(this).css('boxShadow','5px 5px 10px #323c45,-5px -5px 10px #44525d ');
//   $(this).css('backgroundColor',' #3b4751');
// });

// } )



