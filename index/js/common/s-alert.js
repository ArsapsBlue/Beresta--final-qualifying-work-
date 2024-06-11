var sAlert = document.querySelector(".s-alert");

function showMessage(message) {
    sAlert.innerHTML = message;
    sAlert.classList.add("s-alert--enabled");
    setTimeout(hideMessage, 5000);
  }

function hideMessage() {
  sAlert.classList.remove("s-alert--enabled")
}


