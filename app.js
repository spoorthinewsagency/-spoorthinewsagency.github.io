function PhoneAuth() {
    var uiConfig = {
        signInSuccessUrl: "/Message.html",
        signInOptions: [
            {
                provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    type: 'image',
                    size: 'invisible',
                    badge: 'bottomleft'
                },
                defaultCountry: 'IN',
                //defaultNationalNumber: '1234567890',
                //loginHint: '+11234567890'
            }
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function () {
            window.location.assign('<your-privacy-policy-url>');
        }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    //var user1 = firebase.auth().currentUser;
    //alert(user1.uid + user1.displayName + user1.phoneNumber);

}


