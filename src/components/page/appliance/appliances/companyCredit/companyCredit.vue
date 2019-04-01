<template>
  <div style="height: 100%;overflow: hidden" id="company">
    <yd-navbar title="企业授信" bgcolor="#789CF8" color="#FFFFFF">
      <div slot="left" @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <yd-icon name="more" size="25px" color="#777" slot="right" @click.native="openAdd"></yd-icon>
    </yd-navbar>
    <div class="head" style="z-index: 9999"></div>

    <div class="card">
      <div class="selectItem"  >
        <span :class="{'active': type==1}" @click="changeStatus(1)">已授信</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==0}" @click="changeStatus(0)">待授信</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==2}" @click="changeStatus(2)">授信失败</span>
      </div>
    </div>
    <div class="content" >
      <div class="listBorder">
        <yd-cell-group v-for="i,index in list" @click.native="goDetail(i)" :key="index">
          <yd-cell-item arrow>
            <div slot="left" class="leftItem">
              <div class="itemName"><span >类型</span><span class="itemRight">{{i.busiType}}</span></div>
              <div class="itemName"><span >授信方</span><span class="itemRight">{{i.creditInstitution}}</span></div>
              <div class="itemName"><span >申请方</span><span class="itemRight">{{i.compName}}</span></div>
              <div class="itemName"><span >授信金额</span><span class="itemRight">{{i.credits}}</span></div>
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
        未结发票
      </div>
      <div class="item" @click="add(1)">
        <img src="../../../../../assets/iconImg/add.png" class="rightIcon">
        承兑发票
      </div>
      <div class="item" @click="add(2)">
        <img src="../../../../../assets/iconImg/add.png" class="rightIcon">
        银行授信
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        showTool:false,
        type:1,
        list:[],
        list1:[{type:'未结发票',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
          {type:'承兑发票',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
          {type:'银行授信',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
          {type:'未结发票',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
         ],
        list2:[{type:'未结发票',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
          {type:'承兑发票',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
          {type:'银行授信',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
        ],
        list3:[{type:'未结发票',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
          {type:'承兑发票',seller:'欣旺达',apply:'点金保理',cost:'1000元'},
          {type:'银行授信',seller:'欣旺达',apply:'点金保理',cost:'1000元'},]
      }
    },
    created() {

    },
    mounted() {
      this.list=this.list1;
      this.getDataCredit(1)
    },
    methods: {
      //改变操作用户状态
      changeStatus(type){
        if(type===0){
          this.type=0;
        }else if(type===1){
          this.type=1;
        }else{
          this.type=2;
        }
        this.getDataCredit(type)
      },
      //点击进入详情页面
      goDetail(item){
        this.$router.push({
          path:'/creditDetails',
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
        this.showTool=!this.showTool;
        this.$router.push({
          path:'/addCredit',
          query:{
            type:type
          }
        })
      },
      goback(){
        this.$router.push({path:'/indexpage'})
      },
      getDataCredit(type){
        let vm = this;
        let url='clcp/appCreditApi/list?creditStatus='+type;
        let params={};
        let heads={
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-TenantId": localStorage.getItem("tenantId"),
          "X-Logined-Sign": localStorage.getItem("username"),
          "Authorization": 'Bearer '+localStorage.getItem("token"),
          "Prefer-Lang": "zh-CN"
        };
        vm.api(vm,heads,'get',url,params,function (res) {
          console.log(res);
          for(var i in res.data){
            if(res.data[i].busiType==1){
              res.data[i].busiType='未结发票'
            }else if(res.data[i].busiType==2){
              res.data[i].busiType='承兑发票'
            }else{
              res.data[i].busiType='银行授信'
            }
          }
          vm.list=res.data;
        })
      },
    }

  }
</script>
<style scoped>
  .itemName:nth-child(1)>span:nth-child(2) {
    margin-left: 1rem
  }
  .itemName:nth-child(2)>span:nth-child(2) {
    margin-left: 0.7rem
  }
  .itemName:nth-child(3)>span:nth-child(2) {
    margin-left: 0.7rem
  }
  .itemName:nth-child(4)>span:nth-child(2) {
    margin-left: 0.4rem
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
    height: 0.6rem;
    line-height:0.6rem;
    font-size: 0.28rem;
  }
  .leftItem{
    padding: 0.2rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular
  }
  .itemRight{
    color: #565656;
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
    height: 2.64rem;
    width: 2.1rem;
    z-index: 99999;
    background-color: #2A2A2A ;
    opacity: 1;
    color: #FF9904 ;
    border-radius: 6px;
  }
  .item{
    width: 100%;
    text-indent: 0.26rem;
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.3rem;
  }
  .rightIcon{
    height: 0.32rem;
    width: 0.3rem;
    margin-right: 0.15rem;
    margin-left: 0.2rem;
  }
</style>
