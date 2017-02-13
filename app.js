window.onload = (function() {
  

  // Initialize Firebase
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
          
          var errorCode = e.code;
          var errorMessage = e.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');          
          } else {
            console.log('Inside here');
            location.href = "profile.html"; 
          }
          console.log(e);    
      });
      
    }
  
    document.getElementById("net_worth_text").innerHTML = "$" + (56);
    document.getElementById("current_date").innerHTML = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getFullYear();           
    document.getElementById("yesterday_change").innerHTML = 5 + ("%") + ("\u2191") ;           
    
    
    if ( login_button){
      login_button.addEventListener('click', e=>{
        const email = loginEmail.value;
        const pass = loginPassword.value;
        const auth = firebase.auth();
      
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

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

