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

let card2 = document.getElementById('card2')
let pic2 = document.getElementById('pic2')

pic2.addEventListener("mouseover",() => {
    pic2.style.width = "80%"
    card2.style.height = "575px"
})

pic2.addEventListener("mouseout",() => {
    pic2.style.width = "60%"
    card2.style.height = "500px"
})

let card3 = document.getElementById('card3')
let pic3 = document.getElementById('pic3')

pic3.addEventListener("mouseover",() => {
    pic3.style.width = "80%"
    card3.style.height = "575px"
})

pic3.addEventListener("mouseout",() => {
    pic3.style.width = "60%"
    card3.style.height = "500px"
})

