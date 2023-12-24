//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBy-nlPK5bXjh8VB4hXDkaGfr5dus7M_l8",
    authDomain: "kwitter-67854.firebaseapp.com",
    databaseURL: "https://kwitter-67854-default-rtdb.firebaseio.com",
    projectId: "kwitter-67854",
    storageBucket: "kwitter-67854.appspot.com",
    messagingSenderId: "37263946548",
    appId: "1:37263946548:web:c4651b91793405f60b2b61",
    measurementId: "G-FFX162XNB5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();
setItem.localStorage(room_name).innerHTML
add.addRoom.localStorage(firebaseConfig).window(kwitter_room)


function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function(snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
            });
        });
}
getData();

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById(output).innerHTML })
    Room_names = childkey;
    //start code
    console.log("Room Name-" + Room_names);
    row = "<div class = 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    //end code
}

function redirectToRoomNam(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}