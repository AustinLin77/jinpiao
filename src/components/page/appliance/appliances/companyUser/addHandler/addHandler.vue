<template>
    <div>
      <yd-navbar :title="type" bgcolor="#FFFFFF" color="#030303" >
        <router-link  slot="left" to="/companyUser">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </router-link>
        <yd-button type="primary" slot="right" @click.native="save">保存</yd-button>
      </yd-navbar>
      <div class="content">
        <div class="loopHead">
          <div class="loopHeadP">性别</div>
          <div class="loopHeadM">
            <select style="width: 100%;height: 80%;border: none" v-model="sex">
              <option value="">选择性别</option>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">用户名</div>
          <div class="loopHeadM">
            <yd-input  required v-model="nickName" max="20" placeholder="请输入用户名" ref="nickName"></yd-input>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">姓氏</div>
          <div class="loopHeadM">
            <yd-input  required v-model="preName" max="20" placeholder="请输入姓氏" ref="preName"></yd-input>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">名称</div>
          <div class="loopHeadM">
            <yd-input  required v-model="name" max="20" placeholder="请输入名称" ref="name"></yd-input>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">电话</div>
          <div class="loopHeadM">
            <yd-input  required v-model="tel" max="20" placeholder="请输入电话"  ref="tel" regex="/^1[34578]\d{9}$/"></yd-input>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">邮箱</div>
          <div class="loopHeadM">
            <yd-input  required v-model="mail" max="20" placeholder="请输入邮箱"  ref="mail" regex="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"></yd-input>
          </div>
        </div>
        <div class="loopHead">
          <div class="loopHeadP">部门</div>
          <div class="loopHeadM">
            <yd-input  required v-model="dept" max="20" placeholder="请输入部门" ref="dept"></yd-input>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              type:'',
              nickName:'',
              sex:'',
              preName:'',
              tel:'',
              mail:'',
              dept:'',
              name:''
            }
        },
        created() {

        },
        mounted() {
          if(this.$route.query.type===0){
            this.type='经办人'
          }else{
            this.type='审核人'
          }
        },
        methods: {
          //保存方法，为空或者不符合规则提示并不保存
          save(){
            if(this.$refs.name.valid&&this.$refs.tel.valid&&this.$refs.mail.valid&&this.$refs.nickName.valid&&this.$refs.dept.valid&&this.$refs.preName.valid&&this.sex!==''){
              this.$dialog.confirm({
                title: '温馨提示',
                mes: '新增成功 !',
                opts: () => {
                  this.$router.push({path:'companyUser'})
                }
              });
            }else{
              this.$dialog.notify({
                mes: "您提交的内容不完整或有误，请重新输入",
                timeout: 2000,
                callback: () => {}
              });
            }
          }
        }

    }
</script>
<style scoped>
  .yd-navbar {
    border-bottom: 1px solid #eeeeee;
  }

  .loopHead{
    background-color: white;
    min-height: 50px;
    display: flex;

  }
  .loopHeadP{
    color: #9E9C9C;
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

