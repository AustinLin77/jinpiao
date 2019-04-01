<template>
  <yd-layout id="main">

    <router-view @setdotnum="setdotnum"></router-view>
    <yd-tabbar slot="tabbar" active-color="#007aff" :exact="false">
      <yd-tabbar-item title="首页" link="indexpage" :active ="path=='/indexpage'" replace>
        <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="应用" link="appliance" :active ="path=='/appliance'" replace>
        <yd-icon name="share1" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="消息" link="message" :active ="path=='/message'" replace>
        <yd-badge slot="badge" type="danger" v-if="dotnum && dotnum!=0">{{dotnum}}</yd-badge>
        <yd-icon name="more" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" link="me" :active ="path=='/me'" replace>
        <yd-icon name="type" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>

  </yd-layout>
</template>

<script>
    export default {

        name: 'HelloWorld',
        data () {
            return {
                path:"/indexpage",
                dotnum:''
            }
        },
        watch:{
            $route(path,from){
                console.log(path);
                this.path = path.path;
                console.log(this.path);
            }
        },
        created:function () {
            console.log(this.path);
            this.path = this.$route.path;
        },
        methods:{
            setdotnum(num){
                console.log("num",num);
                this.dotnum = num
            }
        }
    }
</script>

<style scoped>
.activedtab{
  color: aquamarine;
}

</style>
