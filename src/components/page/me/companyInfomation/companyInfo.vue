<template>
    <div >
      <yd-navbar title="企业信息" bgcolor="#FFFFFF" color="#030303" :fixed="head">
          <router-link  slot="left" to="/me">
            <yd-navbar-back-icon ></yd-navbar-back-icon>
          </router-link>
        <yd-button type="primary" slot="right" @click.native="save">保存</yd-button>
      </yd-navbar>
      <div class="content">
        <div class="loopHead">
          <div class="loopHeadP">企业全称</div>
          <div class="loopHeadM">
            欣旺达电子股份有限公司
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">简称</div>
          <div class="loopHeadM">
            欣旺达电子
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">经营年限</div>
          <div class="loopHeadM">
            10-15年
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业规模</div>
          <div class="loopHeadM">
            1000-9999人
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">所属行业</div>
          <div class="loopHeadM">
            制造业
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">注册资金</div>
          <div class="loopHeadM">
            1000万
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">法人代表</div>
          <div class="loopHeadM">
            王明旺
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">组织机构代码</div>
          <div class="loopHeadM">
            1545145269585485
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">联系人</div>
          <div class="loopHeadM">
            <input  class="myInput" v-model="person" placeholder="请填写联系人">
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">联系电话</div>
          <div class="loopHeadM">
            15485965265
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">QQ</div>
          <div class="loopHeadM">
            458545182
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">企业官网</div>
          <div class="loopHeadM">
            www.sunwoda.com
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">联系邮箱</div>
          <div class="loopHeadM">
            contact@sunwoda.com
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">邮编</div>
          <div class="loopHeadM">
            515081
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">地址</div>
          <div class="loopHeadM">
            深圳市宝安区
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              head:true,
              person:''
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {}

    }
</script>
<style scoped>
  .yd-navbar {
    border-bottom: 1px solid #eeeeee;
  }
  .yd-btn-primary:not(.yd-btn-loading) {
    background-color: deepskyblue;
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
    padding-left: 15px
  }
  ::-webkit-scrollbar{
    display:none;
  }
  .loopHeadM{
    color: #9E9C9C;
    font-family:  微软雅黑;
    font-size: 14px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right:15px
  }
  #app .myInput{
    width: 100%;
    border: none;
    text-align: end;
    background-color: white;
  }
  .content{
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    overflow: scroll;
    height: calc(100% - 50px);
  }
</style>

