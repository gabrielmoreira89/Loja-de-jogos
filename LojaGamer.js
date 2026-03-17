let index = 0;

function slide(){

const slides = document.querySelector(".slides")
const total = document.querySelectorAll(".slides img").length

index++

if(index >= total){
index = 0
}

slides.style.transform = `translateX(-${index * 100}%)`

}

setInterval(slide,3000)
