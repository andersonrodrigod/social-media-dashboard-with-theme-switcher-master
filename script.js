const btn = document.querySelector(".btn")
const boxUps = document.querySelectorAll(".box-folowers-result")
const boxDowns = document.querySelectorAll(".box-overview")
const body = document.body
const title = document.querySelectorAll(".title-1")






btn.addEventListener("click", () => {
    btn.classList.toggle("btn-mover") 
    body.classList.toggle("body-background")
    
    
    boxDowns.forEach(box => {
        box.classList.toggle("boxes-colors") 
    })

    boxUps.forEach(box => {
        box.classList.toggle("boxes-colors") 
    })

    title.forEach(tit => {
        tit.classList.toggle("title-color")
    })
    
})



