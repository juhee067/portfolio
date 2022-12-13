AOS.init();

$(".slider").slick({
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
});

window.onload = function () {
  let search = document.getElementById("#search");
  let searchBar = document.getElementsByClassName("searchBar")[0];
  search.addEventListener("click", function () {
    console.log("aa");
    // searchBar.style.display = "block";
  });
};
