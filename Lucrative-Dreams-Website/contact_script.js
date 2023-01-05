console.log("App.js loaded")

function check() {
    var home = document.getElementById("homeButton");
    var contact = document.getElementById("contactButton");
    var social = document.getElementById("socialmediaButton");
    var mywork = document.getElementById("myWork");
    var threelines = document.getElementById("threeLines");
    var x = document.getElementById("X");
    var menu = document.getElementById("menu");
    var contactL = document.getElementById("contactLabel");
    var gmailLabel = document.getElementById("gmail");
    var gmailBut = document.getElementById("gmailButton");
    var twitterLabel = document.getElementById("twitter");
    var twitterBut = document.getElementById("twitterButton");
    var instagramLabel = document.getElementById("instagram");
    var instagramBut = document.getElementById("instagramButton");
    
    if (menu.style.borderColor === "white") {
      menu.style.borderColor = "transparent";
    } else {
      menu.style.borderColor = "white";
    }
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
      if (contactL.style.top === "10%") {
        contactL.style.top = "45%";
      } else {
        contactL.style.top = "10%";
      }
      if (gmailLabel.style.top === "10%") {
        gmailLabel.style.top = "45%";
      } else {
        gmailLabel.style.top = "10%";
      }
      if (gmailBut.style.top === "10%") {
        gmailBut.style.top = "45%";
      } else {
        gmailBut.style.top = "10%";
      }
      if (twitterLabel.style.top === "10%") {
        twitterLabel.style.top = "45%";
      } else {
        twitterLabel.style.top = "10%";
      }
      if (twitterBut.style.top === "10%") {
        twitterBut.style.top = "45%";
      } else {
        twitterBut.style.top = "10%";
      }
      if (instagramLabel.style.top === "10%") {
        instagramLabel.style.top = "45%";
      } else {
        instagramLabel.style.top = "10%";
      }
      if (instagramBut.style.top === "10%") {
        instagramBut.style.top = "45%";
      } else {
        instagramBut.style.top = "10%";
      }
  }