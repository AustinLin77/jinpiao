<template>
    <div  >
      <yd-navbar title="姓名" bgcolor="#FFFFFF" color="#030303">
        <router-link  slot="left" to="/personalInfo">
         取消
        </router-link>
        <yd-button type="primary" slot="right" @click.native="save">保存</yd-button>
      </yd-navbar>
      <yd-input  required v-model="input1" max="20" placeholder="请输入用户名" class="myInput" ref="input"></yd-input>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              input1:''
            }
        },
        created() {

        },
        mounted() {
           this.input1=localStorage.getItem("name")
        },
        methods: {
          save(){
            let input = this.$refs.input;
            if(input.valid){
              localStorage.setItem("name",this.input1);
              this.$router.push({path:'personalInfo',  query: {
                name: this.input1
              }})
            }else{
              this.$dialog.notify({
                mes: "您输入的内容不符合，请重新输入",
                timeout: 2000,
                callback: () => {}
              });
            }
          }
        }

    }
</script>
<style>
  .yd-navbar-item>a{
    color: black;
  }
   #app .myInput{
    background-color: #eeeeee;
    width: 100%;
    height: 1rem;
    font-size: 0.28rem ;
    padding-left: 0.2rem;
    padding-right: 0.2rem;

  }
</style>

