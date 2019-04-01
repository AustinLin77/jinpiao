<template>
  <div style="height: 100%;overflow: hidden" id="company">
    <yd-navbar title="金票还款" bgcolor="#789CF8" color="#FFFFFF">
      <div  slot="left"  @click="goback">
        <yd-navbar-back-icon ></yd-navbar-back-icon>
      </div>
    </yd-navbar>
    <div class="top">
      <div class="topcont">
          <div>可用金额总额度</div>
          <div>3251546541.10</div>
      </div>
    </div>
    <div class="content">
      <div class="content_con">
        <div class="content_con_top">金票还款管理</div>
        <div class="content_con_con">
          <yd-grids-group :rows="3" >
            <yd-grids-item  @click.native="goItem('repaymanage')">
              <img slot="icon" src="../../../../../assets/iconImg/1.png" >
              <span slot="text">还款管理</span>
            </yd-grids-item>
            <yd-grids-item  @click.native="goItem('tgstage')">
              <img slot="icon" src="../../../../../assets/iconImg/2.png" >
              <span slot="text">托管账户信息</span>
            </yd-grids-item>
          </yd-grids-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {

      }
    },
    created() {

      function fun(n,o) {
        console.log(o);
        return {
          fun:function(m) {
            return fun(m,n);
          }
        };
      }
      var a = fun(0); a.fun(1);  a.fun(2);  a.fun(3);
    },
    mounted() {

    },
    methods: {
      goback(){
        this.$router.go(-1);
      },
      goItem(path) {
        console.log(path)
        this.$router.push({path: path});
      }

    }
  }
</script>
<style scoped>
  .yd-navbar-item span,i{
    color: white !important;
  }
.top{
  background-color: #789CF8;
  padding:0.5rem 0.76rem 0.76rem 0.76rem;
}
  .top .topcont{
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    text-align: center;
    font-size: 0.36rem;
    color: #FF9904;
    padding: 0.54rem 0;
    font-weight: 600;
  }
.topcont>div:last-child{
  font-size: 0.52rem;
  margin-top: 10px;
}
  .content{
    padding: 0.66rem 0.34rem;
  }
.content .content_con{
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
.content_con .content_con_top{
  color: rgba(65, 65, 65, 1);
  font-size: 0.32rem;
  border-bottom: solid 1px #eee;
  padding: 0.24rem 0.42rem;
}
  .yd-navbar{
    border: none;
  }
</style>


