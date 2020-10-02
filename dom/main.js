/* LE DOM */
console.log('Bienvenue dans la console javascript');
console.log("Vous êtes dans l'exercice 1 sur le DOM");

// ------ TODO 1 ------
// Créez une variable récupérant l'élément button ayant l'id "myButton" du HTML.

var elem1 = document.getElementById("myButton");


// ------ TODO 2 ------
// Modifier le texte de l'élément button grâce à sa propriété innerHTML.
elem1.innerHTML ="Montrer...";



// ------ TODO 3 ------
// Créez une variable récupérant tous les éléments de type paragraphe.
var pars = document.getElementsByTagName("p");
console.log("nombre de paragraphes", pars.length);
console.log(pars[1].innerHTML);



// ------ TODO 5 ------
// Créez une variable récupérant le paragraphe avec la classe "blue".
var blue = document.getElementsByClassName('blue');
console.log("nombre d'éléments de la classe blue", blue.innerHTML);




// ------ TODO 6 ------
// Créez une variable récupérant le paragraphe avec l'id "hideMe".
var parToHide = document.getElementById("hideMe");




// ------ TODO 7 ------
// Modifiez le style du paragraphe avec l'id "hideMe" pour le faire disparaître.
parToHide.style.display = "none";

//------Exercice supplémentaire
// Transformer le bouton en un bouton qui permet
//  soit de cacher
//  soit de montrer
//      le paragraphe "hideme"
function hideOrShow(){
    if (parToHide.style.display == "none"){
        parToHide.style.display = "block";
        elem1.innerHTML ="Cacher...";
    }
    else{
        parToHide.style.display = "none";
        elem1.innerHTML ="Montrer...";
    }
    console.log("clic");
}
