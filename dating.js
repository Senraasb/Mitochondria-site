// Alert user and say hello to their name

alert("Hi, Welcome to my personal site fair warning it\'s weird!");

var value = prompt("What's your name by the way?")

if (value) {
    newStatment = document.write("'<p class='name'>  Hi,  "+ value + " welcome to about.me.com!"+ '</p>');
} else if (value= " ") {
    other =  document.write("'<p class='noname'> Hello to you to anonymous!" + '</p>'); 
}

// Log time and Date
var today = new Date(); 
var date = today.getDate()+'-'+ (today.getMonth()+1)+ '-' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// var date = date + '' + time; 

document.getElementsByClassName('lead').innerHTML = document.write("Your log day: " + date +' & ' + "Your log time: " + time);

// document.write("Your log day: " + date +' & ' + "Your log time: " + time+ '😀'	); 



// Log location ||

var x = document.getElementsByClassName("container"); 
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.cords.latitude +
    "<br>Longitude: " + position.cords.longitude;
  }

// Log Weather  ||




