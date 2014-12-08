/* jshint devel:true */
$(document).foundation();

(function($){
  smoothScroll();
  viewMore();
  updateName();
  googleAnalyticsEvents();

  //GA Events
  function googleAnalyticsEvents() {

    //follow
    $("[data-event='twitter-follow']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Follow',
        'eventAction' : 'clicked',
        'eventLabel' : 'Follow @iamjohnellison',
        'eventValue' : 2
      });
    });

    //contact button-video
    $("[data-event='contact-button-video']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Contact',
        'eventAction' : 'sent',
        'eventLabel' : 'Send Me an Email (video)',
        'eventValue' : 400
      });
    });

    //contact button
    $("[data-event='contact-button']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Contact',
        'eventAction' : 'sent',
        'eventLabel' : 'Send Me an Email',
        'eventValue' : 400
      });
    });

    //contact form
    $("[data-event='contact-form']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Contact',
        'eventAction' : 'sent',
        'eventLabel' : 'Send Message',
        'eventValue' : 400
      });
    });

    //contact from services
    $("[data-event='service-contact-button']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Contact',
        'eventAction' : 'sent',
        'eventLabel' : 'services.cta',
        'eventValue' : 400
      });
    });

    //subscribe
    $("[data-event='subscribe']").on('click', function(){
      ga('send', {
        'hitType' : 'event',
        'eventCategory' : 'Subscribe',
        'eventAction' : 'sent',
        'eventLabel' : 'Get Updates',
        'eventValue' : 10
      });
    });
  }

  function updateName() {
    // create name input variable
    var $name = $("[name='name']");
    // create nameFromAbove variable
    var $fromName = $("#name-from-above");
    //when name input variable changes, update nameFrom Above
    $name.change( function() {
      // alert($name.val());
      $fromName.text($name.val());
    });
  }

  //view-more reveal text-concealed
  function viewMore(){
    $('.view-more').click(function(e){
      if(e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      var $this = $(this);

      $this.next('.text-concealed').slideToggle(function(){
        var $viewToggle = $this.children('.view-more-link').children('.view-toggle');

        if($viewToggle.text() == 'Less' ) {
          $viewToggle.text('More');
        } else $viewToggle.text('Less');
        
      });
      
    });
  }

  //scrollTo #hash animations
  function smoothScroll(){
    $('a[href^="#"]').on('click',function (e) {
      //check for event object
      if (!e) {
        e = window.event;
      }

      //prevent default for both ie old and new
      if(e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }

      //grab the anchor target and wrap in jQuery object
      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
    });
  }
})(jQuery);

