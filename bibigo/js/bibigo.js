window.onload = function () {
  let search = document.querySelector("#SCBtn");
  let searchBar = document.querySelector("#searchBar");
  let close = document.querySelector("#close");
  search.addEventListener("click", function () {
    searchBar.style.display = "block";
  });
  close.addEventListener("click", function () {
    searchBar.style.display = "none";
  });
};
AOS.init();

$(".slider").slick({
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
});

// scroll
window.addEventListener("scroll", function () {
  let scrollItem = document.querySelector(".scrollUp");
  if (window.scrollY >= 450) {
    scrollItem.classList.add("on");
    scrollItem.innerHTML = '<i class="xi-arrow-up"></i>';
  } else {
    scrollItem.classList.remove("on");
    scrollItem.innerHTML = 'SCROLL DOWN<i class="xi-angle-down-min"></i>';
  }
  console.log(scrollItem.className);
});
