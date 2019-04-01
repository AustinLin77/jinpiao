<template>
  <div class="login" id="login">
    <div class="welcome">
      欢迎进入金票软件
    </div>
    <div class="content">
      <yd-cell-group style="background-color: white">
        <div class="title">账号</div>
        <yd-input   v-model="form.user"  placeholder="手机号/用户名/邮箱" class="myInput"></yd-input>
        <div class="title">密码</div>
        <yd-input v-model="form.password" type="password" placeholder="请输入密码" class="myInput"></yd-input>
        <div class="forgetPass">忘记密码</div>
        <!--<div class="butcont">-->
          <!--<span >登陆</span>-->
          <!--<span>注册</span>-->
        <!--</div>-->
        <div class="webut" @click="sublogin">
           登录
        </div>
        <div class="regiser">注册</div>
      </yd-cell-group>
      </div>
  </div>
</template>
<script>
  import sha1 from 'node-sha1'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                remberPass:false,
                autulogin:false,
                form:{
                    user:"",
                    password:""
                }
            }
        },
        created:function () {
            let vm = this;
//            this.remberPass = localStorage.getItem("remberPass");
//            console.log(this.remberPass);
//
//            if(localStorage.getItem("usermess")){
//                this.form = JSON.parse(localStorage.getItem("usermess"));
//            }
//            if(vm.remberPass == 'false'){
//                this.form.password = ''
//            }
        },
        methods:{
            notic(mes){
              this.$dialog.notify({
                mes: mes,
                timeout: 3000,
                callback: () => {}
              });
            },
            sublogin () {
              let vm = this;
                if(this.form.user==''||this.form.password==''){
                  this.notic('请填写完整用户名及密码再进行提交 , 谢谢 !');
                }else{
                  let pass=sha1(this.form.password);
                  let url='uaa/oauth/token?username='+vm.form.user+'&password='+pass+'&client_id=lCuDj9Vmjo8eRQgX&grant_type=password&scope=app&client_secret=XRU4z4vcx1JcD5ZUyuccgdGiZle0xlfgmAVgDp8n98o='
                  let params={};
                  let heads={
                    'Content-Type':'x-www-form-urlencod'
                  };
                  vm.api(vm,heads,'post',url,params,function (res) {
                    console.log(res);
                    localStorage.setItem("token",res.access_token);
                    vm.realLogin(res)
                  })
                }
            },
          realLogin(res){
            let vm = this;
            let url='user';
            let params={};
            let heads={
              "Content-Type": "application/json",
              "Accept": "application/json",
              "X-TenantId": "",
              "X-Logined-Sign": "",
              "X-UserId": "",
              "Authorization": 'Bearer '+res.access_token,
              "Prefer-Lang": "zh-CN"
            };
            vm.api(vm,heads,'get',url,params,function (res) {
              console.log(res);
              if(typeof(res.tenantId)=='undefined'){
                 this.notic('无法获取用户个人资料')
              }else{
                localStorage.setItem("username",res.username);
                localStorage.setItem("userId",res.id);
                localStorage.setItem("tenantId",res.tenantId);
                localStorage.setItem("userAvatar",res.avatar);
                localStorage.setItem("email",res.email);
                localStorage.setItem("firstName",res.firstName);
                localStorage.setItem("lastName",res.lastName);
                localStorage.setItem("status",res.status);
                vm.$router.push({path:"main"})
              }
            })
          }


        }
    }
</script>
<style scoped>
  /*.yd-input::-webkit-input-placeholder{*/
    /*color:red;*/
  /*}*/
  /*.yd-input::-moz-placeholder{   !* Mozilla Firefox 19+ *!*/
    /*color:red;*/
  /*}*/
  /*.yd-input:-moz-placeholder{    !* Mozilla Firefox 4 to 18 *!*/
    /*color:red;*/
  /*}*/
  /*.yd-input:-ms-input-placeholder{  !* Internet Explorer 10-11 *!*/
    /*color:red;*/
  /*}*/
  .login{
    width: 100%;
    height: 100vh;
    /*font-family:Arial;*/
    font-family: pingfang sc;
  }
  .welcome{
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.5rem;
  }
  .content{
    padding: 0 0.5rem;
    margin-bottom: 2rem;
  }
  .title{
    font-size: 0.35rem;
    font-weight: 200;
    margin-top: 0.3rem;
  }
  .yd-cell-item{
    padding-left: 0;
  }
  #login .myInput{
    border-bottom: 1px solid #cccccc;
    width: 100%;
    height: 1rem;
    font-size: 0.3rem;
    background-color: white;
  }
  .forgetPass{
    color: deepskyblue;
    font-size: 0.25rem;
    margin-top: 0.2rem;
  }
  .butcont{
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
  }
  .butcont>span{
     display: flex;
    width: 2.1rem;
    height: 0.72rem;
    border: solid 1px #888;
    justify-content: center;
    align-items: center;
    font-size: 0.32rem;
    color: #333;
  }
 .webut{
   margin-top: 0.8rem;
   display: flex;
   height: 0.72rem;
   justify-content: center;
   align-items: center;
   font-size: 0.32rem;
   border: solid 1px #cccccc;
   border-radius: 5px;
   width: 100%;
   color: #333;
 }
  .regiser{
    width: 100%;
    height: 0.8rem;
    margin-top: 0.2rem;
    font-size: 0.32rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: deepskyblue;
  }

  </style>
