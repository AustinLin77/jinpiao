<template>
  <yd-layout >
    <yd-navbar title="人脸识别"  bgcolor="#789CF8" color="#FFFFFF">
      <div  slot="left"  @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
    </yd-navbar>
    <div>

      <div class="actiontest">
        执行动作：<span v-for="i  in actionarr">{{actiontest[i]}}</span>
      </div>
      <div class="but">
        <div class="shibie">
          <div>
            进行拍摄识别
          </div>
        </div>
        <input type="file" id='video' accept="video/*" name='video' @change="changefile" capture="user">
      </div>
      <div class="shiimg" v-show="showimg">
        <img src="../../assets/shibie.gif">
        <div style="position: absolute;display: flex;justify-content: center;align-items: center;color: #888">正在识别中...</div>
      </div>
      <div class="mess" v-show="renzhengpage">
        <div class="signready" v-if="mess == 'Success'">
          <div>
            <yd-icon name="shield"  color="#137fe4" size="1.1rem"></yd-icon>
          </div>
          <div class="signreadyTxt" >认证成功</div>
          <div class="subtxt">
            <p>您已认证成功，请继续您的其他操作</p>
            <!--<p>展示给签到工作人员确认，谢谢</p>-->
          </div>
        </div>
        <div class="signready" v-else="">
          <div>
            <yd-icon name="warn"  color="#137fe4" size="1.1rem"></yd-icon>
          </div>
          <div class="signreadyTxt" >认证失败</div>
          <div class="subtxt">
            <p>您已认证失败，请 <span style="color: #e6a200" @click="refash">重新认证</span></p>
            <!--<p>展示给签到工作人员确认，谢谢</p>-->
          </div>
        </div>
      </div>
    </div>
  </yd-layout>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        userAvatar:"",
        imgbase:null,
        showimg:false,
        actiontest:{1:'张张嘴', 2:'眨眨眼'},
        actionarr:[1,2],
        renzhengpage:false,
        mess:'error'
      }
    },
    watch:{

    },
    created:function () {
            this.userAvatar =this.$imgpath+localStorage.getItem('userAvatar');
      let vm = this;
      this.userAvatar = "https://img-blog.csdn.net/20180710160224173?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvbmd6aG91ZmVuZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70";
      if(!this.userAvatar){
        this.$dialog.confirm({
          title: '错误信息',
          mes: '您还未上传头像，请上传本人图像',
          opts: [
            {
              txt: '取消',
              color: false,
              callback: () => {
//                        this.$dialog.toast({mes: '你点了取消', timeout: 1000});
                this.$router.go(-1);
              }
            },
//                    {
//                      txt: '犹豫一下',
//                      stay: true,
//                      color: '#CCC',
//                      callback: () => {
//                        this.$dialog.toast({mes: '别犹豫了', timeout: 1000});
//                      }
//                    },
            {
              txt: '确定',
              color: '#086',
              callback: () => {
//                        this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                this.$router.replace({path:"/changeHeadPic"});
              }
            }
          ]
        });
      }else {
        this.getBase64(this.userAvatar, function(base64Img){
          //转化后的base64
       console.log(base64Img)
        });


        vm.getaction();
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      },
      refash(){

      },
      getaction:function () {
        let vm = this;
        $.ajax({
          type:"get",
          url:'http://172.30.128.35:8888/dongzuo',
          dataType:"json",
          data:{},
          success:function(data){
            console.log(data);
            vm.actionarr = data.ActionSequence.split(',');
          },
          error:function () {

          },
          complete:function () {
          }
        });
      },
      getBase64(url, callback, outputFormat){
          var canvas = document.createElement('CANVAS'),
            ctx = canvas.getContext('2d'),
            img = new Image;
          img.crossOrigin = 'Anonymous';
          img.onload = function(){
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img,0,0);
            var dataURL = canvas.toDataURL(outputFormat || 'image/png');
            callback.call(this, dataURL);
            canvas = null;
          };
          img.src = url;
      },

      changefile(){
        console.log(this.videodfile);
        var vm = this;
        vm.videodata = $('#video').get(0).files[0];
        vm.postfile();
      },
      postfile:function () {
        this.showimg = true;
        var vm = this;
        var formdata = new FormData()
        formdata.append('video',vm.videodata);
        formdata.append('pic',vm.imgbase);
        formdata.append('ValidateData',vm.actionarr.join(","));
        $.ajax({
          headers: {'X-CSRF-TOKEN': $("meta[name='x-csrf-token']").attr('content')},
          type: "post",
          url: 'http://172.30.128.35:8888/check',
          data: formdata,
          cache: false,
          contentType: false,
          processData: false,
          success: function (data) {
            console.log(data);
            vm.renzhengpage = true;
            var data = JSON.parse(data);
            vm.mess = data["Result"];
            vm.messtext = data.Description;
          },
          error: function () {
            vm.renzhengpage = true;
          },
          complete: function () {
            vm.renzhengpage = true;
          }
        });
      }
    }
  }
</script>

<style scoped>
  .yd-navbar-item span,i{
    color: white !important;
  }
  .actiontest{
    width: 100%;
    height: 150px;
    text-align: center;
    line-height: 150px;
    font-size: 0.5rem;
  }
  .actiontest>span:first-child:before{
    content: '先';
    font-size: 0.4rem;
  }
  .actiontest>span:first-child:after{
    content: '再';
    font-size: 0.4rem;
  }
  .but{
    height: 50px;
    position: relative;
  }
  .but input{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 999;
  }
  .shibie{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 15px;
  }
  .shibie>div{
    background-color: #137fe4;
    color: #fff;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 4px;
    font-size: 0.32rem;
  }
  .shiimg{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
  .shiimg img{
    width: 60%;
    position: relative;
  }
  .mess{
    position: absolute;
    top:0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
  }
  .signready{
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 0.2rem;
    padding-top: 0.4rem;
    padding-left: 0.4rem;
    padding-bottom: 0.32rem;
    padding-right: 0.32rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .signready>div{
    text-align: center;
  }
  .signreadyTxt{
    font-size: 0.4rem;
    font-weight: 600;
    color: #137fe4;
    margin-bottom: 0.1rem;
  }
  .subtxt{
    font-size: 0.28rem;
    color: #888;
  }
</style>
