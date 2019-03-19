<template>
  <div style="height: 100%;overflow: hidden" id="company">
    <yd-navbar title="金票审核" bgcolor="#789CF8" color="#FFFFFF">
      <div  slot="left"  @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <yd-icon name="search" size="25px" color="#777" slot="right" @click.native="searchshow=true"></yd-icon>
    </yd-navbar>
    <div class="head" style="z-index: 9999"></div>
    <div class="card">
      <div class="selectItem"  >
        <span :class="{'active': type==0}"  @click="changeStatus(0)">已开立金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==1}" @click="changeStatus(1)">已复审金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==2}" @click="changeStatus(2)">已驳回金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==3}" @click="changeStatus(3)">已撤销金票</span>
      </div>
    </div>
    <div class="content" >
      <div class="listBorder">
        <yd-cell-group v-for="i in list" @click.native="goDetail()" :key="i">
          <yd-cell-item arrow>
            <div slot="left" style="padding: 0.2rem;font-size: 0.28rem">
              <div class="itemName"><span >申请编号</span><span >323423400</span></div>
              <div class="itemName"><span >接受方</span><span >深圳成和电子事业有限公司</span></div>
              <div class="itemName"><span >金额（元）</span><span >2,121,122.00</span></div>
              <div class="itemName"><span >承诺付款日</span><span >2019-03-24</span></div>
            </div>
            <div slot="right"></div>
          </yd-cell-item>
        </yd-cell-group>
      </div>

    </div >
    <yd-popup v-model="searchshow" position="bottom" height="100%">
      <div class="searchbox">
        <yd-search v-model="searchcontent" :on-submit="submitHandler" cancel-text="确定"></yd-search>
        <span @click="searchshow = false" class="closepopup">关闭</span>
      </div>
      <!--<yd-button type="warning" style="margin: 30px;" @click.native="show2 = false">Close Bottom Popup</yd-button>-->
    </yd-popup>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        type:0,
        list:[],
        searchshow:false,
        searchcontent:""
      }
    },
    created() {
      this.list=[1,2,3,4]
    },
    mounted() {
    },
    methods: {
      goback(){
        this.$router.go(-1);
      },
      //改变操作用户状态
      changeStatus(type){
        this.type = type
        this.list=[1,2,3,4]
      },
      submitHandler(value) {
        this.$dialog.toast({mes: `搜索：${value}`});
      },
      //点击进入详情页面
      goDetail(){
        this.$router.push({path:'/ticketitem', query:{type:this.type}});
      },
      //点击打开新增选项
      openAdd(){
        this.showTool=!this.showTool
      },

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
  #company .head{
    /*background: linear-gradient(left, #789CF8,#4363EE);*/
    background-color:#789CF8 ;
    height:1.32rem ;
  }
  /*#company .top{*/
  /*background: linear-gradient(left top, #789CF8,#4363EE);*/

  /*}*/

  .searchbox{
    display: flex;
    align-items: center;
    background-color: #efeff4;
  }
  .searchbox>div:first-child{
    flex: 1;

  }
  .closepopup{
    display: inline-block;
    padding: 5px;

    color: #0bb20c;
    font-size: 14px;

  }
  .itemName{
    height: 0.8rem;
    line-height:0.8rem;
    font-size: 0.28rem;
    display: flex;
  }
  .itemName>span:first-child{
    width: 1.6rem;
    color: #333;
  }
  .itemName>span:last-child{
    flex: 1;
    color: #888;
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


