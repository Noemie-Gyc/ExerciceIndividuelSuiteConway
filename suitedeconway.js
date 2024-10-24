//ETAPE 1
function decoupeChaine(chaine) {
    let result = [];
    for (i = 0; i < chaine.length; i++) { // On admet que i=0, i correspondant à chaque élément de la chaine de caractère, il ne depassera donc pas la longueur du la chaine, et il augmente tant qu'on reste dans la longueur de la chaine. 
        if (chaine[i] !== chaine[i + 1]) { // si la valeur d'un indice ne correspond pas à la valeur de l'indice suivant alors on rajoute un espace. 
            result += chaine[i] + ' ';// Le tableau result est incrémenté au fur et à mesure que l'on parcours le tableau chaine. et on rajoute un espace après l'élément qui diffère du précédent. 
        } else {
            result += chaine[i];// si les caractères ne sont pas différents, on incrémente dans résultat l'élément sans espace derrière. 
        }
    }
    return result;
};
console.log(decoupeChaine("bbbcca"));
console.log(decoupeChaine("ab"));

//ETAPE 2

function decritChaine(chaine) {
    let result = [];
    let occurrence = 1;
    for (i = 0; i < chaine.length; i++) {
    
        if (chaine[i] !== chaine[i + 1]) {
            result += occurrence + chaine[i];//we add the chain in the array only if the next letter is different, to avoid repeating letters
            occurrence = 1; // number of occurrences is updated to 1 only when the next letter in the word in different
        } else if (chaine[i] == chaine[i + 1]) {
            occurrence++;
        }
    }
    return result;
}
console.log(decritChaine("1a"));

//Etape 3 : 

function suiteConway(carac,n){
    let result=[carac];
    let chaine = carac;
    let uniqueResult = "";

    while (result.length < n) {
        uniqueResult = decritChaine(chaine);
        result.push(uniqueResult);
        chaine = uniqueResult;
    }
    return result;
   
}

console.log(suiteConway('a',3))
console.log(suiteConway('1',10))

let suiteConwayChain = suiteConway('1',30);

console.log(suiteConwayChain[9])

//Etape 4: 

    for (let i=0; i<suiteConwayChain.length; i++){

        document.getElementById('suite de Conway').innerHTML += suiteConwayChain[i] + "<br>";

    }


















