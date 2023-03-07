$(function(){
    var carouselEl = $('.carousel');
    var carouselItems = carouselEl.find('.item');
    var cons=document.getElementById("cons_list");
    var aud=document.getElementById("aud_list");
    var bpo=document.getElementById("bpo_list");
    carouselEl.carousel({
      interval: 15000
    }).on('slid.bs.carousel', function (event) {
        console.log(carouselItems.siblings('.active').index());
        if(carouselItems.siblings('.active').index()=="0"){//////////First Slide
          console.log("Conseil");
          cons.style.display="block";
          aud.style.display="none";
          bpo.style.display="none";
        }
        else if(carouselItems.siblings('.active').index()=="1"){//////////Second Slide
          console.log("Audit");
          aud.style.display="block";
          cons.style.display="none";
          bpo.style.display="none";
        }
        else if(carouselItems.siblings('.active').index()=="2"){//////////Third Slide
          console.log("BPO");
          bpo.style.display="block";
          cons.style.display="none";
          aud.style.display="none";
        }
    })
})
function visibility() {
document.getElementById("env_svg").setAttribute("class","bi bi-envelope hidden");
document.getElementById("env_svg_open").setAttribute("class","bi bi-envelope");
document.getElementById("env_svg_open").style.color="green";
}
function normalSvg() {
document.getElementById("env_svg").setAttribute("class","bi bi-envelope");
document.getElementById("env_svg_open").setAttribute("class","bi bi-envelope hidden");
}
//Today's Date Updated (Today's day only)
var options = { weekday: 'long', };
const today = new Date();
var t = today.toLocaleDateString("fr-FR", options).charAt(0).toUpperCase()+ today.toLocaleDateString("fr-FR", options).slice(1);
var hour = today.getHours();
//Default List of days
  var days = document.querySelectorAll(".flag");

for (i = 0; i < days.length; i++) {//Iterate trought 5 Days (09:00;18:00)
 if(i>=0 && i<=4){/// From monday to Friday
   if(t==days[i].innerHTML){//AND todays date is same
     if(hour >= 9 && hour <= 17){//check if it's working shift..
       days[i].style.color="green";
       days[i].parentElement.parentElement.setAttribute("class","direction-l");
       days[i].nextElementSibling.innerHTML="<span style='color:green' class='time'>Ouvert</span>"
                                }
                           }
  if(t==days[i].innerHTML){//AND todays date is same ( to avoid all days being in green status)
   if(hour < 9 || hour >= 18) {// if not
    days[i].style.color="green";
    days[i].parentElement.parentElement.setAttribute("class","direction-l");
    days[i].nextElementSibling.innerHTML="<span style='color:red' class='time'>Fermé</span>"
                             }
                         }
                 }
 else if(i==5){
  if(t==days[i].innerHTML){//AND todays date is same
   if(hour >= 9 && hour <= 12){//check if it's working shift..
      days[i].style.color="green";
      days[i].parentElement.parentElement.setAttribute("class","direction-l");
      console.log(days[i].nextElementSibling.innerHTML);
      days[i].nextElementSibling.innerHTML="<span style='color:green' class='time'>Ouvert</span>"
                              }
                          }
  if(t==days[i].innerHTML){//AND todays date is same ( to avoid all days being in green status)
   if(hour < 9 || hour >= 13) {// if not
    days[i].style.color="green";
    days[i].parentElement.parentElement.setAttribute("class","direction-l");
    days[i].nextElementSibling.innerHTML="<span style='color:red' class='time'>Fermé</span>"
                              }
                          }
                  }
 else if(i==6){//Sunday
  if(t==days[i].innerHTML){//AND todays date is same ( to avoid all days being in green status)
    days[i].style.color="green";
    days[i].parentElement.parentElement.setAttribute("class","direction-l");
    days[i].nextElementSibling.innerHTML="<span style='color:red' class='time'>Fermé</span>"
                           }
             }

}
            function AutoRefresh( t ) {
               setTimeout("location.reload(true);", t);
            }
//Side bar NAV
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
////Chatbot Dialogflow
function openNav2() {
  document.getElementById("mySidenav2").style.width = "382px";
}

/* Set the width of the side navigation to 0 */
function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}
//Email the contact form
// Replace with your own email address
const recipient = "brahim.abou.yousef@gmail.com";

// When the form is submitted
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const name = encodeURIComponent(document.querySelector("#nom").value);
  const email = encodeURIComponent(document.querySelector("#mail2").value);
  const message = encodeURIComponent(document.querySelector("#msg").value);
  var submit = document.getElementById("send");
  // Change button text to "Envoi en cours"
  submit.textContent = "Envoi en cours";
  submit.classList.add("sending");
  // Construct the email message
  const subject = `New message de ${name} sur votre site web`;
  const body = `
    Name: ${name}\n
    Email: ${email}\n
    Message: ${message}\n
  `;

  // Send the email using Google Apps Script
  const url = "https://script.google.com/macros/s/AKfycbwErotZaBLDa5IMwUyjrI4pjrH-9yVvoqFzkreXFCNdI65f_-O8nBTfEFrpIQMnW0Ck/exec";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    submit.textContent = "Envoyer";
    submit.classList.remove("sending");
    if (xhr.status === 200) {

      alert("Merci pour le message. Nous vous répondrons dès que possible.");
    } else {
      alert("Sorry, there was a problem sending your message.");
    }
  }
};

  xhr.send(`recipient=${recipient}&name=${name}&subject=${subject}&body=${body}&sender=${email}`);
});