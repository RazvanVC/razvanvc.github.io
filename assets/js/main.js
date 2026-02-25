jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {


    var printButton = document.getElementById('print-cv');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});