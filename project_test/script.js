/*Change background (I need it in this way)*/
$('#first').css({background:'none'});
$('#first .background').css({backgroundImage: "url('1.jpg')"});

/*Scrolling*/
$(window).scroll(function()
{   var $maxScroll=300;
    var $maxScale=1.3;
    var $x=$(window).scrollTop()/1000+1;
    if($(window).scrollTop()>$maxScroll) $x=$maxScale;
    $('#first .background').css({transform: 'scale('+$x+','+$x+')'})