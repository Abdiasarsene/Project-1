//Déclarez un objet
let dossiersetienne ={
    nom: "Etienne Eliasaph ",
    age: 15,
    moyenneclasse: 9 ,
    hobbies: "regader la télé" ,
    preferencecolor: "bleu"
}
dossiersetienne.copine = "Annie"
let file = "Dossier sur Etienne"

const affichage = file+" contient des informations capitales. Parmi ces infos, il est important de noter ceci : "+dossiersetienne.nom+" agé de "+dossiersetienne.age+" ans avec une moyenne de "+dossiersetienne.moyenneclasse+". Il aime beaucoup"+dossiersetienne.hobbies+" et sa couleur préférée est le"+dossiersetienne.preferencecolor+". Sa copine s'appel"+dossiersetienne.copine
console.log(affichage)

//Deuxième exercice objet sur Openclassroom
let ticket ={
    nomFilm: "Batman",
    prix: 10,
    numeroSalle:3
}
let Nom= "Abdias"

let textaffichage = "Bonjour "+Nom+", votre film "+ticket.nomFilm+" est en salle numero "+ticket.numeroSalle+"."
console.log(textaffichage)

//Créer une condition
const belvina = 9
let usertape = prompt("Entrez vos id : "+belv)