const buton = document.querySelector(".btn")
const alter = document.querySelector("#input")
const copyicon = document.querySelector(".fa-copy")
const alert_c = document.querySelector(".alert-container")
buton.addEventListener("click",()=>{
    createPassword()
})

copyicon.addEventListener("click",()=>{
    copy()
})

function createPassword(){
    const chars = "1234567890!@#$%^&*()-_=+[]{};:,./?~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLen = 14;
    let password = "";
    for (let index = 0; index < passwordLen; index++){
        const randomNum =Math.floor( Math.random() * chars.length)
        password += chars.substring(randomNum,randomNum+1)
    }
    alter.value = password;
    
}
function copy(){
    alter.select();
    alter.setSelectionRange(0,9999);
    navigator.clipboard.writeText(alter.value);

    alert_c.innerText = alter.value + " copied!";
    
    alert_c.classList.add("active");

    setTimeout(() => {
        alert_c.classList.remove("active");
    }, 2000);
}
