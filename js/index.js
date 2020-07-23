$(function () {
  function createHtml(){
    var element = null;
    var sNav = '';
    var sContainer = '';
    var $nav = $('.nav ul');
    var $container = $('.container');
  
    for (var index = 0; index < oData.length; index++) {
       element = oData[index];
      var sTemp = '';
      //  创建导航
      if (index==0) {
        sNav =  '<li class="active">'+
                '  <a href="#menu'+index+'">'+element.title+'</a>'+
                '</li>';
      }else{
        sNav += '<li>' +
                '  <a href="#menu'+index+'">' + element.title + '</a>' +
                '</li>';
      }
      for (var i = 0; i < element.data.length; i++) {
        var oTemp = element.data[i];
        var sDecription = '';
        if (oTemp.decription && oTemp.decription.length>=1) {
          sDecription = oTemp.decription;
        }else{
          sDecription = oTemp.name;
        }
        sTemp +=  '<li class="item">' +
                    '<a target="_blank" href="'+oTemp.link+'" title="'+sDecription+'" >'+oTemp.name+'</a>' +
                  '</li>';
      }
      sContainer += ''+
                    '<div class="page">'+
                    '  <div class="page-title">'+
                    '    <h2 id="menu'+index+'">'+element.title+'</h2>'+
                    '  </div>'+
                    '  <div class="page-container">'+
                    '    <div class="list-container">'+
                    '      <ul class="list clear">'+sTemp+
                    '      </ul>'+
                    '    </div>'+
                    '  </div>'+
                    '</div>';
    }
    $nav.html(sNav);
    $container.html(sContainer);
  }
  if (oData && oData.length>0) {
    createHtml();
    $('.nav ul li').on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  }else{
    alert('没有数据！');
  }
  // 页面加载完毕
  $(window).load(function(){
    // 隐藏进度条
    NProgress.done();
  });
});
