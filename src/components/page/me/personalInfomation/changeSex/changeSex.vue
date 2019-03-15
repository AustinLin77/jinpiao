<template>
    <div>
      <yd-navbar title="性别" bgcolor="#FFFFFF" color="#030303">
        <router-link  slot="left" to="/personalInfo">
          取消
        </router-link>
        <yd-button type="primary" slot="right" @click.native="save">保存</yd-button>
      </yd-navbar>
      <yd-cell-group >
        <yd-cell-item type="radio">
          <span slot="left">男</span>
          <input slot="right" type="radio" value="男" v-model="picked"/>
        </yd-cell-item>
        <yd-cell-item type="radio">
          <span slot="left">女</span>
          <input slot="right" type="radio" value="女" v-model="picked"/>
        </yd-cell-item>
      </yd-cell-group>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              picked: '女'
            }
        },
        created() {

        },
        mounted() {
           this.picked=localStorage.getItem("picked")
        },
        methods: {
          save(){
            localStorage.setItem("picked",this.picked);
            this.$router.push({path:'personalInfo',  query: {
              picked: this.picked
            }})
          }
        }
    }
</script>


