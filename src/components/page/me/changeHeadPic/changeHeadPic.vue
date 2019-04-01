<template>
    <div >
      <yd-navbar title="我的" bgcolor="#FFFFFF" color="#030303">
        <router-link  slot="left" to="/me">
          <yd-navbar-back-icon >返回</yd-navbar-back-icon>
        </router-link>
        <yd-button type="primary" slot="right" @click.native="save">保存</yd-button>
      </yd-navbar>
      <div class="card">
        <div style="width: 100%;text-align: center">
          <img :src="photoUrl" class="userPic" id="myImg">
          <div class="myBorder">
            <div class="butBorder">
              <a class="file" @change="changeImg($event)" id="mya" >
                <div   class="changeBut">更改头像</div>
                <input type="file" name="" id="filea" accept="image/*" multiple="multiple">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import img1 from '../../../../assets/iconImg/1.png'
    export default {
        data: function () {
            return {
              photoUrl:img1,
              filesa:[],
              serveUrl:''
            }
        },
        created() {

        },
        mounted() {
          console.log(localStorage.getItem("userAvatar"))
//          this.photoUrl=localStorage.getItem("userAvatar")

        },
        methods: {
          changeImg(e){
              const vm=this;
              var _this = this;
              var imgLimit = 1024;
              var files = e.target.files;
              var image = new Image();
              if(files.length>0){
                var dd = 0;
                var timer = setInterval(function(){
                  if(files.item(dd).type != 'image/png'&&files.item(dd).type != 'image/jpeg'&&files.item(dd).type != 'image/gif'){
                    return false;
                  }
                  if(files.item(dd).size>imgLimit*102400){
                    //to do sth
                  }else{
                    var file=document.getElementById('filea');
                    vm.filesa=file.files[0];
                    console.log(vm.filesa);
                    image.src = window.URL.createObjectURL(files.item(dd));
                    image.onload = function(){
                      // 默认按比例压缩
                      var w = image.width,
                        h = image.height,
                        scale = w / h;
                      w = 200;
                      h = w / scale;
                      // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
                      var quality = 0.7;
                      //生成canvas
                      var canvas = document.createElement('canvas');
                      var ctx = canvas.getContext('2d');
                      // 创建属性节点
                      var anw = document.createAttribute("width");
                      anw.nodeValue = w;
                      var anh = document.createAttribute("height");
                      anh.nodeValue = h;
                      canvas.setAttributeNode(anw);
                      canvas.setAttributeNode(anh);
                      ctx.drawImage(image, 0, 0, w, h);
                      var ext = image.src.substring(image.src.lastIndexOf(".")+1).toLowerCase();//图片格式
                      var base64 = canvas.toDataURL("image/"+ext, quality );
                      console.log(base64);
                      // 回调函数返回base64的值
                      _this.imgArra=[];
                      _this.imgArra.push(base64);
                      console.log( _this.imgArra)
                      document.getElementById('myImg').setAttribute('src',_this.imgArra[0])
                    }
                  }

                  if(dd<files.length-1){
                    dd++;
                  }else{
                    clearInterval(timer);
                  }
                  vm.revise()
                },1000)
              }
          },
          revise(){
            let vm=this;
            var formData = new FormData();
            formData.append('file',vm.filesa);
            $.ajax({
              url: 'https://wmsapi.sunwoda.com/api/app/file?relative=haveValue',
              type: "post",
              data: formData,
              cache: false,
              contentType: false,
              processData: false,
              mimeType: "multipart/form-data",
              success: function (res) {
                let result=JSON.parse(res);
                console.log(result);
                vm.serveUrl=result.data
              },
              error: function () {
              }
            });
          },
          save(){
            let vm = this;
            let url='clcp/app/update/user/'+localStorage.getItem("userId");
            let params={
              "avatar":vm.serveUrl,
              "address": "",
              "email": localStorage.getItem("email"),
              "firstname": localStorage.getItem("firstName"),
              "id": localStorage.getItem("userId"),
              "lastname":  localStorage.getItem("lastName"),
              "password": "",
              "sex": localStorage.getItem("status"),
              "telephone": "",
              "username": localStorage.getItem("username"),
              "workno": "",
          };
            let heads={
              "Content-Type": "application/json",
              "Accept": "application/json",
              "X-TenantId": localStorage.getItem("tenantId"),
              "X-Logined-Sign": localStorage.getItem("username"),
              "Authorization": 'Bearer '+localStorage.getItem("token"),
              "Prefer-Lang": "zh-CN"
            };
            vm.api(vm,heads,'put',url,JSON.stringify(params),function (res) {
              console.log(res);

            });
          }
        }

    }
</script>
<style scoped>
  .file{
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;

  }
  .file input {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    height: 0.5rem;
    width: 1.6rem;
  }
  .myBorder{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.3rem;
  }
  .yd-navbar {
    border-bottom: 1px solid #eeeeee;
  }
  .yd-btn-primary:not(.yd-btn-loading) {
    background-color: #1894F1;
  }
  /*.yd-btn-primary:not(.yd-btn-loading) {*/
    /*background-color: white;*/
  /*}*/
  .card{
    width: 100%;
    height: 2.64rem;
    background-color: white;
    /*box-shadow: 0 0 10px 0 ;*/
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .userPic{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

  }
  .changeBut{
    text-align: center;
    border-radius: 0.4rem;
    width: 1.6rem;
    height: 0.5rem;
    line-height: 0.5rem;
    letter-spacing: 0.1rem;
    text-indent: 0.1rem;
    border: 1px solid #1894F1;
    background-color: white;
    color: #1894F1;
  }
  .butBorder{
    width: 1.6rem;
    height: 0.5rem;
    position: relative;
  }
</style>

