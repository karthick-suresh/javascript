let button = document.querySelector("button")
button.addEventListener("click",displayCity)

function displayCity(){
    let input = document.querySelector("#input")
    let city = input[input.selectedIndex].value
    population = 0 , language = " " , food = " "

    switch(city){
        case "chennai":
            population = 10000000
            language = "tamil"
            food = "idly,briyani,fried_rice"
            break
        case "vizag":
            population = 5900000
            language = "telugu"
            food = "dosa,sambar,poori"
            break
        case "goa":
            population = 3000000
            language = "multi-language"
            food = "burgar,french_fries,idly,dosa and freid_rice"
            break
        case "banglore":
            population = 8500000
            language = "kannada"
            food = "rotti,rice,briyani"
            break
        case "delhi":
            population = 87322
            language = "hindi"
            food = "rotti,rice,fried_rice"
            break
        case "mumbai":
            population = 12300000
            language = "hindi,marati"
            food = "idly,masala_rice,tiffen_items"
            break
        case "kolkata":
            population = 9300000
            language = "bengali"
            food = "jugur_thantha_thooth,rice,tiffen_items"
            break
    }
    display = `your city is ${city}, population around ${population}, language spoken is ${language} and there following food items is ${food}.`
    let element = document.createElement("div")
     element.id= 'result'
     document.querySelector(".inputdiv").appendChild(element)
     document.getElementById("result").innerHTML = display

}