<template>
    <div>
      <yd-navbar title="修改密码" bgcolor="#FFFFFF" color="#030303" >
        <router-link  slot="left" to="/set">
          <yd-navbar-back-icon >返回</yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <yd-cell-group>
        <yd-cell-item>
        <span slot="left">旧密码：</span>
        <yd-input slot="right" type="password" v-model="oldPass" placeholder="请输入旧密码"></yd-input>
      </yd-cell-item>
        <yd-cell-item>
          <span slot="left">新密码：</span>
          <yd-input slot="right" type="password" v-model="newPass" placeholder="请输入新密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">确认密码：</span>
          <yd-input slot="right" type="password" v-model="comfirmPass" placeholder="请确认新密码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <div class="footer">
        <yd-button size="large" type="primary" class="myBut">完成</yd-button>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              oldPass:'',
              newPass:'',
              comfirmPass:''
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
  .footer{
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .myBut{
    width: 60%;
    background-color: #1894F1 ;
    height: 0.8rem;
    border-radius: 4px;
  }
</style>

