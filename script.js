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
    console.log(risultato - sconto20)
}else if( eta > 65){
    console.log(risultato - sconto40)
}else{
    console.log(risultato)
}