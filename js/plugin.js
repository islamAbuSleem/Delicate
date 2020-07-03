var head = document.getElementById("head");
var ar = ['img/header.jpg','img/header1.jpg','img/header2.jpg'];
var num = 0;
setInterval (function(){

    if(num >= ar.length)
    {
        num = 0;
        head.style.backgroundImage ="url(" + ar[num] + ")";
        num++;
    }
    else{
         head.style.backgroundImage ="url(" + ar[num] + ")";
        num++;
    }


},3000);


setInterval(function(){

    $('.comment .container-fluid > .wrapper:first').delay(3000).fadeOut(1000,function(){
        $(this).removeClass('active').next().addClass('active').fadeIn()
    .end().appendTo('.container-fluid');
    });



},3000);
