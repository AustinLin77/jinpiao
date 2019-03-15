<template>
    <div>
      <yd-navbar title="手势密码" bgcolor="#FFFFFF" color="#030303" >
        <router-link  slot="left" to="/set">
          <yd-navbar-back-icon >返回</yd-navbar-back-icon>
        </router-link>
      </yd-navbar>
      <yd-cell-group >
        <yd-cell-item >
          <span slot="left">手势密码</span>
          <span slot="right" >
            <yd-switch v-model="switch1"></yd-switch>
          </span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="/changeGesturePass">
          <span slot="left">修改手势密码</span>
          <span slot="right"></span>
        </yd-cell-item>
      </yd-cell-group>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              switch1:true
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {}

    }
</script>


