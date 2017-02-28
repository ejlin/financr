/* Name: Eric Lin
 * Date: February 28th, 2017
 * Description: This is the app.js document for the entire eventr website
 */

/* This function will animate jumping to links for the pages
 */
$(document).ready(function(){
      $("a").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

          window.location.hash = hash;
          });
        }
      });
    });

/* This function will check the home page for scrolling and change_worth
 * the header navigation bar style accordingly
 */
$(window).scroll(function() {
  if ( $('body').is('home_page')){
    if ($(document).scrollTop() >= $(".home_background_picture").height()) {
      $(".top_header_home").css("box-shadow", "0px 0px 2px 3px #ccc");
      $("#up_arrow").css("visibility", "visible");
      }
    if ($(document).scrollTop() < $(".home_background_picture").height()) {
      $(".top_header_home").css("box-shadow", "0px 0px 0px 0px #ccc");
      $("#up_arrow").css("visibility", "hidden");
    }
    if ($(document).scrollTop() > 0) {
      $(".top_header_home").css("background-color", "white");
      $(".top_header_home").css("opacity", "0.8");
      $(".top_header_links").css("color", "#4b95f6");
      home_logo.src = "Images/eventr_reversed.png";
      home_avatar.src = "Images/avatar_reversed.png";
    } else {
      $(".top_header_home").css("background-color", "transparent");
      $(".top_header_links").css("color", "white");
      home_logo.src = "Images/eventr.png";
      home_avatar.src = "Images/avatar.png";
      $(".top_header_home").css("box-shadow", "0px 0px 0px 0px #ccc");
    }
  }
});

/* This function will initialize our database, Firebase and take care of
 * login and sign up functionality
 */
(function() {

  const config = {
    apiKey: "AIzaSyCOw8jnCcgV0heg6ws4QJ_GwZMO7Lp-Xt0",
    authDomain: "financial-applet.firebaseapp.com",
    databaseURL: "https://financial-applet.firebaseio.com",
    storageBucket: "financial-applet.appspot.com",
    messagingSenderId: "561266953123"
  };

  firebase.initializeApp(config);

  const txtUsername = document.getElementById('username_sign_up');
  const txtPassword = document.getElementById('password_sign_up');
  const txtName = document.getElementById('name_sign_up');
  const txtEmail = document.getElementById('email_sign_up');
  const loginEmail = document.getElementById('login_email');
  const loginPassword = document.getElementById('login_password');
  var today = new Date();

  sign_up_button = document.getElementById('sign_up_button');
  login_button = document.getElementById('login_button');

  if ( sign_up_button){
    console.log('sign up button exists');

    sign_up_button.addEventListener('click', e => {
    const email = txtEmail.value;
    const password = txtPassword.value;
    const name = txtName.value;
    const username = txtUsername.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

      //      var errorCode = e.code;
      //      var errorMessage = e.message;
      //      if (errorCode == 'auth/weak-password') {
      //        alert('The password is too weak.');
      //      } else {
      //        console.log('Inside here');
      location.href = "profile.html";
     //     }
     console.log(e);
    });
  }

  document.getElementById("net_worth_text").innerHTML = "$" + (57);
  document.getElementById("current_date").innerHTML = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getFullYear();
  document.getElementById("yesterday_change").innerHTML = 5 + ("%") + ("\u2191") ;

  if ( login_button){
    login_button.addEventListener('click', e=>{
      const email = loginEmail.value;
      const pass = loginPassword.value;
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));

      var errorCode = e.code;
      var errorMessage = e.message;

      if ( errorCode == 'auth/wrong-password'){
        alert('Wrong password.');
      } else{
        alert(errorMessage);
      }
      console.log(e);
    });
  }

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
      console.log(firebaseUser);
    } else {
      console.log('not logged in');
    }
  });
}());
