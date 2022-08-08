var el;

function charCount(e){
    var textEntered = document.getElementById('message').value;
    textEntered= document.getElementById('charactersLeft');
    counter= (180-(textEntered.length));
    charDisplay.textContent= counter;
    lastkey= document.getElementById('lastKey');
    lastkey.textContent='Last key in ACSII code:'+e.keyCode;
}
el=document.getElementById('message');
el.addEventListener('keyup',charCount,false);