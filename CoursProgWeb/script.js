// Fonction pour afficher ou masquer les sections
function toggleContent(id) {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
}

// Fonction pour afficher ou masquer le menu burger
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Exemple de condition
function runConditionExample() {
    const heure = new Date().getHours();
    if (heure < 12) {
        console.log("Bonjour !");
    } else {
        console.log("Bon après-midi !");
    }
}

// Manipulation du DOM : Changer le titre
function changeTitle() {
    document.querySelector("header h1").innerText = "Cours de JavaScript Modifié!";
}

//Exemple de fonctions
function saluer(nom) {
    console.log("Bonjour, " + nom + "!");// Affiche "Bonjour, Alice!"
    return "Bonjour, " + nom + "!";
}

document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
});