
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD6iyUlPbeLNdv0jn-aKnS4vykI2kzFV_c",
    authDomain: "vil-hack.firebaseapp.com",
    databaseURL: "https://vil-hack.firebaseio.com",
    projectId: "vil-hack",
    storageBucket: "vil-hack.appspot.com",
    messagingSenderId: "960960482726",
    appId: "1:960960482726:web:f5e0b47e5dc2e12c91d367"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore();
    
db.settings({ timestampsInSnapshots: true }); 


function submitAll() {
    let passkey = $("#pass-key").val();
    let classtype = $("#exampleSelect1").val();
    let stringlink = $('#link').html();
 
    console.log(passkey,classtype,stringlink)

    const docref=db.doc("itrain/"+classtype)
            docref.set({
             class:classtype,
             pass:passkey,
             link:stringlink
            }).then(function(){
              console.log("saved");
            }).catch(function(error){
              console.log("error",error);
            })
}
        
function submitAll() {
  let passkey = $("#pass-key").val();
  let classtype = $("#exampleSelect1").val();
  $('#link').append(`Kindly check existing slides, <a href="/slide-lib.html" target="_blank">Slides Library</a>`);

  console.log(passkey,classtype);

  $('#statusCheck').show();

  var docRef = db.collection("itrain").doc(classtype);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}