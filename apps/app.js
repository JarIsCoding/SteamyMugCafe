let icedbtn = document.getElementById("icedbtn");
let hotbtn = document.getElementById("hotbtn");
let coffeeDiv = document.getElementById("coffeeDiv")

let userInput;

const coffeeApi = async () => {
    const promise = await fetch(`https://api.sampleapis.com/coffee/${userInput}`)
    const data = await promise.json();
    console.log(data)
    createCoffee(data)
}

if (window.location.href.includes('iced')) {
    userInput = 'iced'
} else if(window.location.href.includes('hot')){
    userInput = 'hot'
} else {
    userInput = null
}

function createCoffee(data){
    data.map((coffee) => {
        let p1 = document.createElement("p")
        p1.innerText = coffee.title
    
        let p2 = document.createElement("p")
        p2.innerHTML = coffee.description
    
        coffeeDiv.appendChild(p1)
        coffeeDiv.appendChild(p2)
    })
}

// coffeeApi()
