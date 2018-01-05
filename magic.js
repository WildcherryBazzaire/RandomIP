console.log("Man Bat says trello poll")
var Generate = function() {
  var IP = document.getElementById("iptext")
  IP.innerHTML = "";
  for(var i=0; i < 4; i++) {
    IP.innerHTML += (Math.round(Math.random() * 255));
    if(i !== 3)
      IP.innerHTML += (".");
  }
}
