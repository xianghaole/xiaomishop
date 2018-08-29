$(function(){
    //alert($(document).width());
    $('.bottom').width($('body').width()).css('left',-$('#nav .menu').offset().left);
    $('#nav .menu').hover(function(){
        $(this).children('.bottom').stop().animate({height:229},300).addClass('current');
    },function(){
        $(this).children('.bottom').stop().animate({height:0},300,function(){
            $(this).removeClass('current');
        });
    });
    //切换效果
        $('#nav .menu .top a').mouseenter(function(){

            var index = $(this).index();
            $('#nav .menu .bottom ul li').eq(index).show().siblings('li').hide();
        });
    //小米闪购区切换效果
    //$('#text ul li button').click(function(){
    //    alert(1);
    //    console.log(1);
    //    //$('#m_show .mmdd_box ul').hide().siblings('ul').show();
    //    var index = $(this).index();
    //    $('#m_show .mmdd_box ul').eq(index).hide().siblings('ul').show();
    //
    //});
});

