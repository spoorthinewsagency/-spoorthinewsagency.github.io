//check the Phone Number
var rootRef = firebase.database().ref();
rootRef.once("value")
.then(function(snapshot) {
var key1 = snapshot.child("Users").child("Customers").child(uid).child("UserInformation").child("phoneNumber").key;
var val1 = snapshot.child("Users").child("Customers").child(uid).child("UserInformation").child("phoneNumber").val();
console.log(key1);
console.log(val1);