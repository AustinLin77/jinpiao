<template>
    <div>
      <yd-navbar title="追溯" bgcolor="#789CF8" color="#FFFFFF">
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
      </yd-navbar>
      <div class="content">
        <div v-for="i,index in list" :key="index">
          <div class="text">
            <div class="textIn">
              <div class="head">
                <img :src="i.logoUrl">
                <div class="companyItem">
                  <div>{{i.openCube}}</div>
                  <div>{{i.quotaType}}</div>
                </div>
              </div>
              <div class="body">
                <div class="top">
                  <div class="left">
                    <div ><span class="bank">开户行</span> {{i.creditInstitution}}</div>
                    <div><span class="bank">开立日期</span>{{i.openJinPiaoDate}}</div>
                  </div>
                  <div class="right">
                    <div><span class="edu">金票金额</span>{{i.amount}}(元)</div>
                    <div><span class="edu">承诺付款日</span> {{i.committedPaydate}}</div>
                  </div>
                </div>
                <div><span class="bank">接收方税务登记号</span> {{i.receiverTaxNum}}</div>
                <div><span class="bank">交易哈希码</span></div>
                <div><span class="bank">合同号</span> {{i.contactNum}}</div>
                <div><span class="bank">对账单据号</span> {{i.settleCode}}</div>
              </div>

            </div>

          </div>
          <div class="contact" v-if="index!=list.length-1">
            <img src="../../../../../../../assets/iconImg/contact.png">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              data:{},
              list:[1,2,2,2]
            }
        },
        created() {

        },
        mounted() {
          this.data=this.$route.query.data;
          this.getData()

        },
        methods: {
          goback(){
            this.$router.go(-1)
          },
          getData(){
            let vm = this;
            let url='clcp/app/receive/trace/back/bill?id='+this.data.id+'&paymenterId='+this.data.paymenterId;
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
                if(res.data[i].quotaType==1){
                  res.data[i].quotaType='未结发票'
                }else if(res.data[i].quotaType==2){
                  res.data[i].quotaType='商业承兑发票'
                }else{
                  res.data[i].quotaType='银行授信'
                }
              }
              vm.list=res.data;
            })
          }
        }

    }
</script>
<style scoped>
  .yd-navbar-item span,i{
    color: white !important;
  }
  .content{
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    height: calc(100% - 1rem);
    overflow: scroll;
    padding:0.76rem 0;
    background-color: #eeeeee;
  }
  .text{
    width:100%;
    display: flex;
    justify-content: center;
    height: auto;


  }
  .textIn{
    width: 6.8rem;
    height: 3.6rem;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(73, 105, 239, 0.2);
  }
  .head{
    height: 1.16rem;
    width: 100%;
    padding-top: 0.24rem;
    display: flex;
    padding-left:0.54rem;
  }
  img{
    width: 0.88rem;
    height: 0.88rem;
    margin-right: 0.46rem;
  }
  .companyItem{
    width: 3.38rem;
    height: 0.88rem;
  }
  .companyItem div{
    height: 0.44rem;
    line-height: 0.44rem;
    color: rgba(48, 48, 48, 1);
    font-size: 0.28rem;
    text-align: left;
    font-family: PingFangSC-Medium;
  }
  .body {
    text-align: left;
    color: #666;
    margin: 0.2rem 0;
    font-size: 0.15rem;
  }
  .left div{
    line-height: 0.36rem;
  }
  .top {
    display: flex;
  }
  .right {
    margin-left: 0.2rem;
  }
  .bank, .edu{
    display: inline-block;
    margin-right: 10px;
    width: 2rem;
    text-align: right;
  }
  .edu {
    width: 75px;
  }
  .contact{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:1rem ;
  }
  .contact img{
    width:0.55rem;
    height: 0.55rem;
  }
</style>

