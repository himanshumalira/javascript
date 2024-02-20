//  Query Selector

// const heading = document.querySelector("h1");
// heading.style.color = "green"

const para = document.querySelectorAll("p")
//  Target any specific element
para[1].style.color = "red"


//  Target All element by using loop method
//  convert node or html list into Array


const myArr = Array.from(para)
myArr.map((heading) => {
    heading.style.backgroundColor = "white"
    heading.style.color = "black"
    heading.style.fontSize = "50px"
    heading.innerHTML = "Jone bnega DOn"

})

const div = document.createElement("div")
div.className = "main"
div.id = Math.round(Math.random()* 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = "black"
div.style.color = "white"
const child = document.createTextNode("Tom and JErry")
div.style.fontSize = "75px"
div.appendChild(child)
document.body.appendChild(div)