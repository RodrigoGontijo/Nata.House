//This one executes when the DOM is ready to be manipulated
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:['section-title', 'section-about', 'section-services', 'section-people', 'section-contact'],
        menu: '#sidenav',
        loopBottom: true,

        onLeave: function(index, nextIndex, direction){
            if(nextIndex >1){
                $('.firstpage-logo').addClass('firstpage-logo-section');
            } else {
                $('.firstpage-logo').removeClass('firstpage-logo-section');
            }
        }
    });

    //Title header transition
    $('.layout-fade-in-down').addClass("layout-fade-in-down-complete");
    $('.layout-fade-in-top').addClass("layout-fade-in-top-complete");
    $('.layout-fade-in-top').bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
        $('.layout-toggle-color').addClass("text-primary");
        $('.layout-fade-in-top-text').addClass("layout-fade-in-top-complete");
    });

});

//This one executes when the DOM is ready to be manipulated AND all content
//(images, etc...) are loaded
window.onload = function() {
    $('.splash-screen').addClass("splash-loading-finished");
    console.log("finished loading");
};
