///animated-icon
$(document).ready(function () {
  $(".second-button").on("click", function () {
    $(".animated-icon").toggleClass("open");
  });
});

////sidenavbar////
$(document).ready(() => {
  $(".navbar-toggler, .overlay").on("click", () => {
    $(".mobileMenu, .overlay").toggleClass("open");
  });
});

///////top///////
mybutton = document.getElementById("btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 380 ||
    document.documentElement.scrollTop > 380
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// counter
$(".count").counterUp()({
  delay: 10,
  time: 3000,
});
