<template>
    <div id="waitSign">
      <yd-navbar :title="title" bgcolor="#789CF8" color="#FFFFFF">
        <!--<router-link  slot="left" to="/ticketPayment">-->
          <!--<yd-navbar-back-icon ></yd-navbar-back-icon>-->
        <!--</router-link>-->
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
        <yd-icon name="qrscan" size="25px" color="#FE8E18" slot="right" @click.native="approval" v-if="title=='已支付金票'"></yd-icon>
        <yd-icon name="ucenter-outline" size="25px" color="#FE8E18" slot="right" @click.native="approval" v-if="title=='支付中金票'"></yd-icon>
        <yd-icon name="more" size="25px" color="#FE8E18" slot="right" @click.native="openmore" v-if="title=='待签收金票'||title=='可用金票'||title=='已到期金票'"></yd-icon>
      </yd-navbar>
      <div class="content" v-if="title=='已驳回金票'">
        <div class="loopHead">
          <div class="loopHeadP">金票编号</div>
          <div class="loopHeadM">
            {{data.jinquanCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开立方</div>
          <div class="loopHeadM">
            {{data.openCube}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">支付方</div>
          <div class="loopHeadM">
            {{data.paymenter}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">接收方</div>
          <div class="loopHeadM">
            {{data.receiver}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开立金额(元)</div>
          <div class="loopHeadM">
            {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">币种(元)</div>
          <div class="loopHeadM">
            {{data.currency}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开立日期</div>
          <div class="loopHeadM">
            {{data.createAt}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">驳回日期</div>
          <div class="loopHeadM">
            {{data.updateAt}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">驳回人</div>
          <div class="loopHeadM">
            {{data.updateFirstname}}{{data.updateLastname}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">类型</div>
          <div class="loopHeadM">
            {{data.quotaType}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">状态</div>
          <div class="loopHeadM">
            {{status}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='已到期金票'">
        <div class="loopHead">
          <div class="loopHeadP">金票编号</div>
          <div class="loopHeadM">
            {{data.jinquanCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">支付方</div>
          <div class="loopHeadM">
            {{data.paymenter}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">金票总额(元)</div>
          <div class="loopHeadM">
            {{data.receivedAmount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">余额(元)</div>
          <div class="loopHeadM">
            {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">保理(元)</div>
          <div class="loopHeadM">
            {{data.financingAmount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">已开立金额(元)</div>
          <div class="loopHeadM">
            {{data.openAmount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">接收方</div>
          <div class="loopHeadM">
            {{data.receiver}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承诺付款日</div>
          <div class="loopHeadM">
            {{data.committedPaydate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">类型</div>
          <div class="loopHeadM">
            {{data.quotaType}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='待签收金票'">
        <div class="loopHead">
          <div class="loopHeadP">金票编号</div>
          <div class="loopHeadM">
            {{data.jinquanCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开立方</div>
          <div class="loopHeadM">
            {{data.openCube}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">金票总额</div>
          <div class="loopHeadM">
            {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承诺付款日</div>
          <div class="loopHeadM">
            {{data.committedPaydate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">类型</div>
          <div class="loopHeadM">
           {{data.quotaType}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">保税方式</div>
          <div class="loopHeadM">
           {{data.confirmMethod}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开立日期</div>
          <div class="loopHeadM">
          {{data.createAt}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='已支付金票'">
        <div class="loopHead">
          <div class="loopHeadP">金票编号</div>
          <div class="loopHeadM">
            {{data.jinquanCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">接收方</div>
          <div class="loopHeadM">
            {{data.receiver}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">金额(元)</div>
          <div class="loopHeadM">
            {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">支付日期</div>
          <div class="loopHeadM">
            {{data.updateAt}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">经办人</div>
          <div class="loopHeadM">
            {{data.createFirstname}}{{data.createLastname}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">审核人</div>
          <div class="loopHeadM">
            {{data.updateFirstname}}{{data.updateLastname}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开立方</div>
          <div class="loopHeadM">
            {{data.openCube}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承诺付款日</div>
          <div class="loopHeadM">
            {{data.committedPaydate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">类型</div>
          <div class="loopHeadM">
            {{data.quotaType}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">是否保理</div>
          <div class="loopHeadM">
            {{data.isFinance}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='支付中金票'">
        <div class="loopHead">
          <div class="loopHeadP">金票编号</div>
          <div class="loopHeadM">
            {{data.jinquanCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">支付方</div>
          <div class="loopHeadM">
            {{data.paymenter}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">支付余额(元)</div>
          <div class="loopHeadM">
            {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">保理(元)</div>
          <div class="loopHeadM">
            {{data.amountValue}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">接收方</div>
          <div class="loopHeadM">
            {{data.receiver}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承诺付款日</div>
          <div class="loopHeadM">
            {{data.committedPaydate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">类型</div>
          <div class="loopHeadM">
            {{data.quotaType}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">经办人</div>
          <div class="loopHeadM">
            {{data.createFirstname}}{{data.createLastname}}
          </div>
        </div>
      </div>
      <div class="content" v-if="title=='可用金票'">
        <div class="loopHead">
          <div class="loopHeadP">金票编号</div>
          <div class="loopHeadM">
            {{data.jinquanCode}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">开立方</div>
          <div class="loopHeadM">
            {{data.openCube}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">金票总额</div>
          <div class="loopHeadM">
            {{data.amountValue}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">可用余额(元)</div>
          <div class="loopHeadM">
           {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">保理(元)</div>
          <div class="loopHeadM">
            {{data.financingAmount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">已开立金额(元)</div>
          <div class="loopHeadM">
           {{data.openAmount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">承诺付款日</div>
          <div class="loopHeadM">
            {{data.committedPaydate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">类型</div>
          <div class="loopHeadM">
            {{data.quotaType}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">接受日期</div>
          <div class="loopHeadM">
            {{data.receivedDate}}
          </div>
        </div>
      </div>
      <div class="popover" v-if="showTool&&title=='待签收金票'">
        <div class="item" style="border-bottom: 1px solid #4A4A4A " @click="submit(0)">
          <img src="../../../../../../assets/iconImg/add.png" class="rightIcon">
          签收
        </div>
        <div class="item" @click="submit(1)">
          <img src="../../../../../../assets/iconImg/add.png" class="rightIcon">
          驳回
        </div>
      </div>
      <div class="popover" v-if="showTool&&title=='可用金票'">
        <div class="item" style="border-bottom: 1px solid #4A4A4A " @click="submit(2)">
          <img src="../../../../../../assets/iconImg/add.png" class="rightIcon">
          预览
        </div>
        <div class="item" @click="submit(3)">
          <img src="../../../../../../assets/iconImg/add.png" class="rightIcon">
          追溯
        </div>
        <div class="item" @click="submit(1)">
          <img src="../../../../../../assets/iconImg/add.png" class="rightIcon">
          驳回
        </div>
      </div>
      <div class="popover" v-if="showTool&&title=='已到期金票'">
        <div class="item" style="border-bottom: 1px solid #4A4A4A " @click="searchList">
          账单查询
        </div>
        <div class="item" @click="cashManagement">
          提现经办
        </div>
        <div class="item" @click="comfirm">
          提现审批
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              status:'',
              data:[],
              title:'',
              showTool:false
            }
        },
        created() {

        },
        mounted() {
          this.data=JSON.parse(localStorage.getItem("data"))
//          this.data=this.$route.query.data;
          console.log(localStorage.getItem("type"))
          if(localStorage.getItem("type")==0){
            this.title='待签收金票'
          }else if(localStorage.getItem("type")==1){
            this.title='可用金票'
          }else if(localStorage.getItem("type")==2){
            this.title='支付中金票'
          }else if(localStorage.getItem("type")==3){
            this.title='已支付金票'
          }else if(localStorage.getItem("type")==4){
            this.title='已到期金票'
          }else if(localStorage.getItem("type")==5){
            this.title='已驳回金票'
          }
          this.status=this.title.slice(0,this.title.length-2)
        },
        methods: {
          goback(){
            this.$router.go(-1);
          },
          submitRefuse(){
            let vm = this;
            let url='clcp/app/receive/gold/update/'+this.data.id;
            let params={
              "id": this.data.id,
              "tenantId": localStorage.getItem("tenantId"),
              "jinquanCode": this.data.jinquanCode,
              "jinquanOpenedId": this.data.jinquanOpenedId,
              "paymenterId": this.data.paymenterId,
              "openCube": this.data.openCube,
              "receiver":  this.data.receiver,
              "status": 4
            };
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
              if(res.statusCode==200){
                vm.$router.go(-1)
              }
            });
          },
          submitComfirm(){
            let vm = this;
            let url='clcp/app/receive/gold/update/'+this.data.id;
            let params={
              "id": this.data.id,
              "tenantId": localStorage.getItem("tenantId"),
              "jinquanCode": this.data.jinquanCode,
              "jinquanOpenedId": this.data.jinquanOpenedId,
              "paymenterId": this.data.paymenterId,
              "openCube": this.data.openCube,
              "receiver":  this.data.receiver,
              "status": 2
            };
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
              if(res.statusCode==200){
                vm.$router.go(-1)
              }
            });
          },
          presee(){
            let vm = this;
            let url='clcp/app/view/contract/'+this.data.id;
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
              if(res.statusCode==200){
                let myUrl=res.data;
                window.open(myUrl)
              }else{
                this.$dialog.toast({
                  mes: '此金票暂时无法预览 。',
                  timeout: 1500
                });
              }
            });
          },
          openmore(){
            console.log("aaa")
            this.showTool=!this.showTool

          },
          submit(type){
            this.showTool=!this.showTool;
            if(type==0){
              this.$dialog.confirm({
                title: '温馨提示',
                mes: '是否签收金票！',
                opts: () => {
                   this.submitComfirm()
                }
              });
            }else if(type==2){
              this.presee()
            }else if(type==3){
              console.log(this.data)
             this.$router.push({
               path:'/resouces',
               query:{
                 data:this.data
               }
             })
            }else if(type==1){
              this.$dialog.confirm({
                title: '温馨提示',
                mes: '该操作会将金票驳回 , 是否继续 ?',
                opts: () => {
                  this.submitRefuse()
                }
              });
            }
          },
          approval(){
            this.$router.push({path:'/comfirmPayment',
            query:{
              data:this.data
            }})
          },
          searchList(){
            this.$router.push({path:'/searchList',})
          },
          cashManagement(){
            this.$router.push({path:'/cashManagement'})
          },
          comfirm(){
            this.$router.push({path:'/cashComfirm'})
          }
        }

    }
</script>
<style scoped>
  #waitSign .yd-navbar-item span,i{
    color: white !important;
  }
  .loopHead{
    background-color: white;
    min-height: 50px;

    display: flex;
    /*border-bottom: solid 1px #eeeeee*/
  }
  .loopHeadP{
    color: #000000;
    font-family: 微软雅黑;
    font-size: 14px;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.34rem
  }
  .loopHeadM{
    color: #666666;
    font-family:  微软雅黑;
    font-size: 14px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:0.34rem
  }
  .content {
    position: absolute;
    top:1rem;
    margin-top: 0.2rem;
    width: 100%;
  }
  .popover{
    border: solid 1px #2A2A2A;
    position: fixed;
    top:0.8rem;
    right: 0.34rem;
    /*height: 1.76rem;*/
    width: 2.1rem;
    z-index: 99999;
    background-color: #2A2A2A ;
    opacity: 1;
    color: #FF9904 ;
    border-radius: 6px;
  }
  .item{
    width: 100%;
    text-indent: 0.16rem;
    height: 0.88rem;
    display: flex;
    align-items: center;
    padding-left: 0.2rem;
    font-size: 0.3rem;
  }
  .rightIcon{
    height: 0.32rem;
    width: 0.3rem;
    margin-right: 0.3rem;
    margin-left: 0.1rem;
  }
</style>

