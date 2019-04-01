<template>
  <div style="height: 100%;overflow: hidden" id="company">
    <yd-navbar title="托管信息详情" bgcolor="#fff" color="#555">
      <div  slot="left"  @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <div slot="right" class="recall" v-if="type == 2" @click="approvelticket(3)">撤销</div>
      <yd-icon v-if="type < 2" :name="icon[type]" size="25px" color="#777" slot="right" @click.native="showTool=!showTool"></yd-icon>

    </yd-navbar>
    <div style="border: solid 1px #eee"></div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">金票编号</span>
        <span slot="right">{{ticketitem.jinquanCode}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">接受方</span>
        <span slot="right">{{ticketitem.receiver}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">金额（元）</span>
        <span slot="right">{{ticketitem.openAmount}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">承诺付款日</span>
        <span slot="right">{{ticketitem.committedPaydate}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">开立方</span>
        <span slot="right">{{ticketitem.openCube}}</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">经办人</span>
        <span slot="right">{{ticketitem.createByName}}</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="popover" v-if="showTool">
      <template v-if="type==0">
        <div class="item"  @click="goapprovel('/zdsearch')">
          账单查询
        </div>
        <div class="item" @click="goapprovel('/zfjb')">
         支付经办
        </div>
        <div class="item" style="border: none" @click="goapprovel('/zfsh')">
         支付审核
        </div>
      </template>
    </div>
  </div>
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
    border-bottom: 1px solid #4A4A4A
  }

</style>

