<template>
  <div>
    <yd-navbar title="注册企业" bgcolor="" color="#555" style="border-bottom: solid 1px #ccc">
      <router-link  slot="left" to="/indexpage">
        <yd-navbar-back-icon >返回</yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <yd-cell-group>
      <yd-cell-item v-for="item in companyList" :key="item.name" >
        <span slot="left" >{{item.name}}</span>
      </yd-cell-item>
    </yd-cell-group>
  </div>
</template>

<script>

    export default {
        data () {
            return {
              companyList:[]
            }
        },
        mounted: function(){
           this.getRegisterList()
        },
        methods:{
          getRegisterList(){
            let vm = this;
            let url='clcp/app/authed/company/list';
            let params={};
            let heads={
              "Content-Type": "application/json",
              "Accept": "application/json",
              "X-TenantId": localStorage.getItem("tenantId"),
              "X-Logined-Sign": localStorage.getItem("username"),
              "X-UserId":localStorage.getItem("userId"),
              "Authorization": 'Bearer '+localStorage.getItem("token"),
              "Prefer-Lang": "zh-CN"
            };
            vm.api(vm,heads,'get',url,params,function (res) {
              console.log(res);
              vm.companyList=res.data;
            })
          },
          goback(){
            console.log("aa")
            this.$router.go(-1)
          }
        }

    }
</script>

<style scoped>
  .yd-cell-item{
    border-bottom: 1px solid #eeeeee;
  }
</style>
