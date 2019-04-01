<template>
    <div id="realName">
      <yd-navbar title="实名认证" bgcolor="#789CF8" color="#ffffff" >
        <div slot="left" @click="goback">
          <yd-navbar-back-icon ></yd-navbar-back-icon>
        </div>
      </yd-navbar>
      <div class="content">
        <yd-cell-item class="item" @click.native="goCompany">
          <span slot="left" class="left">完善公司信息</span>
          <span slot="right">
            <yd-progressbar :progress="progress1" trail-width="6" stroke-width="8" stroke-color="#eeeeee"
                            trail-color="#5FCAFF"
                            fill-color="#ffffff" class="process" >{{progress1 * 100}}%
            </yd-progressbar>
          </span>
        </yd-cell-item>
        <yd-cell-item class="item" @click.native="goLawyer">
          <span slot="left" class="left">完善法人信息</span>
          <span slot="right">
            <yd-progressbar :progress="progress2" trail-width="6" stroke-width="8" stroke-color="#eeeeee"
                            trail-color="#A7E6A3"
                            fill-color="#ffffff" class="process" >{{progress2 * 100}}%
            </yd-progressbar>
          </span>
        </yd-cell-item>
        <yd-cell-item class="item" @click.native="goHandler">
          <span slot="left" class="left">完善经办人信息</span>
          <span slot="right">
            <yd-progressbar :progress="progress3" trail-width="6" stroke-width="8" stroke-color="#eeeeee"
                            trail-color="#8CACEA"
                            fill-color="#ffffff" class="process" >{{progress3 * 100}}%
            </yd-progressbar>
          </span>
        </yd-cell-item>
        <yd-cell-item class="item"  @click.native="goPermission">
          <span slot="left" class="left">完善审核人信息</span>
          <span slot="right">
            <yd-progressbar :progress="progress4" trail-width="6" stroke-width="8" stroke-color="#eeeeee"
                            trail-color="#DFDD90"
                            fill-color="#ffffff" class="process" >{{progress4 * 100}}%
            </yd-progressbar>
          </span>
        </yd-cell-item>
        <yd-cell-item class="item" @click.native="goTicket">
          <span slot="left" class="left">完善发票信息</span>
          <span slot="right">
            <yd-progressbar :progress="progress5" trail-width="6" stroke-width="8" stroke-color="#eeeeee"
                            trail-color="#DBC59F"
                            fill-color="#ffffff" class="process" >{{progress5 * 100}}%
            </yd-progressbar>
          </span>
        </yd-cell-item>
        <yd-cell-item class="item" @click.native="goSend">
          <span slot="left" class="left">完善邮寄信息</span>
          <span slot="right">
            <yd-progressbar :progress="progress6" trail-width="6" stroke-width="8" stroke-color="#eeeeee"
                            trail-color="#CE92DD"
                            fill-color="#ffffff" class="process" >{{progress6 * 100}}%
            </yd-progressbar>
          </span>
        </yd-cell-item>

      </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
              progress1:0.75,
              progress2:0.75,
              progress3:0.75,
              progress4:0.75,
              progress5:0.75,
              progress6:0.75,

            }
        },
        created() {

        },
        mounted() {

        },
        methods:{
          goCompany(){
            this.$router.push({path:'/fillCompanyInfo'})
          },
          goLawyer(){
            this.$router.push({path:'/fillLawyerInfo'})
          },
          goHandler(){
            this.$router.push({path:'/fillHandlerInfo'})
          },
          goPermission(){
            this.$router.push({path:'/fillPermisstionInfo'})
          },
          goTicket(){
            this.$router.push({path:'/fillTicketInfo'})
          },
          goSend(){
            this.$router.push({path:'/fillSendInfo'})
          },
          goback(){
            this.$router.push({path:'/indexpage'})
          },

        }

    }
</script>
<style scoped>
  #realName .yd-navbar-item span{
    color: white!important;
  }
  .content{
    margin-top: 0.88rem;
    width: 100%;
  }
  .item{
    height: 1.4rem;
    width: 100%;
    margin-bottom: 0.2rem;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 10px 0px rgba(80, 113, 240, 0.2);
  }
  .left{
    font-size: 0.34rem;
    margin-left: 0.1rem;
  }
  .process{
    width: 0.96rem;
    height: 0.96rem;
  }
</style>

