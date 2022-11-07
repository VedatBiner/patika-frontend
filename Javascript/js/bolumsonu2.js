let counter = 0
// id counter olanı alalım
// aynı şekilde increase ve decrease alalım
let counterDOM = document.querySelector(`#counter`)
let increaseDOM = document.querySelector(`#increase`)
let decreaseDOM = document.querySelector(`#decrease`)

// counter değerini alalım
// yani  başlangıç 0 olsun
counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent(){
    console.log(this.id)
    // increase ise counter 'i arttır
    this.id == "increase" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}