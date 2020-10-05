var operator;
var num1 = null;
var num2 = null;

function insert(num){ // QUesta funzione mostra i numeri
    document.form.screen.value = document.form.screen.value+num;
}

function c(){  // Questa funzione azzera la calcolatrice
    document.form.screen.value = null;
    document.form.history.value = null;
    num1 = null;
    num2 = null;
}

function oper(op){ // Questa funzione controlla se è già stato scelto un operatore
    if (num1 != null){
        uguale()
    } else {
        num1 = document.form.screen.value;
        operator = op;
        document.form.screen.value = null;
    }
}

function history(){ // Stampa a video le operazioni
    document.form.history.value = num1 + " " + operator + " " + num2 + " =";
 }

function uguale(){ // Questa funzione esegue i calcoli
    num2 = document.form.screen.value;
    document.form.screen.value = null;
    if (operator == '+'){  // In caso di operatore +, somma i due numeri
        ris = parseFloat(num1) + parseFloat(num2);
    } else if (operator == '-'){ // In caso di operatore -, sottrai il primo numero al secondo
        ris = parseFloat(num1) - parseFloat(num2);
    } else if (operator == '*'){ // In caso di operatore *, moltiplica i due numeri
        ris = parseFloat(num1) * parseFloat(num2);
    } else if (operator == '/'){ // In caso di operatore /, divide il primo numero per il secondo
        ris = parseFloat(num1) / parseFloat(num2);
    }

    if (ris){ // Stampa a video il risultato
        document.form.screen.value = ris;
        history();
    }
    
}
function back(){ // Quetsa funzione rimuove un carattere
    var ris = document.form.screen.value;
    document.form.screen.value = ris.substring(0,ris.length-1);
 }



// Vecchio codice con eval
// da non calcolare

// function insert(num){
//     document.form.screen.value = document.form.screen.value+num
// }

// function uguale(){
//     var ris = document.form.screen.value;
//     if(ris){
//         document.form.screen.value = eval(ris)
//     }
// }

// function c(){
//     document.form.screen.value = "";
// }

// function back(){
//     var ris = document.form.screen.value;
//     document.form.screen.value = ris.substring(0,ris.length-1);
// }
