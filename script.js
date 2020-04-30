var operator;
var num1 = null;
var num2 = null;

function insert(num){
    document.form.screen.value = document.form.screen.value+num;
}

function c(){
    document.form.screen.value = null;
    document.form.history.value = null;
    num1 = null;
    num2 = null;
}

function oper(op){
    if (num1 != null){
        uguale()
    } else {
        num1 = document.form.screen.value;
        operator = op;
        document.form.screen.value = null;
    }
}

function history(){
    document.form.history.value = num1 + " " + operator + " " + num2 + " =";
 }

function uguale(){
    num2 = document.form.screen.value;
    document.form.screen.value = null;
    if (operator == '+'){
        ris = parseFloat(num1) + parseFloat(num2);
    } else if (operator == '-'){
        ris = parseFloat(num1) - parseFloat(num2);
    } else if (operator == '*'){
        ris = parseFloat(num1) * parseFloat(num2);
    } else if (operator == '/'){
        ris = parseFloat(num1) / parseFloat(num2);
    }

    if (ris){
        document.form.screen.value = ris;
        history();
    }
    
}
function back(){
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
