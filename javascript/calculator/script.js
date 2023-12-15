let button = document.querySelector("button")
button.addEventListener("click",calc)

let result = document.createElement("div")
    result.id = "result"
    document.querySelector("#main").appendChild(result)


function calc(){
// console.log("clicked")
let input = document.querySelector("#input").value

let split = input.split(" ")
let val_1 = Number(split[0])
let val_2 = split[1]
let val_3 = Number(split[2])



// console.log(typeof(val_2))
let value = 0
switch(val_2){
    case "+":
       value+= val_1 + val_3
       break

    case "-":
        value+= val_1 - val_3
        break

    case "*":
        value+= val_1 * val_3
        break

    case "/":
        value+= val_1 / val_3
        break
    
}

let final_value = `value is ${value}`
       document.querySelector("#result")
       result.innerHTML= final_value

}