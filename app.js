console.log("App.js loaded")

function check() {
    var home = document.getElementById("homeButton");
    var contact = document.getElementById("contactButton");
    var social = document.getElementById("socialmediaButton");
    var mywork = document.getElementById("myWork");
    var threelines = document.getElementById("threeLines");
    var x = document.getElementById("X");
    if (home.style.display === "none") {
      home.style.display = "block";
    } else{
        home.style.display = "none";
    }
    if (contact.style.display === "none") {
        contact.style.display = "block";
      } else {
        contact.style.display = "none";
      }
      if (social.style.display === "none") {
        social.style.display = "block";
      } else {
        social.style.display = "none";
      }
      if (mywork.style.display === "none") {
        mywork.style.display = "block";
      } else {
        mywork.style.display = "none";
      }
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      if (threelines.style.display === "block") {
        threelines.style.display = "none";
      } else {
        threelines.style.display = "block";
      }
  }