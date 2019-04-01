<template>
    <div id="companyInfo" style="overflow: hidden;">
      <!--<div style="position: absolute;top: 0;left: 0;overflow: hidden;width: 100%">-->
        <yd-navbar title="完善公司信息" bgcolor="#789CF8" color="#FFFFFF">
          <router-link  slot="left" to="/certification">
            <yd-navbar-back-icon ></yd-navbar-back-icon>
          </router-link>
        </yd-navbar>
        <div class="head" style="z-index: 9999">
          <div class="item1" @click="isLawyer"  :class="{'active': status==0}">企业法人</div>
          <div class="item2" @click="unLawyer"  :class="{'active': status==1}">非企业法人</div>
        </div>
      <!--</div>-->

      <div class="content" v-if="status==0">
        <div class="loopHead">
          <div class="loopHeadP">税务</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.shuiwu" placeholder="请填写税务">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">组织机构</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.organizationDept" placeholder="请填写组织机构">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">机构</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.organization" placeholder="请填写机构">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">注册地址</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.registerAddress" placeholder="请填写注册地址">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">通讯地址</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.contactAddress" placeholder="请填写通讯地址">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照</div>
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
        <div class="loopHead" style="margin-top: 0.48rem">
          <div class="loopHeadP">开户许可证</div>
          <div class="loopHeadM">
          </div>
        </div>
        <div class="border" >
          <div class="filediv">
            <img src="../../../../../../assets/iconImg/upload.png" v-if=" filesaa.length==0">
            <img id="myImg1" style="width: auto;height: 100%" v-if=" filesaa.length!=0">
            <a class="file" @change="changeImg1($event)" id="myaa" >
              <input type="file" name="" id="fileaa" accept="image/*" multiple="multiple" class="selectFile">
            </a>
          </div>
        </div>
        <div class="footer"></div>
      </div >
      <div class="content" v-if="status==1" >
        <div class="loopHead">
          <div class="loopHeadP">税务</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.shuiwu" placeholder="请填写税务">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">组织机构</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.organizationDept" placeholder="请填写组织机构">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">机构</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.organization" placeholder="请填写机构">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">注册地址</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.registerAddress" placeholder="请填写注册地址">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">通讯地址</div>
          <div class="loopHeadM">
            <input  class="fillInfoInput" v-model="userData.contactAddress" placeholder="请填写通讯地址">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">营业执照</div>
          <div class="loopHeadM">
          </div>
        </div>
        <div class="border">
          <div class="filediv">
            <img src="../../../../../../assets/iconImg/upload.png" v-if=" filesaaa.length==0">
            <img id="myImg2" style="width: auto;height: 100%" v-if=" filesaaa.length!=0">
            <a class="file" @change="changeImg2($event)" id="myaaa" >
              <input type="file" name="" id="fileaaa" accept="image/*" multiple="multiple" class="selectFile">
            </a>
          </div>
        </div>
        <div class="loopHead" style="margin-top: 0.48rem">
          <div class="loopHeadP">开户许可证</div>
          <div class="loopHeadM">
          </div>
        </div>
        <div class="border" >
          <div class="filediv">
            <img src="../../../../../../assets/iconImg/upload.png" v-if=" filesaaaa.length==0">
            <img id="myImg3" style="width: auto;height: 100%" v-if=" filesaaaa.length!=0">
            <a class="file" @change="changeImg3($event)" id="myaaaa" >
              <input type="file" name="" id="fileaaaa" accept="image/*" multiple="multiple" class="selectFile">
            </a>
          </div>
        </div>
        <div class="loopHead" style="margin-top: 0.48rem">
          <div class="loopHeadP">授权书</div>
          <div class="loopHeadM">
          </div>
        </div>
        <div class="border" >
          <div class="filediv">
            <img src="../../../../../../assets/iconImg/upload.png" v-if=" filesaaaaa.length==0">
            <img id="myImg4" style="width: auto;height: 100%" v-if=" filesaaaaa.length!=0">
            <a class="file" @change="changeImg4($event)" id="myaaaaa" >
              <input type="file" name="" id="fileaaaaa" accept="image/*" multiple="multiple" class="selectFile">
            </a>
          </div>
        </div>
        <div class="footer1"></div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              status:0,
              userData:{},
              filesa:[],
              filesaa:[],
              filesaaa:[],
              filesaaaa:[],
              filesaaaaa:[],
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
          isLawyer(){
            this.status=0;
            this.filesa=[];
            this.filesaa=[];
            this.filesaaa=[];
            this.filesaaaa=[];
            this.filesaaaaa=[];
          },
          unLawyer(){
            this.status=1;
            this.filesa=[];
            this.filesaa=[];
            this.filesaaa=[];
            this.filesaaaa=[];
            this.filesaaaaa=[];
          },
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
          changeImg1(e){
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
                  var file=document.getElementById('fileaa');
                  vm.filesaa=file.files[0];
                  console.log(vm.filesaa)
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
                    document.getElementById('myImg1').setAttribute('src',_this.imgArra[0])
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
          changeImg2(e){
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
                  var file=document.getElementById('fileaaa');
                  vm.filesaaa=file.files[0];
                  console.log(vm.filesaaa)
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
                    document.getElementById('myImg2').setAttribute('src',_this.imgArra[0])
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
          changeImg3(e){
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
                  var file=document.getElementById('fileaaaa');
                  vm.filesaaaa=file.files[0];
                  console.log(vm.filesaaaa)
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
                    document.getElementById('myImg3').setAttribute('src',_this.imgArra[0])
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
          changeImg4(e){
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
                  var file=document.getElementById('fileaaaaa');
                  vm.filesaaaaa=file.files[0];
                  console.log(vm.filesaaaaa)
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
                    document.getElementById('myImg4').setAttribute('src',_this.imgArra[0])
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
        }

    }
</script>
<style scoped>
  #companyInfo .yd-navbar-item span,i{
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
  #companyInfo .content{
    position: absolute;
    left: 0;
    top:2.24rem;
    width: 100%;
    height:calc(100% - 1.24rem);
    overflow: scroll;
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

