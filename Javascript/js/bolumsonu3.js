// LocalStorage egzersizi
// counter değerini kaldığı yerden alsın
// Bilgi varsa değeri gelsin yoksa 0 gelsin
// sayı string olarak görünüyore Number 'a çeviriyoruz.
let counter = localStorage.getItem(`counter`) 
    ? Number(localStorage.getItem(`counter`)) 
    : 0
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
    // increase ise counter 'i arttır
    this.id == "increase" ? counter += 1 : counter -= 1
    // localStorage 'a yazalım
    localStorage.setItem(`counter`, counter)
    counterDOM.innerHTML = counter
}