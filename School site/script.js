window.onscroll = function() {myFunction()};

var topp=document.getElementById("topp");

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("arrow").className = "ons";
    topp.className = "scrl";
  } else {
    document.getElementById("arrow").className = "down";
    topp.className = "nav-bar";
  }
}



document.getElementById("aaa1").addEventListener("mouseover", function() {
  document.getElementById("activity").style.background = "url('./activity/1.webp')"
  document.getElementById("mm").style.color = "white";
  document.getElementById("mm2").style.color = "white";
});
  
document.getElementById("aaa1").addEventListener("mouseout", function() {
  document.getElementById("activity").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./activity/main.jpg')";
});


document.getElementById("aaa2").addEventListener("mouseover", function() {
  document.getElementById("activity").style.background = "url('./activity/2.webp')"
  document.getElementById("mm").style.color = "white";
  document.getElementById("mm2").style.color = "white";
});
  
document.getElementById("aaa2").addEventListener("mouseout", function() {
  document.getElementById("activity").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./activity/main.jpg')";
});




document.getElementById("aaa3").addEventListener("mouseover", function() {
  document.getElementById("activity").style.background = "url('./activity/3.jpg')"
  document.getElementById("mm").style.color = "black";
  document.getElementById("mm2").style.color = "black";
});
  
document.getElementById("aaa3").addEventListener("mouseout", function() {
  document.getElementById("mm").style.color = "white";
  document.getElementById("mm2").style.color = "white";
  document.getElementById("activity").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./activity/main.jpg')";
});




document.getElementById("aaa4").addEventListener("mouseover", function() {
  document.getElementById("activity").style.background = "url('./activity/4.jpg')"
});
  
document.getElementById("aaa4").addEventListener("mouseout", function() {
  document.getElementById("activity").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./activity/main.jpg')";
});

