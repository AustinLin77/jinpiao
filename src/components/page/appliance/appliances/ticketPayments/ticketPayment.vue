<template>
  <div style="height: 100%;overflow: hidden" id="company">
    <yd-navbar title="金票收支" bgcolor="#789CF8" color="#FFFFFF">
      <div slot="left" @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <yd-icon name="search" size="25px" color="#FE8E18" slot="right" @click.native="openAdd"></yd-icon>
    </yd-navbar>
    <div class="head" style="z-index: 9999"></div>

    <div class="card">
      <div class="selectItem"  >
        <span :class="{'active': type==0}" @click="changeStatus(0)">待签收金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==1}" @click="changeStatus(1)">可用金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==2}" @click="changeStatus(2)">支付中金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==3}" @click="changeStatus(3)">已支付金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==4}" @click="changeStatus(4)">已到期金票</span>
      </div>
      <div class="selectItem" >
        <span :class="{'active': type==5}" @click="changeStatus(5)">已驳回金票</span>
      </div>
    </div>
    <!--<div class="content" :class="{ifbottom:type==1}">-->
      <div class="listBorder"  :class="{ifbottom:type==1}">
        <yd-infinitescroll :callback="loadList1" ref="infinitescrollDemo" >
          <yd-cell-group v-for="i,index in list" @click.native="goDetail(i)" :key="index" slot="list" >
            <div style="display: flex;padding-left: 0.44rem;height: 0.8rem;line-height: 0.8rem;border-bottom: 1px solid #eeeeee; font-size: 0.28rem;" id="checkboxBor" v-if="type==1">
              <yd-checkbox v-model="i.check" shape="circle" onClick="event.cancelBubble = true" v-if="type==1"  ></yd-checkbox>
              <span >金票编号</span>
              <span class="itemRight" style="margin-left: 0.5rem">{{i.jinquanCode}}</span>
            </div>
            <yd-cell-item arrow>
              <div slot="left" class="leftItem">
                <div class="itemName" v-if="type!=1"><span >金票编号</span><span class="itemRight" style="margin-left: 1rem">{{i.jinquanCode}}</span></div>
                <div class="itemName"><span >接收方</span><span class="itemRight" style="margin-left: 1.3rem">{{i.receiver}}</span></div>
                <div class="itemName"><span >开立金额(元)</span><span class="itemRight" style="margin-left: 0.55rem">{{i.amount}}</span></div>
                <div class="itemName"><span >承诺付款日</span><span class="itemRight" style="margin-left: 0.7rem">{{i.committedPaydate}}</span></div>
              </div>
              <div slot="right"></div>
            </yd-cell-item>
          </yd-cell-group>
          <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>
          <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
        </yd-infinitescroll>
      </div>

    <!--</div >-->
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
    <!--<div class="popover" v-if="showTool">-->
      <!--<div class="item" style="border-bottom: 1px solid #4A4A4A " @click="add(0)">-->
        <!--<img src="../../../../../assets/iconImg/add.png" class="rightIcon">-->
        <!--未结发票-->
      <!--</div>-->
      <!--<div class="item" @click="add(1)">-->
        <!--<img src="../../../../../assets/iconImg/add.png" class="rightIcon">-->
        <!--承兑发票-->
      <!--</div>-->
      <!--<div class="item" @click="add(2)">-->
        <!--<img src="../../../../../assets/iconImg/add.png" class="rightIcon">-->
        <!--银行授信-->
      <!--</div>-->
    <!--</div>-->
    <div class="bottom" v-if="type==1">
      <span style="margin-left: 37.066vw;margin-right: 2.933vw">已选择 {{totalSelect}} 条</span>
      <div class="submit" @click="submit">转让</div>
    </div>

  </div>
</template>

