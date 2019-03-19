<template>
  <div style="height: 100%;overflow: hidden" id="company">
    <yd-navbar :title="title" bgcolor="#fff" color="#555">
      <div  slot="left"  @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
      <div slot="right" class="recall" v-if="type == 2">撤销</div>
      <yd-icon v-if="type < 2" :name="icon[type]" size="25px" color="#777" slot="right" @click.native="showTool=!showTool"></yd-icon>

    </yd-navbar>
    <div style="border: solid 1px #eee"></div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">申请编号</span>
        <span slot="right">651142455114</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">接受方</span>
        <span slot="right">深圳合成股份有限公司</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">金额（元）</span>
        <span slot="right">2000.00</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">承诺付款日</span>
        <span slot="right">2019-01-19</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">类型</span>
        <span slot="right">商业承兑汇票</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">经办人</span>
        <span slot="right">张留存</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="popover" v-if="showTool">
      <template v-if="type==0">
        <div class="item" style="border-bottom: 1px solid #4A4A4A " @click="goapprovel(0)">
          <img src="../../../../../../assets/iconImg/add.png" class="rightIcon">
          复核
        </div>
        <div class="item" @click="goapprovel(1)">
          <img src="../../../../../../assets/iconImg/add.png" class="rightIcon">
          撤销
        </div>
      </template>
      <template v-if="type == 1">
        <div class="item" style="border-bottom: 1px solid #4A4A4A " @click="goapprovel(0)">
          付款承诺函
        </div>
        <div class="item" @click="goapprovel(1)">
          金票流转单
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
        title:"已开立金票",
        type:"",
        icon:["more","download"]

      }
    },
    created() {
       this.type =  this.$route.query.type;
       let titles = ['已开立金票',"已复核金票",'已驳回金票',"已撤销金票"]
       this.title = titles[this.type];
    },
    mounted() {
      this.list=this.list1
    },
    methods: {
      goback(){
        this.$router.go(-1);
      },


      goapprovel(type){
        this.$router.push({path:'/approvelitem', query:{type:type}})
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
  .rightIcon{
    height: 0.32rem;
    width: 0.3rem;
    margin-right: 0.3rem;
  }
</style>

