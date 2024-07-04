window.onscroll = function() {myFunction()};

var topp = document.getElementById("topp");

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
  document.getElementById("activity").style.background = "url('./activity/1.webp')";
});


document.getElementById("aaa2").addEventListener("mouseover", function() {
  document.getElementById("activity").style.background = "url('./activity/2.webp')";
});


document.getElementById("aaa3").addEventListener("mouseover", function() {
  document.getElementById("activity").style.background = "url('./activity/3.jpg')";
});

document.getElementById("aaa4").addEventListener("mouseover", function() {
  document.getElementById("activity").style.background = "url('./activity/4.jpg')";
});
