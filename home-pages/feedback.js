let dom = `<div style="display:none;position: fixed;height:100vh;width: 100%;background: rgba(0,0,0,.3);z-index: 11;top:0;left:0;" id="feedback-window">
    <div id="feed-main" style="margin: 0 auto;position: relative;width:732px;outline: none;top: 100px;background:#fff;border-radius:5px;">
      <div style="position:relative;height:50px;width:100%;padding:0 16px;line-height:50px;font-size:14px;font-weight:bold;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom: 1px solid #e8eaec;" enrk="Feedback">建议反馈
        <img style="position:absolute;height:16px;width:16px;top:17px;right:33px;cursor: pointer;" id="feed-close" src="/home-pages/imgs/ic_close.png">
      </div>
      <div style="width:100%;height:446px;padding:16px;">
        <textarea enrk="Your suggestion is the driving force for our growth" placeholder="您的建议是我们成长的动力……" style="margin: 0 auto;display: block;width: 672px;height: 410px;resize: none;padding: 20px;font-size: 14px;border: 1px solid #E6E6E6;border-radius: 4px;" id="feedback-content"></textarea>
      </div>
      <div style="width:100%;height:88px;padding:12px;padding-bottom:32px;display:flex;justify-content: center;">
        <div style="height: 100%;width: 120px;border-radius: 4px;text-align: center;outline: none;font-size: 14px;margin: 0 20px;cursor: pointer;color: #666;background: #fff;border: 1px solid #E3EBF3;line-height:40px;" id="feedback-cancel" enrk="Cancel">取消</div>
        <div style="height: 100%;width: 120px;border-radius: 4px;text-align: center;outline: none;font-size: 14px;margin: 0 20px;cursor: pointer;color: #fff;background: #e6e6e6;line-height:40px;transition: background .25s;" id="feedback-info" enrk="Feedback">反馈</div>
      </div>
    </div>
    <div id="feed-ok" style="display:none;margin:0 auto; position:relative; width:468px; outline:none; top:100px; background:#fff; border-radius:5px;text-align: center;">
      <div style="position: relative;padding: 16px;font-size: 12px;line-height: 1.5;">
        <img src="/home-pages/imgs/feedback_ok.png" style="display: initial;margin-top: 65px;margin-bottom: 15px;">
        <p style="font-size: 16px;color: #152549;" enrk="Feedback sent successfully">反馈成功</p>
        <p style="font-size: 12px;color: #878d9b;" enrk="Thanks for your feedback, we will try our best to bring you better service experience.">感谢您的反馈，我们会努力给您带来更好的服务体验。</p>
      </div>
      <div style="padding: 12px 18px 12px 18px;text-align: right;">
        <div style="width: 320px;cursor: pointer;margin: 0 auto;height: 40px;text-align: center;line-height: 40px;color: #fff;border-radius: 4px;background: #389CFA;-webkit-transition: background 1s;transition: background 1s;margin-bottom: 44px;" id="confirm" enrk="Confirm">确定</div>
      </div>
    </div>
  </div>`;
(async () => {
  let key = false;
  await $("body").append(dom)
  $("#feedback").click(function () {
    $("#feedback-window").fadeIn(300)
  })
  $("#feedback-window,#feed-close,#feedback-cancel").click(function () {
    $("#feedback-window").fadeOut(300)
  })
  $("#confirm").click(function () {
    $("#feedback-window").fadeOut(300, () => {
      $("#feed-main").css("display", "block")
      $("#feed-ok").css("display", "none")
    })
  })
  $("#feed-main").click(function (e) {
    let evt = event || e
    evt.stopPropagation()
  })
  $("#feedback-content").on("input", function () {
    if (this.value !== "") {
      key = true
      $("#feedback-info").css("background", "#389cfa")
    } else {
      key = false
      $("#feedback-info").css("background", "#e6e6e6")
    }
  })
  $("#feedback-info").click(async () => {
    let contentTxt = $("#feedback-content").val()
    if (!key)
      return false
    let res = await axios({
        url: '/api/user/addFeedback?content=' + contentTxt,
        method: 'GET',
        headers: {
          version: 1,
          device: 1,
          'Accept-Language':this.isEn ? 'en-US' : 'zh-CN'
        }
      })
      .then(res => {
        if (res.data.code === 200) {
          $("#feedback-content").val("")
          key = false
          $("#feedback-info").css("background", "#e6e6e6")
          $("#feed-main").css("display", "none")
          $("#feed-ok").css("display", "block")
        } else if (res.data.code === 501) { 
          alert("反馈的信息不能为空")
        } else {
          alert(res.data.reason || "反馈错误，" + "错误代码：" + res.data.code)
        }
      })
  })
})()