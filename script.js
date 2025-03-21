let openbtn = document.getElementById("open")
let closebtn = document.getElementById("close")


openbtn.addEventListener("click",()=>{
    document.body.classList.add("popup-active")
})
closebtn.addEventListener("click",()=>{
    document.body.classList.remove("popup-active")
})