


let container = document.getElementById("container")
let userInput = document.getElementById("userInput")
let btnStock = document.getElementById("btnStock")

btnStock.addEventListener('click', function() {

  let stockSymbol = userInput.value

  let timer = setInterval(function(){

    let stockObj = getStockQuote(stockSymbol)

    let pairItems = `
        <li>
          <label> ${stockObj.name} </label>
          <label> $${stockObj.price} </label>
        </li>
    `
    container.innerHTML= pairItems



      }, 2000)


  })


  //stockName.textContent = stockObj.name

  //stockPrice.textContent = stockObj.price
