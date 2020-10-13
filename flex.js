
$(document).ready(function () {
$(".wideSlider").each(function () {
    var $this = $(this);
    var $slider = $this.find(".flexslider");
    var startat = $slider.attr("data-startat");
    if (startat = 0) {
    }
    $slider.flexslider({
      animation: 'slide',
      easing: 'linear',
      slideshow: true,
      slideshowSpeed: 7000,
      animationLoop: true,
      startAt: startat,
      controlNav: false,
      directionNav: true,
      nextText: " ",
      prevText: " ",
    });
  });
})
