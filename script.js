// Generate Pin

function pinNumber(){
    const pin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('pinGenerate').value = pin;
    document.getElementById('notMatched').style.visibility = "hiddden";
    document.getElementById('matched').style.visibility = "hidden";
    resetPin();
}

function resetPin(){
    const pinReset = document.getElementById('keys').value = "";
}
function match(){
    document.getElementById('matched').style.visibility = "visible";
    document.getElementById('notMatched').style.visibility = "hidden";
}
function notMatched(){
    document.getElementById('notMatched').style.visibility = "visible";
    document.getElementById('matched').style.visibility = "hidden";
}
function verifyPin(){
    const generatePin =  document.getElementById('pinGenerate').value;
    const givenPin = document.getElementById('keys').value;

    if(generatePin == givenPin && generatePin != null && generatePin != '' && givenPin != null && givenPin != '' ){
       match()
    }
    else{
        notMatched()
        attempt()
        resetPin();
    }

}

function delNumber(){
    let numDel = document.getElementById('keys').value;
    document.getElementById('keys').value = numDel.substring(0, numDel.length - 1);
}

let count =3;
let time = 1;
function attempt(){
    count -= time;
    const attempt = document.getElementById("attempt");
    attempt.innerHTML = count;
    const submit = document.querySelector(".submit-btn");
    if(count == 0){
        submit.disabled = true;
    }
}


