<template>
  <div>
    <yd-navbar title="完善审核人信息" bgcolor="#789CF8" color="#FFFFFF" :fixed="isFixed">
      <router-link  slot="left" to="/certification">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="content" >
      <div class="loopHead">
        <div class="loopHeadP">姓名</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.shuiwu" placeholder="请填写姓名">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">证件类型</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.organizationDept" placeholder="请填写证件类型">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">证件号</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.organization" placeholder="请填写证件号">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">有效期限</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.registerAddress" placeholder="请填写有效期限">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">邮箱</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.mail" placeholder="请填写邮箱" @blur="checkMail">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">上传附件</div>
        <div class="loopHeadM">
        </div>
      </div>
      <div class="border">
        <div class="filediv">
          <img src="../../../../../../assets/iconImg/upload.png" v-if=" filesa.length==0">
          <img id="myImg" style="width: auto;height: 100%" v-if=" filesa.length!=0">
          <a class="file" @change="changeImg($event)" id="mya" >
            <input type="file" name="" id="filea" accept="image/*" multiple="multiple" class="selectFile">
          </a>
        </div>
      </div>
      <div class="footer"></div>
    </div >
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        isFixed:true,
        userData:{},
        filesa:[]
      }
    },
    created() {

    },
    mounted() {

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
              console.log(vm.filesa)
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
                console.log( _this.imgArra);
                document.getElementById('myImg').setAttribute('src',_this.imgArra[0])
              }
            }

            if(dd<files.length-1){
              dd++;
            }else{
              clearInterval(timer);
            }
          },1000)
        }




      },
      checkMail(){
        var mailTest=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!mailTest.test(this.userData.mail)) {
          this.userData.mail=''
          this.$dialog.notify({
            mes: '你输入的邮箱格式有误,请重新输入!',
            timeout: 3000,
            callback: () => {
            }
          });
        }
      }
    }

  }
</script>
<style>
  .yd-navbar-item span,i{
    color: white !important;
  }
  .yd-navbar{
    border-bottom: none;
  }
  .yd-navbar:after{
    height:0;
  }
  #companyInfo .head{
    /*background: linear-gradient(left, #789CF8,#4363EE);*/
    background-color:#789CF8 ;
    height:1.24rem ;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item1{
    width: 2.78rem;
    height: 0.68rem;
    font-size: 0.28rem;
    background-color: #789CF8;
    color: white;
    text-align: center;
    line-height: 0.68rem;
    border: 1px solid white;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .active{
    background-color: white !important;
    color: black !important;
  }
  .item2{
    width: 2.78rem;
    height: 0.68rem;
    font-size: 0.28rem;
    background-color: #789CF8;
    color: white;
    text-align: center;
    line-height: 0.68rem;
    border: 1px solid white;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .loopHead{
    background-color: white;
    min-height: 50px;

    display: flex;
    /*border-bottom: solid 1px #eeeeee*/
  }
  .loopHeadP{
    color: #000000;
    font-family: 微软雅黑;
    font-size: 14px;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.34rem
  }
  ::-webkit-scrollbar{
    display:none;
  }
  .loopHeadM{
    color: #666666;
    font-family:  微软雅黑;
    font-size: 14px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:0.34rem
  }
  .content {
    position: absolute;
    top:1rem;
    margin-top: 0.2rem;
    width: 100%;
  }
  #app .fillInfoInput{
    width: 100%;
    border: none;
    text-align: end;
    background-color: white;
    height: 60%;
    color: #666666;
    outline:none
  }
  .border{
    width: 100%;
    height: 2.2rem;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .filediv{
    background-color: #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.8rem;
    height: 100%;
    border:1px dashed #cccccc;
    position: relative;
  }
  .file {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: 0;
  }
  .selectFile{
    width: 100%;
    height: 100%;
  }
  .footer{
    width:100%;
    height: 2.64rem;
  }
  .footer1{
    width:100%;
    height: 1.64rem;
  }
</style>




