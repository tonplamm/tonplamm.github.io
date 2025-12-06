import { skill } from "./data.js"

console.log(skill)

skill.forEach((skill)=>{
    const container = document.getElementById('container')

    let div = document.createElement('div')
    div.setAttribute("class", "skill_box")

    let img = document.createElement('img')
    img.setAttribute("src", skill.pic)
    img.setAttribute("class", "img_skill")

    let p = document.createElement('p')
    p.innerHTML = skill.name

    let p2 = document.createElement('p')
    p2.innerHTML = skill.experience

    container.appendChild(div)
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(p2)
})

let img1 = document.getElementById('img1')

img1.addEventListener("mouseover", () => {
    img1.style.transform = "scale(0)"
})

img1.addEventListener("mouseout", () => {
    img1.style.transform = "scale(1)"
})
