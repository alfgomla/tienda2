jQuery(document).ready(listo);

function listo()
{
    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-xmark");   
        
    });

    jQuery("header .container nav a").click(function(){
        jQuery(".hamb i").removeClass("fa-xmark");
        jQuery("header .container nav").toggleClass("open");
        var dev = jQuery(this).attr("href");
        jQuery("html, body").animate({
            scrollTop: jQuery(dev).offset().top - 200
        }, 1000);
    });

    

}