<script>
    export default {
        data: function () {
            return {
              pageNum:1,
              pageSize:4,
              totalSelect:0,
              type:0,
              list:[],
              list1:[{type:1},{type:2},{type:3},{type:4}],
              sendList:[]
            }
        },
        created() {

        },
        mounted() {
           this.getData(3)
        },
        methods: {
          getData(status){
            let vm = this;
            let url='clcp/app/receive/gold/list?status='+status+"&pageSize="+this.pageSize+"&pageNum="+this.pageNum;
            let params={
            };
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
                vm.list.push(res.data[i]);
              }
              console.log(vm.list.length)
              console.log(res.total)
              if(vm.list.length>=res.total){
                vm.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                return;
              }
              vm.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
              vm.pageNum++
            })
          },
          changeStatus(type){
            this.list=[]
            var status;
            if(type===0){
              this.type=0;
              status=3
            }else if(type===1){
              this.type=1;
              status=2
            }else if(type===2){
              this.type=2;
              status=0
            }else if(type===3){
              this.type=3;
              status=1
            }else if(type===4){
              this.type=4;
              status=5
            }else{
              this.type=5;
              status=4
            }
            this.getData(status)
          },
          goDetail(i){
            localStorage.setItem("type",this.type)
            localStorage.setItem("data",JSON.stringify(i))
            this.$router.push(
              {
                path:'/ticketDetails',
                query:{
                  type:this.type,
                  data:i
                }
              })
          },
          submit(){
            for(var i in this.list){
              if(this.list[i].check){
                this.sendList.push(this.list[i])
              }
            }
            if(this.sendList.length==0){
              this.$dialog.confirm({
                title: '温馨提示',
                mes: '请选择金票进行支付!',
                opts: () => {
                }
              });
            }else if(this.sendList.length>1){
              this.$dialog.confirm({
                title: '温馨提示',
                mes: '只能选择一张金票,请重新选择',
                opts: () => {
                  for(var i in this.list) {
                    this.list[i].check=false
                  }
                  this.sendList=[]
                }
              });
            }else{
              this.$router.push(
                {
                  path:'/payment',
                  query:this.sendList
                });
              this.sendList=[]
            }
          },
          goback(){
            this.$router.push({path:'/indexpage'})
          },
          loadList1(){

          }
        }

    }
</script>

<style scoped>

  .itemName>div{
    display: flex;
    align-items: center;
  }
  .itemName:nth-child(1)>span:nth-child(2) {
    margin-left: 1rem
  }
  .itemName:nth-child(2)>span:nth-child(2) {
    margin-left: 1.3rem
  }
  .itemName:nth-child(3)>span:nth-child(2) {
    margin-left: 0.55rem
  }
  .itemName:nth-child(4)>span:nth-child(2) {
    margin-left: 1rem
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
    padding-top: 0.1rem;
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
    /*display: flex;*/
    display: -webkit-box;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:1.55rem;
    z-index: 999;
    overflow: scroll;

  }
  .card ::-webkit-scrollbar {
    display: none;
  }
  .selectItem{
    width: 1.6rem;
    height: 100%;
    font-size: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .selectItem>span{
    font-size: 0.28rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .active{
    border-bottom: 5px solid #FFAF00  ;
  }
  .content{
    /*height: calc(100% - 2.32rem);*/
    /*width: 100%;*/
    /*overflow: scroll;*/
    /*z-index: 5;*/
    /*transition: all 0.6s linear;*/
    /*margin-top: -0.8rem;*/
  }
  .ifbottom{
    height: calc(100% - 3.32rem);
    width: 100%;
    overflow: scroll;
    z-index: 5;
    transition: all 0.6s linear;
  }
  .listBorder{
    /*margin-top: 1rem;*/
    /*margin-left: 5%;*/
    /*margin-right: 5%;*/
    /*overflow: scroll;*/
    /*height: calc(100% - 1rem);*/
    position: absolute;
    bottom: 0;
    top:2.32rem;
    left: 0;
    /*height:100%;*/
    padding-top: 1rem;
    padding-left: 5%;
    padding-right: 5%;
    height: calc(100% - 2.32rem);
    width: 100%;
    overflow: scroll;
    z-index: 5;
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
  .yd-navbar-item span,i{
    color: white !important;
  }
  .bottom{
    font-size:3.2vw ;
    color: #8A8A8A;
    border-top: 1px solid #eeeeee;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content:flex-end;
    padding-right: 0.5rem;
    align-items: center;
    background-color: white;
    z-index:99999;
  }
  .submit{
    height: 0.6rem;
    border-radius: 8vw;
    background-color:#FF7F39;
    width: 1.4rem;
    color: white;
    font-size:3.733vw;
    line-height: 9vw;
    text-align: center
  }
</style>
