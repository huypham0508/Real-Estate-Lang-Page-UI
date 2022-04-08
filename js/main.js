const navSlide = () => {
  const toogleBar = document.querySelector(".menu-active");
  const menu = document.querySelector(".menu");
  toogleBar.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
};
navSlide();
$(".feature-images").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
});
