/**
 * Created by Administrator on 2018/10/22.
 */
$(document).ready(function () {
    $('.nav-top li .first-arrow').hide();
    $('.head').load('common/head.html');
    $('.foot').load('common/foot.html');

    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    //接收URL中的参数id
    var type = getUrlParam('type');

    //alert(type);

    var itemIndex =0;
    if(type == ''){
    }else{
        itemIndex = type;
    }
    $(".left-nav .item").eq(itemIndex).addClass('active').siblings('.item').removeClass('active');
    $('.lists').eq(itemIndex).show().siblings('.lists').hide();


    //        左侧导航点击变色
    $('.left-nav li').on('click',function(){
        var $this = $(this);

        itemIndex = $this.index();
        //alert(itemIndex)
        console.log(itemIndex);
        //alert(itemIndex);
        $this.addClass('active').siblings('.item').removeClass('active');
        $('.lists').eq(itemIndex).show().siblings('.lists').hide();

    });
});