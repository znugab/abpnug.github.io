$(document).ready(function() {

    var toggleAffix = function(affixElement, scrollElement, wrapper) {
  
        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;
        
        if (scrollElement.scrollTop() >= (top - height)){
            // wrapper.height(height);
            affixElement.addClass("affix");
        }
        else {
            affixElement.removeClass("affix");
        }
      
    };
  

    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');
        
        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });
        
        // init
        toggleAffix(ele, $(window), wrapper);
    });
  
});