<template>
  <yd-layout class="indexpage">
    <yd-navbar title="金票" bgcolor="#FFFFFF" color="#030303" :fixed="top">
    </yd-navbar>
    <div style="position: absolute;top: 50px;">
      <yd-slider autoplay="3000">
        <yd-slider-item >
          <img src="../../../assets/banner1.png">
        </yd-slider-item>
      </yd-slider>

      <yd-grids-group :rows="4" >
        <yd-grids-item v-for="(item,index) in appliances" :key="index">
          <img slot="icon" :src="item.img" >
          <span slot="text">{{item.title}}</span>
        </yd-grids-item>
      </yd-grids-group>
      <div class="itemcont">
        <div class="itemtitle">平台累计信息</div>
        <div class="itemmess">
          <div class="itemtop">
            <p>累计交易</p>
            <p>0.12802亿</p>
          </div>
          <div class="itemflexbox">
            <div>
              <span>核心企业</span>
              <span>一家</span>
            </div>
            <div @click="goRegisterList">
              <span>注册企业</span>
              <span>67家</span>
            </div>
            <div>
              <span>开立金票</span>
              <span>0.60744亿</span>
            </div>
            <div>
              <span>保理融资</span>
              <span>0.40909亿</span>
            </div>
          </div>
        </div>
      </div>
      <div class="itemcont">
        <div class="itemtitle">业务推广</div>
        <div class="itemmess">
          <div class="itemtop">
            <p>累计交易</p>
            <p>0.12802亿</p>
          </div>
          <div class="itemflexbox">
            <div>
              <span>核心企业</span>
              <span>一家</span>
            </div>
            <div>
              <span>注册企业</span>
              <span>67家</span>
            </div>
            <div>
              <span>开立金票</span>
              <span>0.60744亿</span>
            </div>
            <div>
              <span>保理融资</span>
              <span>0.40909亿</span>
            </div>
          </div>
        </div>
      </div>
    </div>




  </yd-layout>
</template>

<script>

  import img4 from '../../../assets/iconImg/4.png'
  import img5 from '../../../assets/iconImg/5.png'
  import img7 from '../../../assets/iconImg/7.png'
  import img10 from '../../../assets/iconImg/10.png'
    export default {
        data () {
            return {
              top:true,
              appliances:[
              {
                  title:'企业授信',
                  img:img4,
                  path:""
                },
                {
                  title:'金票审批',
                  img:img7,
                  path:""
                },
                {
                  title:'UKEY审核',
                  img:img5,
                  path:""
                }, {
                  title:'企业用户',
                  img:img10,
                  path:""
                },
              ]
            }
        },
        mounted: function(){



        },
        methods:{
            async getwaitlist(action,pram){
                let vm = this;
                let res = await this.$fetch('数据加载中',
                    vm.$path + action,
                    {
                        userId:vm.userId,
                        "page.currentPage":1,
                        "tDocument.createDate":"",
                        "tDocument.updateDate":"",
                        "tDocument.system":"",
                        "tDocument.type":"",
                        "tDocument.no":"",
                        "tDocument.createUser":"",
                        "page.pageSize":4,
                    }
                ).catch(function () {
                    vm.$emit("setdotnum","")
                });

                if(res.respResult.code == 0){
                    vm.listData =  vm.listData.concat(res.results);
                    vm.totalCount = res.totalCount;
                    vm.$emit("setdotnum",res.totalCount);
                }else {
                    vm.$dialog.toast({
                        mes: res.msg,
                        timeout: 1500
                    });
                }
            },
            goRegisterList(){
              this.$router.push({path:'registerList'})
            }
        }

    }
</script>

<style scoped>
  .indexpage{
     width: 100%;
     height: 100%;
    background-color: #fff;
  }
  .itemcont{
    padding: 0 0.26rem 0.3rem;
  }
  .itemcont .itemtitle{
     font-size: 0.32rem;
     color: black;
  }
  .itemcont .itemmess{
     background-color: #d0d0d0;
     border-radius: 8px;
     margin-top: 10px;
  }
  .itemtop{
      padding: 0.3rem 0;
  }
  .itemtop>p{
    text-align: center;
    font-size: 0.28rem;
    margin-top: 0.3rem;
  }
  .itemflexbox{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .itemflexbox>div{
     display: flex;
     flex: 1;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
  .itemflexbox>div>span{
    margin-bottom: 0.3rem;
    font-size: 0.22rem;
  }



</style>
