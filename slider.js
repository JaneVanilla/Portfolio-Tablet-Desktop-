$(document).ready(function() {
  $('#nav-btn').click(function() {
    $("#nav-list").slideToggle();
  });
  $('#crowdme-slider').owlCarousel({
    singleItem: true,
    loop:true,
    dots:false,
    nav: true,
    navText: ['<i class="fa fa-angle-left nav-btn" aria-hidden="true"></i>','<i class="fa fa-angle-right nav-btn" aria-hidden="true"></i>'],
    items: 1,
    margin: 0,
    loop: true,
    baseClass: 'owl-carousel',
    transitionStyle: 'fade',
    autoHeight: true,
  });

});