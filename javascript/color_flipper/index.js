let color = document.querySelector(".color_name");
let back = document.querySelector("#wrapper");
let btn = document.querySelector(".btn");

let hexvalues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener("click",changeBg)
function changeBg(){
    let start = "#"
    for (let i=1;i<=6;i++){
     start += randomhexValue()
    }
}
function randomhexValue(){
let randomhex = Math.floor(Math.random()*16);
return hexvalues[randomhex]
}






