<template>
    <div class="he">
      <yd-navbar title="设置" bgcolor="#FFFFFF" color="#030303" >
        <router-link  slot="left" to="/me">
          <yd-navbar-back-icon >返回</yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <yd-cell-group >
        <yd-cell-item arrow >
          <span slot="left">指纹识别</span>
          <span slot="right" ></span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="/gesturePass">
          <span slot="left">设置手势密码</span>
          <span slot="right">已开启</span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="/changePass">
          <span slot="left">修改密码</span>
          <span slot="right"> </span>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">绑定微信</span>
          <span slot="right">已绑定</span>
        </yd-cell-item>
      </yd-cell-group>
      <div class="footer">
        <yd-button size="large" type="primary" class="myBut" @click.native="quit">安全退出</yd-button>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {
          quit(){
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            localStorage.removeItem("userId");
            localStorage.removeItem("tenantId");
            this.$router.push({path:'/login'})
          }
        }

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
