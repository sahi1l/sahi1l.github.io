var duh;var arrow;
var opensymbol="&#9660;"
var closedsymbol="&#9654;"
$(function(){
    var triggerall=function(btn,boo){
        $(".switch").prop("checked",boo).trigger("click");
        console.log(btn)
        if(btn){
            $(btn).fadeOut(100).fadeIn(100);
        }
    };


    var cno=$("#courseNumber").html();


    $("#toc").append('<div class="courseNumber"><a href="../index.html">'+cno+'</a><br/>Syllabus</div>')
    $("#toc").append("<ul></ul>")
    
    //POPULATE TABLE OF CONTENTS
    $("h3>a,h2>a").each(function(i,el){
        var s=$(this).attr("name");
        var str='<li><a href="#'+s+'">'+s+'</a></li>'
        $("#toc>ul").append(str);
    });

    //ADD COLLAPSE AND EXPAND BUTTONS
    $("#toc").append('<div id="hideall">Collapse</div><div id="showall">Expand</div>')
    $("#showall").click(function(){triggerall(this,false);});
    $("#hideall").click(function(){triggerall(this,true);});
    
    //ADD OPEN/CLOSE SYMBOLS TO EACH H3
    $('h3').prepend('<span class="switch" checked>'+opensymbol+'</span>');
//    $('h3>span').prop("checked",true);
//    if(iphone){$(}
$('.switch').click(function(){
that=$(this);
that.animate({"font-size":"14px"},100).animate({"font-size":"18px"},100);
arrow=$(this).html();
var div=$(this).parent().next();
if(that.prop("checked")){
     div.hide();
     that.html(closedsymbol);
     that.prop("checked",false);
} else {
     div.show();
     that.html(opensymbol);
     that.prop("checked",true);
}
    });
    var iphone=($("#toc").css("display")=="none");
    if(iphone){triggerall(undefined,true);}
});
