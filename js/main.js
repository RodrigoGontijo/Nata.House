//This one executes when the DOM is ready to be manipulated
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['section-title', 'section-about', 'section-services', 'section-people', 'section-contact'],
        menu: '#sidenav',
        loopBottom: true,
    });

    //Title header transition
    $('.layout-fade-in-down').addClass("layout-fade-in-down-complete");
    $('.layout-fade-in-down').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
      $('.layout-toggle-color').addClass("text-primary");
    });
});
