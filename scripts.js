(function() {
  // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCOw8jnCcgV0heg6ws4QJ_GwZMO7Lp-Xt0",
      authDomain: "financial-applet.firebaseapp.com",
      databaseURL: "https://financial-applet.firebaseio.com",
      storageBucket: "financial-applet.appspot.com",
      messagingSenderId: "561266953123"
    };

    firebase.initializeApp(config);

    const txtEmail = document.getElementById('username_sign_up');
    const txtPassword = document.getElementById('password_sign_up');

    sign_up_button.addEventListener('click', e=> {
      
      const email = txtEmail.value;
      const password = txtPassword.value;
      const auth = firebase.auth();
      
      firebase.auth().createUserWithEmailAndPassword(email, password);
      /*.catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });*/
    });

}());
