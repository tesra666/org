
;(function () {
  let obj = [
    {
      src: '/',
      title: 'TESRA超算网络 - 构建人工智能超级大脑',
    },
    {
      src: '/home-pages/home.html',
      title: 'TESRA超算网络 - 构建人工智能超级大脑',
    },
    {
      src: '/home-pages/data.html',
      title: 'TESRA超算网络 - 星际存储，岂止于大',
    },
    {
      src: '/home-pages/data_px/',
      title: 'TESRA超算网络 - 应对信息泄漏、网络攻击、系统漏洞等问题，从网络、主机、系统、 应用及数据等多个角度出发，提供高效、安全、可靠的安全保障',
    },
  ]
  let path = location.pathname.replace(/index\.html/, '')
  for (let i in obj) {
    if (path === obj[i].src) {
      document.title = obj[i].title
    }
  }
})();

$(function() {
  function getLang() {
    return localStorage.getItem('curLanguage')
  }
  function setLang(str) {
    localStorage.setItem('curLanguage', str)
  }
  
  // 初始化语言
  let params = new URLSearchParams(location.search)
  let isSetEn = params.get('lang') === 'en' && getLang() !== 'en'
  let isSetCn = params.get('lang') === 'cn' && getLang() !== 'cn'
  if (isSetEn) {
    setLang('en')
    location.reload()
  } else if (isSetCn) {
    setLang('cn')
    location.reload()
  }
  $('.flex_box a, .footer a').each(function() {
    let tis = $(this)
    let text = tis.text()
    if (text === 'TCCP') {
      tis.hide()
    }
  })
  $('html').append(`<script src="https://s9.cnzz.com/z_stat.php?id=1278269250&web_id=1278269250">\</script>`)
})
