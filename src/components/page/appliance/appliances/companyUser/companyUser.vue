<template>
    <div style="height: 100%;overflow: hidden" id="company">
       <yd-navbar title="企业用户" bgcolor="#789CF8" color="#FFFFFF">
         <router-link  slot="left" to="/appliance">
           <yd-navbar-back-icon ></yd-navbar-back-icon>
         </router-link>
         <yd-icon name="more" size="25px" color="#777" slot="right" @click.native="openAdd"></yd-icon>
       </yd-navbar>
       <div class="head" style="z-index: 9999"></div>

      <div class="card">
        <div class="selectItem"  >
          <span :class="{'active': type==0}"  @click="changeStatus(0)">经办人</span>
        </div>
        <div class="selectItem" >
          <span :class="{'active': type==1}" @click="changeStatus(1)">审核人</span>
        </div>
      </div>
      <div class="content" >
        <div class="listBorder">
          <yd-cell-group v-for="i in list" @click.native="goDetail(i)" :key="i">
            <yd-cell-item arrow>
              <div slot="left" style="padding: 0.2rem;font-size: 0.28rem">
                <div class="itemName"><span >用户名</span><span >欣旺达</span></div>
                <div class="itemName"><span >电话</span><span >18815154545</span></div>
                <div class="itemName"><span >邮箱</span><span >188485484@sunwoda.com</span></div>
              </div>
              <div slot="right"></div>
            </yd-cell-item>
          </yd-cell-group>
        </div>

      </div >
      <!--<div class="content" v-if="type==1">-->
        <!--<div class="listBorder">-->
          <!--<yd-cell-group v-for="i in list2" >-->
            <!--<yd-cell-item arrow>-->
              <!--<div slot="left" style="padding: 0.2rem">-->
                <!--<div class="itemName"><span >用户名</span><span >欣旺达</span></div>-->
                <!--<div class="itemName"><span >电话</span><span >18815154545</span></div>-->
                <!--<div class="itemName"><span >邮箱</span><span >188485484@sunwoda.com</span></div>-->
              <!--</div>-->
              <!--<div slot="right"></div>-->
            <!--</yd-cell-item>-->
          <!--</yd-cell-group>-->
        <!--</div>-->

      <!--</div >-->
      <div class="popover" v-if="showTool">
        <div class="item" style="border-bottom: 1px solid #4A4A4A " @click="add(0)">
          <img src="../../../../../assets/iconImg/add.png" class="rightIcon">
          经办人
        </div>
        <div class="item" @click="add(1)">
          <img src="../../../../../assets/iconImg/add.png" class="rightIcon">
          审核人
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              showTool:false,
              type:0,
              list:[],
              list1:[1,2,3,4],
              list2:[1,2]
            }
        },
        created() {

        },
        mounted() {
          this.list=this.list1
        },
        methods: {
          //改变操作用户状态
          changeStatus(type){
              if(type===0){
                this.type=0;
                this.list=this.list1
              }else{
                this.type=1;
                this.list=this.list2
              }
            },
          //点击进入详情页面
          goDetail(item){
            this.$router.push({
              path:'/handlerDetail',
              query:{
                item:item,
                type:this.type
              }
            })
          },
          //点击打开新增选项
          openAdd(){
            this.showTool=!this.showTool
          },
          //跳转到新增页面
          add(type){
            this.$router.push({
              path:'/addHandler',
              query:{
                type:type
              }
            })
          }
        }

    }
</script>
<style scoped>
  .itemName:nth-child(1)>span:nth-child(2) {
    margin-left: 0.3rem
  }
  .itemName:nth-child(2)>span:nth-child(2) {
    margin-left: 0.5rem
  }
  .itemName:nth-child(3)>span:nth-child(2) {
    margin-left: 0.5rem
  }
  .yd-navbar-item span,i{
    color: white !important;
  }
  .yd-navbar{
    border-bottom: none;
  }
  .yd-navbar:after{
    height:0;
  }
  #company .head{
    /*background: linear-gradient(left, #789CF8,#4363EE);*/
    background-color:#789CF8 ;
    height:1.32rem ;
  }
  /*#company .top{*/
    /*background: linear-gradient(left top, #789CF8,#4363EE);*/

  /*}*/
  .itemName{
    height: 0.8rem;
    line-height:0.8rem;
    font-size: 0.28rem;
  }
  .card{
    margin-left: 0.6rem;
    width: calc(100% - 1.2rem);
    height: 1.4rem;
    background-color: white;
    border-radius: 8px;
    /*box-shadow: 0 0 10px 0 ;*/
    border: 1px solid #eeeeee;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:1.55rem;
    z-index: 999;

  }
  .selectItem{
    width: 50%;
    height: 100%;
    font-size: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .selectItem>span{
    font-size: 0.28rem;
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .active{
    border-bottom: 5px solid #FFAF00  ;
  }
  .content{
    height: calc(100% - 2.32rem);
    width: 100%;
    overflow: scroll;
    z-index: 5;
    transition: all 0.6s linear;
    /*margin-top: -0.8rem;*/
  }
  .listBorder{
    margin-top: 1rem;
    margin-left: 5%;
    margin-right: 5%;
    /*overflow: scroll;*/
    /*height: calc(100% - 1rem);*/
  }
  .listBorder .yd-cell-box{
    margin-bottom: 0.5rem;
  }
  .tran{
    transition: all 0.6s linear;
  }
  .popover{
    border: solid 1px #2A2A2A;
    position: fixed;
    top:0.8rem;
    right: 0.34rem;
    height: 1.76rem;
    width: 2.1rem;
    z-index: 99999;
    background-color: #2A2A2A ;
    opacity: 1;
    color: #FF9904 ;
    border-radius: 6px;
  }
  .item{
    width: 100%;
    text-indent: 0.46rem;
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.3rem;
  }
  .rightIcon{
    height: 0.32rem;
    width: 0.3rem;
    margin-right: 0.3rem;
    margin-left: 0.2rem;

  }
</style>

