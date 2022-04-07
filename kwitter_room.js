const firebaseConfig = {
    apiKey: "AIzaSyBdLpJ-QGSU5Rzus6_oskgAgDuhvEpF250",
    authDomain: "kwitter-hw-aa152.firebaseapp.com",
    projectId: "kwitter-hw-aa152",
    storageBucket: "kwitter-hw-aa152.appspot.com",
    messagingSenderId: "709775730787",
    appId: "1:709775730787:web:5d95d80e777fadd02e3056",
    measurementId: "G-SMGE4BPEEM"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room name - " + Room_names);
   row = "<div class = 'room_name' id="+Room_names + " onclick = 'redirectToRoomName(this.id)' > #" + Room_names + "</div><hr>"
   document.getElementById("output").innerHTML + = row;
   

   //End code
   });});}
getData();

rediectToRoomName(){
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";

}

