<template>
  <yd-layout>
    <yd-navbar title="支付审核"  slot="navbar"  bgcolor="#789CF8" color="#FFFFFF">
      <div  slot="left"  @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <div slot="right" class="recall" v-if="type == 2" @click="approvelticket(3)">撤销</div>
      <yd-icon v-if="type < 2" :name="icon[type]" size="25px" color="#777" slot="right" @click.native="showTool=!showTool"></yd-icon>
    </yd-navbar>
    <div id="zfjb">
    <div class="itemtitle">付款方信息</div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">付款方</span>
        <span slot="right">{{ticketitem.jinquanCode}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">一般结算户</span>
        <span slot="right">{{ticketitem.receiver}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">开户行名称</span>
        <span slot="right">{{ticketitem.openAmount}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">金票余额</span>
        <span slot="right">{{ticketitem.committedPaydate}}</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="itemtitle">收款方信息</div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">收款账户</span>
        <span slot="right">{{ticketitem.jinquanCode}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">收款方</span>
        <span slot="right">{{ticketitem.receiver}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">开户银行</span>
        <span slot="right">{{ticketitem.openAmount}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">支行名称</span>
        <span slot="right">{{ticketitem.committedPaydate}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">联行号</span>
        <span slot="right">{{ticketitem.openCube}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">币种</span>
        <span slot="right">{{ticketitem.createByName}}</span>
      </yd-cell-item>
    </yd-cell-group>
     <div class="itemtitle">交易信息</div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">金额</span>
        <span slot="right">{{ticketitem.jinquanCode}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">大写金额</span>
        <span slot="right">{{ticketitem.receiver}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">摘要</span>
        <span slot="right">{{ticketitem.openAmount}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">备注</span>
        <span slot="right">{{ticketitem.committedPaydate}}</span>
      </yd-cell-item>

    </yd-cell-group>
      <span class="buttoncontent">
         <button class="butre_able" @click="sub(0)">审核不通过</button>
         <button class="buttr buttr_able" @click="sub(1)">审核UKey确认</button>
     </span>
      <div style="height: 20px"></div>
  </div>
  </yd-layout>
</template>

<script>
  export default {
    data: function () {
      return {
        showTool:false,
        type:"",
        icon:["more","download"],
        ticketitem:{},
      }
    },
    created() {
       this.type =  this.$route.query.type;
       this.ticketitem = JSON.parse(localStorage.getItem("tgstageitem"));
        console.log(this.ticketitem);

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
      goapprovel(path){
        this.$router.push({path:path})
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
  .itemtitle{
    height: 50px;
   text-align: center;
    line-height: 50px;
    color: #F47648 ;
    font-size: 16px;
    border-bottom: solid 1px #eee;
    font-family: PingFangSC-Medium;
  }
 #zfjb .yd-cell-item{
    border-bottom: solid 1px #eee;
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

