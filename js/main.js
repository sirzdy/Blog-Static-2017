$(".searchbtn").on("click",function () {
    console.log(this);
    var word=$(this).prev().attr("for");
    var keywords=$(this).prev().val();
    if (word=="blog"){
        if (keywords=="") {
            window.location.href = "http://www.zhangdanyang.com/";
        }else{
            window.location.href = "http://www.zhangdanyang.com/?s="+keywords;
        }
    }
    if (word=="baidu"){
        window.location.href = "https://www.baidu.com/s?wd="+keywords;
    }
    if (word=="google"){
        window.location.href = "https://www.google.com/#q="+keywords;
    }
});
$(".searchinput").on("keydown",function () {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var word=$(this).attr("for");
    var keywords=$(this).val();
    console.log(e.keyCode);
    if(e && e.keyCode==27){ // 按 Esc
        $(this).val("");
    }if(e && e.keyCode==13){ // enter 键
        //ctrl+enter
        /*if (e.ctrlKey||e.metaKey) {
            $(".baidu-result").attr("src","https://www.baidu.com/s?wd="+keywords).show();
            $(".google-result").attr("src","http://www.zhangdanyang.com/?s="+keywords).show();
            return;
        }*/
        if (word=="blog"){
            if (keywords=="") {
                window.location.href = "http://www.zhangdanyang.com/";
            }else{
                window.location.href = "http://www.zhangdanyang.com/?s="+keywords;
            }
        }
        if (word=="baidu"){
            window.location.href = "https://www.baidu.com/s?wd="+keywords;
        }
        if (word=="google"){
            window.location.href = "https://www.google.com/#q="+keywords+"&output=embed";
        }

    }
});
$(".radio img").on("click",function () {
    if ($(".radio").css("left")=="0px"){
        $(".radio").css("left","-330px");
    }else {
        $(".radio").css("left","0px");
    }
});
$("#btnPaperResume").on("click",function () {
    $("#paperResume").toggle();
});

$("input[for='blog']").focus();

$(function() {
    $(".element").typed({
        strings: ["喜欢这样的一句话，于是乎很深沉：<br /><strong>既然选择了远方，便只顾风雨兼程。</strong>", "也喜欢这样的一句话，于是乎很呆萌：<br /><em>困难像弹簧，看你强不强。<br />你强它就弱，你弱它就强。</em>", "<small>你好，我就是我，不一样的烟火。</small><br />我是  <strong>张Sir</strong>."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 100,
        // backspacing speed
        backSpeed: 0,
        // shuffle the strings
        shuffle: false,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });
});