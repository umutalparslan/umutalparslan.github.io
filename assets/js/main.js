$(document).ready(function() {
	
    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);


    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-menu', offset: 100});
    
    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
		
	});
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });
    var iosVL = document.querySelector(".ios-vl");
    var iosEM = document.querySelector(".ios-em");
    var andVL = document.querySelector(".and-vl");
    var andEM = document.querySelector(".and-em");
    function getIOSVL(){
            $.ajax({
                url: 'https://api.github.com/repos/relateddigital/visilabs-ios/releases/latest',
                success: function(data){
                    iosVL.innerHTML = "<strong>Current Version:</strong> " + data.tag_name;
                }
        });
    }
    function getANDVL(){
        $.ajax({
            url: 'https://api.github.com/repos/relateddigital/visilabs-android/releases/latest',
            success: function(data){
                andVL.innerHTML = "<strong>Current Version:</strong> " + data.tag_name;
            }
    });
}
function getIOSEM(){
    $.ajax({
        url: 'https://api.github.com/repos/relateddigital/euromessage-ios/releases/latest',
        success: function(data){
            iosEM.innerHTML = "<strong>Current Version:</strong> " + data.tag_name;
        }
});
}
function getANDEM(){
$.ajax({
    url: 'https://api.github.com/repos/relateddigital/euromessage-android/releases/latest',
    success: function(data){
        andEM.innerHTML = "<strong>Current Version:</strong> " + data.tag_name;
    }
});
}
    getIOSVL();
    getANDVL();
    getIOSEM();
    getANDEM();
});