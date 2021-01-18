const jsForm = document.querySelector(".js-form"),
    input = jsForm.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
const USER_LS = 'currentUser',
    SHOWING_ON = 'showing';
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}
function askForName(){
    jsForm.classList.add(SHOWING_ON);
    jsForm.addEventListener("submit", handleSubmit);
}
function paintGreetings(text){
    jsForm.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }else{
        paintGreetings(currentUser);
    }
}
function init(){
    loadName();
}
init();