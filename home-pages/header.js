$(function () {
  // <li><a href="https://tccp.tesra.cloud" class="newest-active-link">T-CCP社区</a></li>
  let header = `
    <header class="kt-header">
      <div class="h-wp">
        <a class="p-logo" href="/home-pages/home.html"></a>
        <ul class="uy4">
          <li><a class="a-home" href="/home-pages/home.html" enrk="Home">首页</a></li>
          <li><a href="/help" enrk="Product Function">产品功能</a></li>
          <li><a href="/home-pages/data.html"  enrk="Storage">存储空间</a></li>
          <li><a href="/home-pages/data_px/index.html" enrk="Data Security">信息安全</a></li>
          <li><a href="/home-pages/active.html" enrk="Activities" class="newest-active-link">最新活动</a></li>
          <li><a href="https://render.tesra.cloud" enrk="Two brushes">云渲染</a></li>
        </ul>
        <ul class="uy5">
          
          <li class="language" lanview='0'>
            <span>Language</span>
            <img src="/home-pages/imgs/ico_down_arr.png">
            <ul>
              <li lan="cn">简体中文</li>
              <li lan="en">English</li>
            </ul>
          </li>
          
          <li class="i3"><a href="/login" class="xr-btn lo-btn" enrk="Login">登录</a></li>
          <li class="i3"><a href="/register" class="xr-btn rg-btn" enrk="Register">注册</a></li>
          <li class="avator-w">
            <img>
            <ul class="uts">
              <li><a class="user-names" href="javascript:;">-</a></li>
              <li><a href="/console" enrk="Workbench">工作台</a></li>
              <li><a href="/aitrain" enrk="Training platform">训练平台</a></li>
              <li><a href="/deployment" enrk="Reasoning and Deployment">推理部署</a></li>
              <li><a href="/personal" enrk="My profile">我的资料</a></li>
              <li><a href="/finance" enrk="Financial Center">财务管理</a></li>
              <li><a href="/setting" enrk="Settings">设置</a></li>
              <li><a href="javascript:;" id="a_loginout" enrk="Exit">退出</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  `
  let mobileHeader = `
    <div class="flex_box flex_align_sb height_50 pading_lr_15 mune_nav">
      <a href="/home-pages/home.html"><img height="30" src="/home-pages/imgs/data_m/m_logo.png" alt=""></a>
      <div class="menu-w">
        <div class="top-icon-w">
          <i class="icon-menu"></i>
        </div>
      </div>
      <div class="sub-nav-w">
          <ul class="sub-nav">
            <li>
              <a href="/home-pages/home.html" enrk="Home">首页</a>
            </li>
            <li>
              <a href="/home-pages/xiexp/xy.pdf" enrk="Product Function" target="_blank">产品功能</a>
            </li>
            <li>
              <a href="/home-pages/data.html"  enrk="Storage">储存空间</a>
            </li>
            <li>
              <a href="/home-pages/data_px/index.html" enrk="Data Security">信息安全</a>
            </li>
            <li>
              <a id="changeEn">ENGLISH</a>
            </li>
            <li>
              <a id="changeCn">简体中文</a>
            </li>
          </ul>
        </div>
    </div>
  `
let ver = {
  v: (function() {
    let ua = navigator.userAgent
    return {
      isMobile: /(iPhone|iPad|Android|ios)/i.test(ua),
      isAndroid: /(Android|Adr)/i.test(ua),
      isIOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(ua),
      isWx: /micromessenger/i.test(ua),
      isQQ: /MQQBrowser/i.test(ua),
    }
  })(),
}
function changeLan(type){
  if( parseInt(type) === 0){
    localStorage.setItem("curLanguage", "en")
  } else {
    localStorage.setItem("curLanguage", "cn")
  }
}
if (ver.v.isMobile){
  $('body .m_page .mune_nav').remove()
  $('body').prepend(mobileHeader)
  $("#changeEn").click(function(){
    localStorage.setItem("curLanguage", "en")
    location.reload()
  })
  $("#changeCn").click(function(){
    localStorage.setItem("curLanguage", "cn")
    location.reload()
  })
  $("#wrapper").before(`<div class="height_50"></div>`)
  $(".menu-w").click(function() {
    $(this).hasClass("on") ? $(this).removeClass("on") : $(this).addClass("on")
    $(this).hasClass("on") ? $(".sub-nav-w").css("display", "block") : $(".sub-nav-w").css("display", "none")
  })
  // 给导航添加active
  $('.sub-nav li a').each(function () {
    let path = location.pathname.replace(/index\.html/, '')
    let tis = $(this)
    let href = tis.attr('href')
    if (href === path && path !== '/') {
      tis.addClass('on')
    }
    if (path === '/') {
      $('.a-home').addClass('on')
    }
  })
}
  if (window.outerWidth < 820) {
    $('body').append('<script src="/home-pages/en.js">\<\/script>')
    return
  }
  let toTop=`<div class="to-top" style="opacity: 1;"></div>`
    $('body').prepend(header).append(toTop)
    $(".to-top").click(function(){
      $('html,body').animate({scrollTop: 0}, 250);
      return false;
    })
    function isTop(){
      let t = $(document).scrollTop()
      if(t > 300){
        $(".to-top").css("display","block")
      }else{
        $(".to-top").css("display","none")
      }
    }
    isTop()
    $(document).scroll(function(e) {
      isTop()
    })
    let lan = localStorage.getItem("curLanguage") 
    if(lan === 'en'){
      $(".uy4 li").addClass('en-li')
    }
    $(".uy5>li.language ul li[lan="+ lan +"]").addClass("active")
    $('.language').click(function(){
      let isShow = $(this).attr("lanview") === '1'
      if(isShow){
        $(this).find("ul").fadeOut(100)
        $(this).attr("lanview", 0)
      } else {
        $(this).find("ul").fadeIn(100)
        $(this).attr("lanview", 1)
      }
    })
    $('.language ul').click(function(e){
      let evt = event || e
      evt.stopPropagation()
    })
    $('.language ul li').click(function(){
      localStorage.setItem("curLanguage", $(this).attr("lan"))
      location.reload()
    })
    $('body').append('<script src="/home-pages/feedback.js">\<\/script>')
    $('body').append('<script src="/home-pages/en.js">\<\/script>')
    window.axios || $('body').append('<script src="https://lib.baomitu.com/axios/0.19.0-beta.1/axios.min.js">\<\/script>');

    let lgn = localStorage.getItem('isLogin')
    let time = lgn && lgn.replace(/^true\|/, '')
    let now = Date.now() / 1e3
    var tk = JSON.parse(Cookies.get('token') || '{}');
    // if已登录
    if (time - now > 0) {
      $('.uy5').addClass('on')
      if(!localStorage.getItem("username"))
        setTimeout(async () => {
          let userName = ''
          await axios({
            url: '/api/user/findUser',
            method: 'POST',
            headers: {
              version: 1,
              device: 1,
              Authorization: tk.access_token ? tk.access_token : '',
              RefreshToken: tk.refresh_token ? tk.refresh_token : '',
              ['Accept-Language']: localStorage.getItem("curLanguage") === "en" ? 'en-US' : 'zh-CN'
            }
          })
          .then(res => {
            if (res.data.code === 200) {
              let data = res.data.payload
              userName = data.username
            }
          })
          axios({
              url: '/api/user/selectUserMeans',
              method: 'POST',
              headers: {
                version: 1,
                device: 1,
                Authorization: tk.access_token ? tk.access_token : '',
                RefreshToken: tk.refresh_token ? tk.refresh_token : '',
                ['Accept-Language']: localStorage.getItem("curLanguage") === "en" ? 'en-US' : 'zh-CN'
              }
            })
            .then(res => {
              try {
                if (res.data.code === 200) {
                  let data = res.data.payload
                  if(data && res.data.payload.image){
                    $('.avator-w').css('background-image', `url(/ipfs/${res.data.payload.image})`)
                  }
                  if (data && data.name) {
                    $('.user-names').text(data.name)
                  }else {
                    $('.user-names').text(userName)
                  }
                }
              } catch (error) {
                console.log(error)
              }
            })
        }, 800)
      else
        $('.user-names').text(localStorage.getItem("username"))
      if(localStorage.getItem('head_img')){
        $('.uy5 .avator-w > img').attr("src", localStorage.getItem('head_img')).css('display','block')
      }

      // $(".newest-active-link").css("display","none")
    } else {
      // $(".newest-active-link").css("display","inline")
    }

    // 给导航添加active
    $('.kt-header .uy4 a').each(function () {
      let path = location.pathname.replace(/index\.html/, '')
      let tis = $(this)
      let href = tis.attr('href').replace('index.html', '')
      if (href === path && path !== '/') {
        tis.addClass('on')
      }
      if (path === '/') {
        $('.a-home').addClass('on')
      }
    })

    // 退出登录
    $('body').on('click', '#a_loginout', function () {
      localStorage.setItem('isLogin', 'false')
      $('.uy5').removeClass('on')
    })


    // 点击logo跳转到首页
    $('.p-logo').on('click', function () {
      location.href = '/'
    })

    $('#cacl').mouseover(function (e) {
      $(this).children('ul').css("display", "block")
    }).mouseout(function () {
      $(this).children('ul').css("display", "none")
    })
})