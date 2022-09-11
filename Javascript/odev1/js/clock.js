let name = prompt("Lütfen isminizi giriniz:")


//let welcome_text = document.querySelector('myName')
let welcome_text = document.getElementById('myName')
const days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

welcome_text.innerHTML += name;

const dateNow = new Date();
hour = dateNow.getHours()
min = dateNow.getMinutes()
day = days[dateNow.getDay()]


document.getElementById('myClock').innerHTML =  `Saat şu anda ${hour} : ${min} ${day}`;
