var heightwap;
var widthwap;
var linkfooter;
var heighttop;
var heightbt_top;
var imgcarousel;

function popup(){
    jQuery('.popup').show();
    jQuery('body').append('<div class="bgover" ></div>');
    jQuery('.bgover').css({'height': jQuery(document).height()}).show();
    jQuery('.close,.bgover').click(function(){
        jQuery('.bgover').remove();
        jQuery('.popup').hide();
        
        
    })
}

$('.popup_login').click(function () {
    popup();
});

$('.the_game li').click(function(){
    $('.the_game li').removeClass('active');
    $(this).addClass('active');

    var productID = $(this).attr('product');
    $("#card_type").val(productID);
    if (productID == "ATM") {
        $('.card-payment').addClass('hidden');
        $('.atm-payment').removeClass('hidden');
        $('.bank-text').text('ATM');
        $('.payment-method').text('ATM NỘI ĐỊA');
    } else if (productID == "AIRPAY") {
        $('.card-payment').addClass('hidden');
        $('.atm-payment').removeClass('hidden');
        $('.bank-text').text('AIRPAY');
        $('.payment-method').text('AIRPAY');
    } else {
        $('.card-payment').removeClass('hidden');
        $('.atm-payment').addClass('hidden');
        $('.bank-text').text('NẠP THẺ');
    }
});

$('.money-list li a').click(function () {
    $('.money-list li a').removeClass('active');
    $(this).addClass('active');
    //Add preview
    $('.history-list .game-value').text($(this).children('span.col2').text());
    $('.history-list .vnd-price').text($(this).children('span.col1').text())
});


jQuery(document).ready(function() {
    heightwap = jQuery(window).height();
    widthwap = jQuery(window).width();
    
    // Fancy box

    jQuery('.owl-slide').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsiveClass: true

    });
    
    if(jQuery('select').length > 0){
       jQuery('select').selectric(); 
    }
    
    // popup();
})

jQuery(window).resize(function() {
    
    
})

jQuery(window).load(function() {
    
    
    
   
    
});
