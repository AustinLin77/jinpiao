<template>
  <div class="me" id="me">
    <yd-navbar title="我的" bgcolor="#5BB8FB" color="#FFFFFF"></yd-navbar>
    <div class="head"></div>
    <div class="card">
      <div>
        <img src="../../../assets/iconImg/1.png" class="userPic" @click="changeHeadPic">
        <div class="username">管理员</div>
      </div>
    </div>
    <yd-cell-group class="list">
      <yd-cell-item arrow href="/personalInfo" type="link" class="item" >
        <img src="../../../assets/iconImg/personal.png" slot="icon" class="myIcon">
        <span slot="left">个人信息</span>
      </yd-cell-item>
      <yd-cell-item arrow href="/companyInfo" type="link" class="item">
        <img src="../../../assets/iconImg/personal.png" slot="icon" class="myIcon">
        <span slot="left">企业基本信息</span>
      </yd-cell-item>
      <yd-cell-item arrow href="/set" type="link" class="item">
        <img src="../../../assets/iconImg/personal.png" slot="icon" class="myIcon">
        <span slot="left">设置</span>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {

            }
        },
        mounted: function(){

        },
        methods:{
          changeHeadPic(){
            this.$router.push({path:'changeHeadPic'})
          },
//          personalInfo(){
//            this.$router.push({path:'personalInfo'})
//          }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .yd-navbar{
    position: inherit;
  }
  .plange{
    background-color: #fff;
    padding: 15px;
    font-size: 0.28rem;
    color: #666;

  }
  .yd-flexbox-horizontal{
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    background-color: #fff;
  }
  .metop{
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  .avtor{
    width: 1.3rem;
    height: 1.3rem;
  }
  .yd-flexbox-item{
    padding-left: 0.35rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .name{
    font-size: 0.3rem;
  }
  .itemName{
    font-size: 0.25rem;
  }
  .depart{
    margin-top: 5px;
    font-size: 0.25rem;
    color: #888;
  }
  .butlogin{
    padding: 0 15px;
    box-sizing: border-box;
  }
  .head{
    background-color:#5BB8FB ;
    height:1.32rem ;
  }
  .card{
    margin-top: -1.31rem;
    margin-left: 0.6rem;
    width: calc(100% - 1.2rem);
    height: 2.64rem;
    background-color: white;
    border-radius: 8px;
    /*box-shadow: 0 0 10px 0 ;*/
    border: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .userPic{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  .username{
    text-align: center;
    font-size: 0.28rem;
    margin-top: 0.15rem;
  }
  .list{
    margin-top: 0.8rem;
  }
 .myIcon{
   width: 0.39rem;
   height: 0.42rem;
 }
 .item{
   border-bottom: 1px solid #eeeeee;
 }

</style>
