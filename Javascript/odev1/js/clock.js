// Kullanıcı bilgilerinin alınması
let myName = prompt("Kullanıcı Adınızı Giriniz : ")
let info = document.querySelector("#myName")
info.innerHTML = `${myName.length > 0 ? myName : myName = "No Name"}`
const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
const tarih = new Date()

// gün adını al
let day = weekday[tarih.getDay()]

// bugünü tarihini al
let gun = tarih.getDate();
let ay = tarih.getMonth();
let yil = tarih.getFullYear();

// Bulunduğumuz saati al
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();

// saat ve tarihi düzenle
let zaman = `${saat}:${dakika}:${saniye}`
let bugun = `${gun}/${ay+1}/${yil}, ${day}`

// saat ve tarihi yaz
console.log(`Bugün ${bugun} ${day}, saat : ${zaman}`)

let zamanInfo = document.querySelector("#myClock")
let tarihInfo = document.querySelector("#myDate")

tarihInfo.innerHTML = bugun
zamanInfo.innerHTML = zaman