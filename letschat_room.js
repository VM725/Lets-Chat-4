// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB0oLQkxXPWRgXLZlOm3gG9LKCrUnOK-mg",
      authDomain: "lets-chat-841c3.firebaseapp.com",
      databaseURL: "https://lets-chat-841c3-default-rtdb.firebaseio.com",
      projectId: "lets-chat-841c3",
      storageBucket: "lets-chat-841c3.appspot.com",
      messagingSenderId: "230047808796",
      appId: "1:230047808796:web:10894398d44a33c8194ed9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "letschat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "letschat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}