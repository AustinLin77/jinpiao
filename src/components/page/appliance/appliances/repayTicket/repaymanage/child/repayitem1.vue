<template>
  <div style="height: 100%;overflow: hidden" >
    <yd-layout>
      <yd-navbar slot="navbar" :title="title" bgcolor="#789CF8" color="#FFFFFF">
        <div  slot="left"  @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
      </yd-navbar>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">金额类型</span>
        <!--<span slot="right">{{ticketitem.createByName}}</span>-->
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">保税方式</span>
        <!--<span slot="right">{{ticketitem.createByName}}</span>-->
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">发票号</span>
        <span slot="right">{{ticketitem.contactNum}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">合同编号</span>
        <span slot="right">{{ticketitem.contactNum}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">对账单号</span>
        <span slot="right">{{ticketitem.createByName}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">开立日期</span>
        <span slot="right">{{ticketitem.openDate}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">可用额度</span>
        <span slot="right">{{ticketitem.balance}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">开立方</span>
        <span slot="right">{{ticketitem.openCube}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">接收方税务登记号</span>
        <span slot="right">{{ticketitem.receiverTaxNum}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">金票金额（元）</span>
        <span slot="right">{{ticketitem.openAmount}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">承诺日</span>
        <span slot="right">{{ticketitem.committedPaydate}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">审核意见</span>
        <!--<span slot="right">{{ticketitem.createByName}}</span>-->
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">
          <input type="checkbox" v-model="argee"/> 我同意<span style="color:rgba(214, 0, 0, 1) ">《付款诺涵》</span>
        </span>

      </yd-cell-item>
      <yd-cell-item v-if="type==0">
        <span slot="right" class="buttoncontent">
         <button class="butre" :class="argee?'butre_able':''" @click="sub(0)">驳回</button>
         <button class="buttr" :class="argee?'buttr_able':''" @click="sub(1)">审核UKey确认</button>
        </span>
      </yd-cell-item>
      <yd-cell-item v-if="type==1">
        <span slot="right" class="buttoncontent">
         <button class="butmove" :class="argee?'butmove_able':''" @click="sub(2)">撤销</button>
        </span>
      </yd-cell-item>
    </yd-cell-group>
    </yd-layout>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        argee:false,
        title:"撤销金票",
        type:1,   //1 撤销 0审核
        ticketitem:{}

      }
    },
    created() {
      this.type = this.$route.query.type;
      this.ticketitem = JSON.parse(localStorage.getItem("repayitem"));
      if(this.type == 1){
        this.title = "撤销金票"
      }else if(this.type == 0){
        this.title = "复核金票"
      }
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
            vm.$router.go(-2);
          }else {
            vm.$dialog.toast({
              mes: '提交失败',
              timeout: 1500
            });
          }
        })
      },
      sub(type){
        if(this.argee == false){
          return
        }
        let vm =  this;
        if(type == 0){
//          this.$dialog.toast({
//            mes: '你点击了驳回按钮',
//            timeout: 1500
//          });
          this.approvelticket(2);
//          this.goback();
        }
        if(type == 1){
//          this.$dialog.toast({
//            mes: '你点击了同意按钮',
//            timeout: 1500
//          });
          this.approvelticket(1)
//          this.goback();
        }
        if(type == 2){
          this.approvelticket(3);
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
  #company .head{
    /*background: linear-gradient(left, #789CF8,#4363EE);*/
    background-color:#789CF8 ;
    height:1.32rem ;
  }
  .buttoncontent{
     width: 100%;
     display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .buttoncontent button{
    width: 3rem;
    height: 0.84rem;
    border-radius: 4px;
    color: #fff;

  }
 .butre{
    background-color: rgba(244, 72, 72, 0.5);
    border: 1px solid rgba(244, 72, 72, 1);
  }
 .buttr{
    background-color: rgba(24, 148, 241, 0.5);
    border: 1px solid rgba(30, 129, 210, 1);
  }
  .butmove{
    background-color: rgba(244, 118, 72, 0.5);
    border: 1px solid rgba(244, 118, 72, 1);
  }
  .buttoncontent .butmove_able{
    background-color: rgba(244, 118, 72, 1);
    border: 1px solid rgba(244, 118, 72, 1);
  }
  .buttoncontent .butre_able{
    background-color: rgba(244, 72, 72, 1);
    border: 1px solid rgba(244, 72, 72, 1);

  }

  .buttoncontent .buttr_able{
    background-color: rgba(24, 148, 241, 1);
    border: 1px solid rgba(30, 129, 210, 1);
  }
</style>

