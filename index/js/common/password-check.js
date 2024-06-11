var accept = false;

function checkPassword() {
    var password = document.querySelector('#password-check').value; 
    var s_letters = "qwertyuiopasdfghjklzxcvbnm"; 
    var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; 
    var digits = "0123456789"; 
    var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; 
    var smallCharCheck = false; // Есть ли в пароле буквы в нижнем регистре
    var bigCharCheck = false; // Есть ли в пароле буквы в верхнем регистре
    var digitCheck = false; // Есть ли в пароле цифры
    var specSymbolCheck = false; // Есть ли в пароле спецсимволы
    var lengthCheck = false;
    for (var i = 0; i < password.length; i++) {
      /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
      if (!smallCharCheck && s_letters.indexOf(password[i]) != -1) smallCharCheck = true;
      if (!bigCharCheck && b_letters.indexOf(password[i]) != -1) bigCharCheck = true;
      if (!digitCheck && digits.indexOf(password[i]) != -1) digitCheck = true;
      if (!specSymbolCheck && specials.indexOf(password[i]) != -1) specSymbolCheck = true;
    }
    if (password.length > 10) lengthCheck = true;


    if (smallCharCheck && bigCharCheck && digitCheck && specSymbolCheck && lengthCheck) {
        accept = true;
    }

    if (smallCharCheck == true) {
        document.querySelector("#small-char-check-correct").classList.add('password-check__indicator--enabled');
        document.querySelector("#small-char-check-incorrect").classList.remove('password-check__indicator--enabled');
    }
    else {
        document.querySelector("#small-char-check-correct").classList.remove('password-check__indicator--enabled');
        document.querySelector("#small-char-check-incorrect").classList.add('password-check__indicator--enabled');
    }

    if (bigCharCheck == true) {
        document.querySelector("#big-char-check-correct").classList.add('password-check__indicator--enabled');
        document.querySelector("#big-char-check-incorrect").classList.remove('password-check__indicator--enabled');
    }
    else {
        document.querySelector("#big-char-check-correct").classList.remove('password-check__indicator--enabled');
        document.querySelector("#big-char-check-incorrect").classList.add('password-check__indicator--enabled');
    }

    if (digitCheck == true) {
        document.querySelector("#digit-check-correct").classList.add('password-check__indicator--enabled');
        document.querySelector("#digit-check-incorrect").classList.remove('password-check__indicator--enabled');
    }
    else {
        document.querySelector("#digit-check-correct").classList.remove('password-check__indicator--enabled');
        document.querySelector("#digit-check-incorrect").classList.add('password-check__indicator--enabled');
    }

    if (specSymbolCheck == true) {
        document.querySelector("#spec-symbol-check-correct").classList.add('password-check__indicator--enabled');
        document.querySelector("#spec-symbol-check-incorrect").classList.remove('password-check__indicator--enabled');
    }
    else {
        document.querySelector("#spec-symbol-check-correct").classList.remove('password-check__indicator--enabled');
        document.querySelector("#spec-symbol-check-incorrect").classList.add('password-check__indicator--enabled');
    }

    if (lengthCheck  == true) {
        document.querySelector("#lenght-check-correct").classList.add('password-check__indicator--enabled');
        document.querySelector("#lenght-check-incorrect").classList.remove('password-check__indicator--enabled');
    }
    else {
        document.querySelector("#lenght-check-correct").classList.remove('password-check__indicator--enabled');
        document.querySelector("#lenght-check-incorrect").classList.add('password-check__indicator--enabled');
    }

  }

  function passwordRepeatCheck () {
    var password = document.querySelector('#password-check').value;
    var passwordRepeat = document.querySelector('#password-check-repeat').value;
    
    if (password == passwordRepeat) {
        document.querySelector("#repeat-check-correct").classList.add('password-check__indicator--enabled');
        document.querySelector("#repeat-check-incorrect").classList.remove('password-check__indicator--enabled');
    }
    else {
        document.querySelector("#repeat-check-correct").classList.remove('password-check__indicator--enabled');
        document.querySelector("#repeat-check-incorrect").classList.add('password-check__indicator--enabled');
    }

  }


function validate() {
    if (!accept) {
        showMessage("Пароль не соответствует требованиям");
        return event.preventDefault();
    }
    else {
        return true;
    }
}