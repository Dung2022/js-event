function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elUsernmame = document.getElementById('username');
    if (elUsernmame.value.lenght<5){
        elMsg.textContent = 'Username must be 5 characters or more';}
    else {elMsg.textContent='';}
}