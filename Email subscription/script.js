const scriptURL = 'https://script.google.com/macros/s/AKfycbwM8DrE_ME32L18dOniw_tjDD0EDUUbILwYIYlG_x5e0-psxTEJM2QiG_165NBH6I6jwQ/exec';
const form = document.forms['submit-to-google-sheet']
let Smsg=document.getElementById("Smsg");
form.addEventListener('submit', e => {
 
    Smsg.style.display="block";
   
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
       Smsg.innerHTML="Thankyou for subscribing!!";
      setTimeout(function(){
         Smsg.innerHTML="";
    },5000)
    })
    .catch(error => console.error('Error!', error.message))
})