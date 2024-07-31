// Set the function to be called whenever the user scrolls the page
window.onscroll = function () {
  myFunction();
};

// Get the navigation bar element with the ID "topp"
var topp = document.getElementById("topp");

/**
 * Function to handle the scroll event
 * Adds or removes classes based on the scroll position
 */
function myFunction() {
  // Check if the user has scrolled more than 50 pixels from the top of the document
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // If scrolled more than 50 pixels, change the class of the arrow element and the navigation bar
    document.getElementById("arrow").className = "ons";
    topp.className = "scrl";
  } else {
    // If scrolled less than 50 pixels, reset the class of the arrow element and the navigation bar
    document.getElementById("arrow").className = "down";
    topp.className = "nav-bar";
  }
}

// Add a mouseover event listener to the element with ID "aaa1"
document.getElementById("aaa1").addEventListener("mouseover", function () {
  // Change the background image of the element with ID "activity" when hovered
  document.getElementById("activity").style.background = "url('./activity/1.webp')";
});

// Add a mouseover event listener to the element with ID "aaa2"
document.getElementById("aaa2").addEventListener("mouseover", function () {
  // Change the background image of the element with ID "activity" when hovered
  document.getElementById("activity").style.background = "url('./activity/2.webp')";
});

// Add a mouseover event listener to the element with ID "aaa3"
document.getElementById("aaa3").addEventListener("mouseover", function () {
  // Change the background image of the element with ID "activity" when hovered
  document.getElementById("activity").style.background = "url('./activity/3.jpg')";
});

// Add a mouseover event listener to the element with ID "aaa4"
document.getElementById("aaa4").addEventListener("mouseover", function () {
  // Change the background image of the element with ID "activity" when hovered
  document.getElementById("activity").style.background = "url('./activity/4.jpg')";
});
