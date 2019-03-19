<template>
  <div>
    <yd-navbar title="完善邮寄信息" bgcolor="#789CF8" color="#FFFFFF" :fixed="isFixed">
      <router-link  slot="left" to="/certification">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <div class="content" >
      <div class="loopHead">
        <div class="loopHeadP">企业全称</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.shuiwu" placeholder="请填写企业全称">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">收件人姓名</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.organizationDept" placeholder="请填写收件人姓名">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">收信人电话</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput"  v-model="userData.phone" placeholder="请填写收件人电话" @blur="checkPhone">
        </div>
      </div>
      <div class="loopHead">
        <div class="loopHeadP">地址</div>
        <div class="loopHeadM">
          <input  class="fillInfoInput" v-model="userData.phone" placeholder="请填写地址" >
        </div>
      </div>

      <!--<div class="footer"></div>-->
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
      checkPhone(){
        if(!(/^1[34578]\d{9}$/.test(this.userData.phone))){
          this.userData.phone='';
          this.$dialog.notify({
            mes: '你输入的电话格式有误,请重新输入!',
            timeout: 3000,
            callback: () => {
            }
          });
        }
      }
    }

  }
</script>
<style scoped>
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




