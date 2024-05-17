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

function decritchaine(chaine) {
    let result = [];//On stockera le résultat attendu dans un tableau 
    let occurrence = 1;// comptera le nombre d'occurence pour une lettre donnée à suivre. 
    for (i = 0; i < chaine.length; i++) {//on parcourt le tableau chaine en partant de l'indice 0, tant qu'on n'a pas parcouru chaque lettre la boucle continue
        // occurrence++;
        if (chaine[i] !== chaine[i + 1]) {
            result += occurrence + chaine[i];
            occurrence = 1;
        } else if (chaine[i] == chaine[i + 1]) {
            occurrence++;
            // result += occurrence + chaine[i];
        }
    }
    return result;
}
console.log(decritchaine("aabccca"));

//Etape 3 : 

// function suiteConway(carac, n) {
//     let result = [];
//     let i = 1;
//     console.log("1", result);
//     for (i = 1; i < (n-1); i++) {
//         result += carac +' '+  decritchaine(result);
//         result+= decritchaine(result)
//         result = result + ' '+ decritchaine(result);
//         // result = decoupeChaine(result)
//         console.log("2", result)
//     }
//     return result
// }
// console.log(suiteConway("b", 3));

function suiteConway(carac,n){
    let suite=[carac];
    let last = suite[suite.length-1];
    while(suite.length<(n-1)){
        suite+=' '+ decritchaine(suite)+' ';
        console.log("2",suite)
        suite+=decritchaine(decritchaine(last))+ ' ';
    }
    console.log('3',suite)
    return suite;
}
console.log(suiteConway("a",4));













