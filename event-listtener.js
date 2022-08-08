function checkUsername(){
    var elMsg = document.getElementById('feedback');
    if(this.value.length<5){ elMsg.textContent = 'Username must be 5 characters or more';
    } else {elMsg.textContent='';
    }
}
    var elUsernmame = document.getElementById('username');
        elUsernmame.addEventListener('blur',checkUsername,false);







