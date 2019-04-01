export default function (vm,heads,gop,url,param,fn) {
  // var hrefStart='http://172.30.128.25:7878/';
  var hrefStart='http://172.30.128.32:7878/';
  url=hrefStart+url;
  $.ajax({
    headers:heads,
    type:gop,
    url:url,
    data:param,
    traditional: true,
    success:fn,
    error:function (res) {
      if(res.statusText=='Unauthorized'||res.statusText=='Bad Request'){
        vm.$dialog.notify({
          mes: "密码错误,请重试",
          timeout: 3000,
          callback: () => {}
        });
      }
      console.log(res)
    },
  });
}
