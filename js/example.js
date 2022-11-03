const elForm = document.querySelector(".form")
const elInputEmail = document.querySelector(".input-email")
const elInputPassword = document.querySelector(".input-password")
const elBtn = document.querySelector(".button")

elBtn.addEventListener("mousedown", ()=>{
    elInputPassword.type = "text"
})

elBtn.addEventListener("mouseup", ()=>{
    elInputPassword.type = "password"
})

elForm.addEventListener("submit", evt =>{
    evt.preventDefault();
    
    const elInputEmailVal = elInputEmail.value;
    const elInputPasswordVal = elInputPassword.value;
    
    const data = {
        email: elInputEmailVal,
        password: elInputPasswordVal
    }
    fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    
}).then(res => res.json()).then(data => localStorage.setItem("token", data.token)).catch(err => console.log(err))
})

