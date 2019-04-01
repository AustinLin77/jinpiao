<template>
    <div>
      <yd-navbar title="转账提现" bgcolor="#789CF8" color="#FFFFFF">
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
      </yd-navbar>
      <div class="content" >
        <div class="loopHead">
          <div class="loopHeadP">支付方式</div>
          <div class="loopHeadM">
            银联支付
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">付款账户</div>
          <div class="loopHeadM">
            {{data.account}}

          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">付款方</div>
          <div class="loopHeadM">
           {{data.compName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">付款开户银行</div>
          <div class="loopHeadM">
            {{data.openbank}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">收款账户</div>
          <div class="loopHeadM">
            {{data.receiverAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">收款方</div>
          <div class="loopHeadM">
            {{data.receiver}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">收款开户银行</div>
          <div class="loopHeadM">
            {{data.receiverOpenbank}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">金额</div>
          <div class="loopHeadM">
            {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">大写金额</div>
          <div class="loopHeadM">
            {{data.amount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">摘要</div>
          <div class="loopHeadM">
            {{data.summary}}
          </div>
        </div>
        <div class="footer">
          <button class="buttr"  @click="sub">经办人确认</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              data:{}
            }
        },
        created() {

        },
        mounted() {
          this.data=this.$route.query.data

        },
        methods: {
          goback(){
            this.$router.go(-1)
          },
          sub(){
            let vm = this;
            let url='/clcp/app/cash/manager';
            let params={
              "account": this.data.account,
              "accountName": "张留存",
              "amount": "20000",
              "approvalDate": null,
              "balance": 7698000,
              "balanceId": 0,
              "bankBalance": 94670965.22,
              "colSort": null,
              "committedPaydate": null,
              "compId": 0,
              "compName": "欣旺达电子股份有限公司",
              "createAt": "2019-03-07 15:59:52",
              "createBy": "1006879801207685121",
              "currency": "CNY",
              "currentUser": null,
              "filterIds": null,
              "id": "1103565915993145344",
              "initiator": "",
              "jinquanId": "1103565915993145344",
              "lang": "zh",
              "openAmount": 0,
              "openCube": "欣旺达电子股份有限公司",
              "openDate": null,
              "openbank": "中信银行",
              "originalAmount": 0,
              "pageNum": 1,
              "pageSize": 10,
              "receiver": "深圳市诚和电子有限公司",
              "receiverAccount": "4201021006325979526",
              "receiverBranch": "深圳市平安支行",
              "receiverOpenbank": "中信银行",
              "remark": "注意查收钱额",
              "runningNumber": "",
              "sqlMap": {},
              "status": 2,
              "summary": "注意查收钱额",
              "tenantId": "1021581498458832896",
              "transType": 0,
              "type": 1,
              "unitedbankCode": "3635214",
              "updateAt": "2019-03-07 15:59:52",
              "updateBy": "1006879801207685121",
              "vbankAccountId": 0,
              "capitalMoney": "贰万元整"
            };
            let heads={
              "Content-Type": "application/json",
              "Accept": "application/json",
              "X-TenantId": localStorage.getItem("tenantId"),
              "X-Logined-Sign": localStorage.getItem("username"),
              "Authorization": 'Bearer '+localStorage.getItem("token"),
              "Prefer-Lang": "zh-CN"
            };
            vm.api(vm,heads,'post',url,params,function (res) {
              console.log(res);

            });
            this.$router.push({path:'/ticketPayments'})
          }
        }

    }
</script>
<style scoped>
  .yd-navbar-item span,i{
    color: white !important;
  }
  .buttr{
    width: 3rem;
    height: 0.84rem;
    border-radius: 4px;
    color: #fff;
    font-size:0.32rem ;
    background-color: rgba(24, 148, 241, 1);
    border: 1px solid rgba(30, 129, 210, 1);
  }
  .footer{
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loopHead{
    background-color: white;
    min-height: 50px;

    display: flex;
    border-bottom: solid 1px #eeeeee
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
    width: 100%;
  }
</style>

