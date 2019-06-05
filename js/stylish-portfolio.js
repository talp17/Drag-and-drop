(function($) {
  var numOfQues = 4;
    for(var i=0;i<numOfQues;i++){
      $("#ques" + (i+1)).click(function(){
        emptycontact();
        let id = this.id.charAt(4);
        $(".modal-title").append(quesTitle[id-1]);
        $(".modal-question").append(quesText[id-1]);
        for(let j=1;j<=3;j++){
          $("#drop" +j).append(quesDropTitle[j-1]);
          $("#drop" +j).append(quesLi[id-1][j-1]);
        }
        $('#quesModal').modal('toggle');
          quesScript(id);
      });
    }

    
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  function emptycontact(){
    $("#drop1").empty();
    $("#drop2").empty();
    $("#drop3").empty();
    $(".modal-title").empty();
    $(".modal-question").empty();
  }

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict



$(".fa-info-circle").click(function(){
  $('#myModal').modal('toggle')
});




