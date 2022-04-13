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

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }