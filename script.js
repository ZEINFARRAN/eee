const stngsBtn = document.querySelector('.stngsBtn');
const stngsBody = document.querySelector('.body');
const stngs = document.querySelector('.card');
const main = document.querySelector('.container')
const darkModeSwitch = document.getElementById('toggle-btn')

function changeClass(name1, name2){
  body.classList.remove(name1)
  body.classList.add(name2)
}

// function getCookie(cname){
//   let name = cname + "="
//   let decodedCookie = decodeURIComponent(document.cookie)
//   let ca = decodedCookie.split(';')
//   for(let i = 0; i < ca.length;i++){
//       let c = ca[i]
//       while(c.charAt(0) == " "){
//           c = c.substring(1)
//       }
//       if(c.indexOf(name) == 0){
//           return c.substring(name.length, c.length)
//       }
//   }
//   return ""
// }

// if(getCookie("theme").length == 0){
//   document.cookie = "theme=light"
// }

function setStorage(theme) {
  localStorage.setItem("theme", theme)
}

const change = document.querySelector("#change-theme")
const body = document.querySelector("body")

change.addEventListener("click", () => {
    if(body.getAttribute("class") == "light"){
        changeClass("light", "dark")
        setStorage('dark')
    }else{
        changeClass("dark", "light")
        setStorage('light')
    }
    
})
function applyTheme() {
    body.classList.add(localStorage.getItem('theme'))
}
window.onload = applyTheme()
console.log()
// const bodyClass = body.getAttribute('class')
// body.classList.remove(bodyClass)
// body.classList.add(cookieTheme)

function random_color() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    
    return color;
  }

stngsBtn.addEventListener('click', function (e) {
e.preventDefault()
stngsBody.style.display = 'flex'
location.replace(`#settings`)
})
//login form
var state= false;
function Logintoggle(){
    if(state){
	document.getElementById("login-password").setAttribute("type","password");
	document.getElementById("login-eye").style.color='#7a797e';
	state = false;
     }
     else{
	document.getElementById("login-password").setAttribute("type","text");
	document.getElementById("login-eye").style.color='#5887ef';
	state = true;
     }
}

//signup form

var state= false;
function Signuptoggle(){
    if(state){
	document.getElementById("signup-password").setAttribute("type","password");
	document.getElementById("signup-eye").style.color='#7a797e';
	state = false;
     }
     else{
	document.getElementById("signup-password").setAttribute("type","text");
	document.getElementById("signup-eye").style.color='#5887ef';
	state = true;
     }
}



function sendEmail(){
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_e9pxgar", "template_n3ykp5e", params)
}