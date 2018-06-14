$('#checkIn').dateDropper();
$('#checkOut').dateDropper();
$('#banner').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  items:1,
  dots:false,
  navText: ["<img src='assets/images/arrow-left.png'>","<img src='assets/images/arrow-right.png'>"]
});
$('#locations').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      items:1,
      dots:true
  });
$('#testimonial').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      items:1,
      dots:true
  });

  $('.collapseMe').click(function(){
      $('.check-availability').slideToggle('500');
      $(this).find('i').toggleClass('fa-chevron-up fa-chevron-down')
  });

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("header").addClass("sticky");
    }else{
        $("header").removeClass("sticky");
    }
}); //missing );