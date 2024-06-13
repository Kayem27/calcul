document.querySelector('#form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération des valeurs des champs
    let number1 = parseFloat(document.querySelector('#number_1').value);
    let operation = document.querySelector('#operation').value;
    let number2 = parseFloat(document.querySelector('#number_2').value);

    let result;

    // Calculs
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = 'On ne peut pas diviser par zéro';
            }
            break;
        default:
            result = 'Vérifier les champs de saisi !';
    }

    // Affichage du résultat
    alert(number1 + " " + operation +" " + number2 + " = " + result);

    // reset formulaire
    form.reset();
});


//* Affichage ou non de la calculatrice 

let container = document.querySelector('.container')
let btn_affiche = document.querySelector('#affiche_calc');
let btn_cache = document.querySelector('#cache_calc');

// cacher la calculatrice
btn_cache.addEventListener('click', () =>{
    container.classList.add('cache')

    // Bouton bleu au focus
    btn_affiche.classList.remove('focus');
    btn_cache.classList.add('focus');
});
// afficher la calculatrice
btn_affiche.addEventListener('click', () =>{
    container.classList.remove('cache');
    
    // Bouton bleu au focus
    btn_affiche.classList.add('focus');
    btn_cache.classList.remove('focus');
})



// **************** Message d'aide au hover

let message_1 = document.querySelector('.message_1');
let message_2 = document.querySelector('.message_2');

// Fonction affichage ou non des messages
function hide_show_message_1(id, event, classMethod) {
    document.querySelector(id).addEventListener(event, (event) => {
        message_1.classList[classMethod]('cache');
    });
}
function hide_show_message_2(id, event, classMethod) {
    document.querySelector(id).addEventListener(event, (event) => {
        message_2.classList[classMethod]('cache');
    });
}


// message "saisir un chiffre"
hide_show_message_1('#number_1', 'mouseleave', 'add');
hide_show_message_1('#number_1', 'mouseenter', 'remove');

hide_show_message_1('#number_2', 'mouseleave', 'add');
hide_show_message_1('#number_2', 'mouseenter', 'remove');

// Message "Selectionner un opérateur"
hide_show_message_2('#operation', 'mouseleave', 'add');
hide_show_message_2('#operation', 'mouseenter', 'remove');