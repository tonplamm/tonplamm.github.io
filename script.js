// import {skill} from "./data.js"


let card1 = document.getElementById('card1')
let pic1 = document.getElementById('pic1')

pic1.addEventListener("mouseover",() => {
    pic1.style.width = "80%"
    card1.style.height = "575px"
})

pic1.addEventListener("mouseout",() => {
    pic1.style.width = "60%"
    card1.style.height = "500px"
})
