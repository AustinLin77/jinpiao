<template>
    <div id="payment">
      <yd-navbar title="支付" bgcolor="#789CF8" color="#FFFFFF">
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
      </yd-navbar>
      <div class="content">
        <div class="item">
          <div class="itemHead">
            支付方信息
          </div>
          <div class="loopHead">
            <div class="loopHeadP">支付方</div>
            <div class="loopHeadM">
              aaa
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">金票编号</div>
            <div class="loopHeadM">
              aaaa
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">金票余额(元)</div>
            <div class="loopHeadM">
              aaaaa
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">可用净额</div>
            <div class="loopHeadM">
              aaaaaa
            </div>
          </div>
        </div>
        <div class="item" style="margin-top: 0.5441rem">
          <div class="itemHead" >
            接收方信息
          </div>
          <div class="loopHead">
            <div class="loopHeadP">接收方</div>
            <div class="loopHeadM">
              <select >
                <option value="">请选择</option>
                <option value="1">支付宝</option>
                <option value="2">微信</option>
                <option value="3">财付通</option>
              </select>
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">付款日期</div>
            <div class="loopHeadM">
              <yd-datetime type="date" v-model="payTime" style="text-align: right" ></yd-datetime>
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">接收方税务登记号</div>
            <div class="loopHeadM">
              <input  class="addCreditInput" v-model="code" placeholder="请输入">
            </div>
          </div>
        </div>
        <div class="item" style="margin-top: 0.5441rem">
          <div class="itemHead">
            交易信息
          </div>
          <div class="loopHead">
            <div class="loopHeadP">合同编号</div>
            <div class="loopHeadM">
              <input  class="addCreditInput" v-model="num" placeholder="请输入">
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">发票号码</div>
            <div class="loopHeadM">
              <input  class="addCreditInput" v-model="ticketCode" placeholder="请输入">
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">金额</div>
            <div class="loopHeadM">
              <input  class="addCreditInput" v-model="cost" placeholder="请输入">
            </div>
          </div>
          <div class="loopHead">
            <div class="loopHeadP">大写金额</div>
            <div class="loopHeadM">
             带出
            </div>
          </div>
        </div >
        <div class="footer">
          <button class="buttr"  @click="sub">审核UKey确认</button>
        </div>
      </div>

    </div>

</template>

<script>
    export default {
        data: function () {
            return {
              payTime:''
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
          goback(){
            this.$router.go(-1)
          },
          sub(){
            this.$dialog.confirm({
              title: '支付确认',
              mes: '确认向接收方 深圳市欣旺达电子股份有限公司 支付金票额度为80 ，是否继续 ?',
              opts: () => {
                this.$router.go(-1)
              }
            });
          }
        }

    }
</script>
<style scoped>
  .buttr{
    width: 3rem;
    height: 0.84rem;
    border-radius: 4px;
    color: #fff;
    background-color: rgba(24, 148, 241, 1);
    border: 1px solid rgba(30, 129, 210, 1);
  }
  .footer{
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  select{
    width: 2rem;
    border: none;
    direction: rtl;
  }
  #payment .yd-navbar-item span,i{
    color: white !important;
  }
  .content{
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    height:calc(100% - 1rem);
    overflow: scroll;
  }
  .item{
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #eeeeee;
  }
  .itemHead{
    height: 0.952rem;
    width: 100%;
    color: #F47648;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.32rem;
    border-bottom: 1px solid #eeeeee;
  }
  .loopHead{
    background-color: white;
    min-height: 0.952rem;

    display: flex;
    border-bottom: solid 1px #eeeeee
  }
  .loopHeadP{
    color: #000000;
    font-family: 微软雅黑;
    font-size: 0.28rem;
    min-width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.34rem
  }
  .loopHeadM{
    color: #666666;
    font-family:  微软雅黑;
    font-size:0.28rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:0.34rem
  }
  #app .addCreditInput{
    width: 100%;
    border: none;
    text-align: end;
    background-color: white;
    color:#666666;
    height: 60%;
    outline:none
  }
</style>

