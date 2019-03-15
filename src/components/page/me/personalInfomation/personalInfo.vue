<template>
    <div class="you">
      <yd-navbar title="个人信息" bgcolor="#FFFFFF" color="#030303" >
        <router-link  slot="left" to="/me">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </router-link>
        <!--<yd-button type="primary" slot="right">保存</yd-button>-->
      </yd-navbar>
      <div style="background-color:#eeeeee " >
        <yd-cell-group >
          <yd-cell-item arrow type="link" href="/changeName">
            <span slot="left">姓名</span>
            <span slot="right" style="color:#999999">{{name}}</span>
          </yd-cell-item>
          <yd-cell-item arrow type="link" href="/changeSex">
            <span slot="left">性别</span>
            <span slot="right" style="color:#999999">{{picked}}</span>
          </yd-cell-item>
          <yd-cell-item arrow type="link" href="/changeNum">
            <span slot="left">证件号</span>
            <span slot="right" style="color:#999999">{{num}}</span>
          </yd-cell-item>
          <yd-cell-item arrow type="link" href="/changeTel">
            <span slot="left">手机号</span>
            <span slot="right" style="color:#999999">{{tel}}</span>
          </yd-cell-item>
          <yd-cell-item arrow type="link" href="/changeMail">
            <span slot="left">邮箱</span>
            <span slot="right" style="color:#999999">{{mail}}</span>
          </yd-cell-item>
          <yd-cell-item arrow type="link" href="/changeDept">
            <span slot="left">部门</span>
            <span slot="right" style="color:#999999">{{dept}}</span>
          </yd-cell-item>
        </yd-cell-group>
      </div>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
              name:'',
              picked:'',
              num:'',
              tel:'',
              mail:'',
              dept:'',
              isBack:''
            }
        },
//      watch:{
//        $route(path,from){
//          console.log(path);
//          this.path = path.path;
//          console.log(this.path);
//        }
//      },
      beforeRouteEnter(to, from, next) {
        if(from.path!='/me'){
          from.meta.isBack=false;
        }else{
          from.meta.isBack=true;
        }
        next(vm => {
          if(from.meta.isBack){
            localStorage.setItem("name","哈哈哈");
            localStorage.setItem("picked","男");
            localStorage.setItem("num","11111111");
            localStorage.setItem("tel","13684515245");
            localStorage.setItem("mail","784512457@qq.com");
            localStorage.setItem("dept","信息中心");
          }
          vm.name=localStorage.getItem("name");
          vm.picked=localStorage.getItem("picked");
          vm.num=localStorage.getItem("num");
          vm.tel=localStorage.getItem("tel");
          vm.mail=localStorage.getItem("mail");
          vm.dept=localStorage.getItem("dept");
        });
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
   .you{
     height: 100%;
     width: 100%;
     background-color: #eeeeee;
   }
</style>

