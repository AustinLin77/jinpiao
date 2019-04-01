<template>
    <div>
      <yd-navbar title="账单查询" bgcolor="#789CF8" color="#FFFFFF">
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
      </yd-navbar>
      <div class="content" >
        <div class="loopHead">
          <div class="loopHeadP">付款方账户名称</div>
          <div class="loopHeadM">
           {{data.accountName}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">付款方账号</div>
          <div class="loopHeadM">
           {{data.account}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">付款方开户行</div>
          <div class="loopHeadM">
            {{data.openbank}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">收款方账户名称</div>
          <div class="loopHeadM">
            {{data.receiver}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">收款方银行账号</div>
          <div class="loopHeadM">
            {{data.receiverAccount}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">收款方开户银行</div>
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
          <div class="loopHeadP">交易时间</div>
          <div class="loopHeadM">
            {{data.transDate}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">交易类型</div>
          <div class="loopHeadM">
            {{data.transType}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">交易流水号</div>
          <div class="loopHeadM">
           {{data.runningNumber}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">借贷标识</div>
          <div class="loopHeadM">
            {{data.loanIdent}}
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">柜员交易号</div>
          <div class="loopHeadM">
            {{data.banksellerTradeno}}
          </div>
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
          }
        }

    }
</script>
<style scoped>

  .yd-navbar-item span,i{
    color: white !important;
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

