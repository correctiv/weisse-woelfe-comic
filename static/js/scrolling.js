(function($){
  var viewport = $(window);
  // var panels = $('.panellist__panel');
  var panels = $('.panellist__caption, .panellist__panel');
  panels.addClass('-hidden');

  viewport.scroll(function(e) {
    var scrollPosition = viewport.scrollTop() + viewport.height();

    panels.each(function() {
      var panel = $(this);

      if (scrollPosition > panel.offset().top) {
        panel.removeClass('-hidden');
      }
    });
  });

}(jQuery));


