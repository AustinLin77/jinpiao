<template>
    <div id="searchList">
      <yd-navbar title="账单查询" bgcolor="#789CF8" color="#FFFFFF">
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
        <yd-icon name="search" size="25px" color="#FE8E18" slot="right" @click.native="openAdd"></yd-icon>
      </yd-navbar>
      <div class="content">
        <div class="listBorder">
          <yd-cell-group v-for="i,index in list" @click.native="goDetail(i)" :key="index" >
            <yd-cell-item arrow>
              <div slot="left" class="leftItem">
                <div class="itemName" ><span >付款方账户名称&nbsp&nbsp&nbsp&nbsp</span><span class="itemRight" >{{i.accountName}}</span></div>
                <div class="itemName"><span >收款方账户名称&nbsp&nbsp&nbsp&nbsp</span><span class="itemRight" >{{i.receiver}}</span></div>
                <div class="itemName"><span >金额(元)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><span class="itemRight" >{{i.amount}}</span></div>
                <div class="itemName"><span >交易时间&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span><span class="itemRight" >{{i.transDate}}</span></div>
              </div>
              <div slot="right"></div>
            </yd-cell-item>
          </yd-cell-group>
        </div>

      </div >
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              list:[1,2,3],
              data:{}
            }
        },
        created() {


        },
        mounted() {
          this.data=JSON.parse(localStorage.getItem("data"));
          this.getData()
        },
        methods: {
          goDetail(i){
            this.$router.push({path:'/listDetails',
            query:{
              data:i
            }})
          },
          goback(){
            this.$router.go(-1)
          },
          getData(){
            let vm = this;
            let url='clcp/app/received/query/bill/'+this.data.id;
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
              vm.list=res.data
            });
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
  .itemName{
    height: 0.6rem;
    line-height:0.6rem;
    font-size: 0.28rem;
    color: #000000;
  }
  .leftItem{
    padding: 0.2rem;
    padding-top: 0.1rem;
    font-size: 0.28rem;
    font-family: PingFangSC-Regular
  }
  .itemRight{
    color: #606060;
  }
  .content{
    height: calc(100% - 2.32rem);
    width: 100%;
    overflow: scroll;
    z-index: 5;
    transition: all 0.6s linear;
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
    margin-top: 0.5rem;
    margin-left: 5%;
    margin-right: 5%;
    /*overflow: scroll;*/
    /*height: calc(100% - 1rem);*/
  }
  .listBorder .yd-cell-box{
    margin-bottom: 0.5rem;
  }
</style>

