<template>
  <div style="height: 100%;overflow: hidden" id="company">
    <yd-navbar :title="title" bgcolor="#fff" color="#555">
      <div  slot="left"  @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <!--<div slot="right" class="recall" v-if="type == 2" @click="approvelticket(3)">撤销</div>-->
      <yd-icon  name="more" size="25px" color="#777" slot="right" @click.native="showTool=!showTool"></yd-icon>

    </yd-navbar>
    <div style="border: solid 1px #eee"></div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">金票编号</span>
        <span slot="right">{{ticketitem.billCode}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">接受方</span>
        <span slot="right">{{ticketitem.auditor}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">金额（元）</span>
        <span slot="right">{{ticketitem.actualPay}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">承诺付款日</span>
        <span slot="right">{{ticketitem.finalRepaymentDate}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">托管银行</span>
        <span slot="right">{{ticketitem.openbank}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">一般结算账号</span>
        <span slot="right">{{ticketitem.accountName}}</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="butbox" v-if="type == 1">
          <span class="but" @click="showcenter = true">审批人确认</span>
    </div>
    <yd-popup v-model="showcenter" position="center" width="90%">
      <div style="background-color:#fff;">
        <div class="contertop">
          <span>还款</span>
          <span @click="showcenter = false">
            <yd-icon name="error-outline" color="#fff" size="0.36rem"></yd-icon>
          </span>
        </div>
       <div class="centerform">
         <li>
           <span>一般结算用户</span>
           <span>张留存</span>
         </li>
         <li>
           <span>可用金额</span>
           <span>25512551</span>
         </li>
         <li>
           <span>还款金额</span>
           <span>100000</span>
         </li>

       </div>
        <div class="butbox" >
          <span class="but" @click="showcenter = true">审批人ukey确认</span>
        </div>
        <div style="height: 15px"></div>
      </div>
    </yd-popup>
    <div class="popover" v-if="showTool">
      <template>
        <div class="item" style="border-bottom: 1px solid #4A4A4A " @click="uptype(2)">
          还款
        </div>
        <div class="item" @click="uptype(6)">
          需垫付
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        showcenter:false,
        showTool:false,
        title:"已开立金票",
        type:"",
        icon:["more","download"],
        ticketitem:{},
      }
    },
    created() {
       this.type =  this.$route.query.type;

       this.ticketitem = JSON.parse(localStorage.getItem("repayitem"));
        console.log(this.ticketitem);
       let titles = ['待还款',"还款审批",'已还款',"需垫付"];
       this.title = titles[this.type];
    },
    mounted() {
      this.list=this.list1
    },
    methods: {
      goback(){
        this.$router.go(-1);
      },

      approvelticket(type){
        let vm = this;
        let url='clcp/app/open/gold/update/'+vm.ticketitem.jinquanCode;
        let params = {
          id:1103845349803425792,
          status:type, //---状态 (0已开立、1已复核、2已驳回 3 已撤销)
          approvalSuggestion:""
        };

        console.log(params);
//        console.log(JSON.stringify(params));
        let heads={
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-TenantId": localStorage.getItem("tenantId"),
          "X-Logined-Sign": localStorage.getItem("username"),
          "Authorization": 'Bearer '+localStorage.getItem("token"),
          "Prefer-Lang": "zh-CN"
        };
        vm.api(vm,heads,'put',url,JSON.stringify(params),function (res) {
          console.log(res);
          if(res.statusCode == 200){
            vm.$dialog.toast({
              mes: '提交成功',
              timeout: 1500
            });
            vm.$router.go(-1);
          }else {
            vm.$dialog.toast({
              mes: '提交失败',
              timeout: 1500
            });
          }
        })
      },
      uptype(type){
        let vm = this;
        let url='clcp/appCreditApi/opended/list/';
        let params = vm.ticketitem;
        params.type = type;
        console.log(params);
//        console.log(JSON.stringify(params));
        let heads={
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-TenantId": localStorage.getItem("tenantId"),
          "X-Logined-Sign": localStorage.getItem("username"),
          "Authorization": 'Bearer '+localStorage.getItem("token"),
          "Prefer-Lang": "zh-CN"
        };
        vm.api(vm,heads,'put',url,JSON.stringify(params),function (res) {
          console.log(res);
          if(res.statusCode == 200){
            vm.$dialog.toast({
              mes: '提交成功',
              timeout: 1500
            });
            vm.$router.go(-1);
          }else {
            vm.$dialog.toast({
              mes: '提交失败',
              timeout: 1500
            });
          }
        })
      },

    }

  }
</script>
<style scoped>

  .recall{
    width: 1rem;
    height:0.52rem;
    border-radius: 4px;
    background-color: rgba(15, 174, 253, 1);
    color: #fff;
    text-align: center;
    line-height: 0.52rem;
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
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.3rem;
  }

  .butbox{
     text-align: center;
  }
  .butbox .but{
     text-align: center;
    display:inline-block ;
    width: 3rem;
    height: 36px;
    line-height: 36px;
    border-radius: 4px;
    background-color: rgba(24, 148, 241, 1);
    border: 1px solid rgba(30, 129, 210, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 0.32rem;
    font-family: PingFangSC-Regular;
  }
  .contertop{
     height: 40px;
    line-height: 40px;
    padding: 0 15px;
    background-color: rgba(30, 129, 210, 1);
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    font-size: 0.32rem;
  }
  .centerform{
    padding: 20px 15px;
  }
  .centerform li{
    display: flex;
    line-height: 30px;
    font-size: 0.28rem;
    margin-top: 10px;
  }
  .centerform li>span:first-child{
    width: 2rem;
    text-align: right;
    padding-right: 15px;
  }
  .centerform li>span:last-child{
   flex: 1;
    background-color: #eee;
    padding-left: 15px;
  }
</style>

