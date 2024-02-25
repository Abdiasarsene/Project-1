// Ajouts des conditions affichant un pop-up
const nomApp = Bonjour
let nomUserz = prompt("Entrer le mot: "+nomApp)

if(nomUserz===nomApp){
    console.log("Good Job")
} else{
    console.log("Zut, reesayez")
}

//Créer un tableau
let listMots =["Cachalot", "Pétunia", "Serviette"]
let score= listMots.length