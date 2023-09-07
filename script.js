const chilometri = prompt ("Quanti chilometri devi percorrere?")

console.log(chilometri)

const eta = prompt ("Quanti anni ha il passeggero?")

console.log(eta)

const numero = 0.21

let risultato = numero * chilometri

console.log(risultato)

let sconto20 = risultato * 20 / 100 

let sconto40 = risultato * 40 / 100

if( eta < 18 ){
    prezzo.innerHTML = "il costo del biglietto è" + (risultato - sconto20).toFixed(2)
}else if( eta >= 65){
    prezzo.innerHTML = "il costo del biglietto è" + (risultato - sconto40).toFixed(2)
}else{
   prezzo.innerHTML = "il costo del biglietto è" + (risultato).toFixed(2)
}

document.getElementById ("prezzo")