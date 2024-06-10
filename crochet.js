const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
  parent.querySelector("span").style.color = "transparent";
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
    parent.querySelector("span").style.color = "#7C8B8B";
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



//kontakt formular
const Navn = document.getElementById("Navn");
const Email = document.getElementById("Email");
const Tlf = document.getElementById("tlf");
const Besked = document.getElementById("Besked");

if(Navn){
    (function() {
        emailjs.init({
        publicKey: "inVz7qcNUU405nova",
        });
    })();
  }

    window.onload = function() {
      document.getElementById('contact-form').addEventListener('submit', function(event) {
          event.preventDefault();       

              emailjs.sendForm('service_03592v6', 'template_8wzydxq', this).then(() => {
                  //sæt formen til start
                  Navn.value = "";
                  Email.value = "";
                  Tlf.value = "";
                  Besked.value = "";

                  alert("Mail sendt");

                  }, (error) => {
                      console.log('FAILED...', error);
              });
      });
  };