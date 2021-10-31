
const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event){
  event.preventDefault()//새로고침 막음
  const username = loginInput.value//유저 네임 넣기
  localStorage.setItem(USERNAME_KEY, username) //사용자 이름 저장

  loginForm.classList.add(HIDDEN_CLASSNAME)
  paintGreetings(username)

}

function paintGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME)//이름 입력하면 폼이 사라짐
  greeting.innerText = `Hello ${saveUsername}`//헬로+내이름넣기
}


const saveUsername = localStorage.getItem(USERNAME_KEY)

if (saveUsername === null){
 loginForm.classList.remove(HIDDEN_CLASSNAME)
 loginForm.addEventListener("submit",onLoginSubmit) //submit으로 저장
}else {
  paintGreetings(saveUsername)
}