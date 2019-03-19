<template>
  <div>
    <div style="width: 100%;height: 2.8rem;position: absolute;top:0;left: 0 ;" id="top">
      <div style="width: 100%;height: 1rem;display: flex;align-items: center;">
        <input style="margin-left: 0.4rem;height: 0.6rem;width: 70%;border-radius: 0.5rem;border: 1px solid white;text-indent: .8rem;color: white;">
        <yd-icon name="search" size=".3rem" color="#fff" style="position: absolute;top:0.35rem;left: 0.7rem"></yd-icon>
      </div>
      <div style="display: flex;width: 100%;height: 1.8rem">
        <div style="flex: 1;display: flex;align-items: center;justify-content: center" v-for="item in topItem">
          <div>
            <img :src="item.img" style="width: 1rem;height: 1rem">
            <div style="text-align: center;color:white;">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div  style="position: absolute;top: 2.8rem;width: 100%;left: 0;bottom:0;overflow: scroll">
      <div id="myGrid">
        <yd-grids-group :rows="5" >
          <yd-grids-item v-for="(item,index) in appliances" :key="index">
            <img slot="icon" :src="item.img" style="width: 0.5rem;height: 0.5rem">
            <div slot="text">{{item.title}}</div>
          </yd-grids-item>
        </yd-grids-group>
      </div>
      <div style="width: 100%;height: 1rem;display: flex;align-items: center;margin: 0.2rem 0">
        <img src="../../../assets/iconImg/头条.png" style="width: 0.9rem;height: 0.45rem;margin-left: 0.3rem">
        <yd-rollnotice autoplay="2000" style="margin-left: 0.25rem;font-size: 0.3rem">
          <yd-rollnotice-item>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
          <yd-rollnotice-item>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
          <yd-rollnotice-item>京东服饰 早春新品低至7折</yd-rollnotice-item>
        </yd-rollnotice>
        <!--<div style="margin-left: 0.25rem;font-size: 0.3rem">这是新闻这是新闻</div>-->
      </div>

      <div style="padding: 0 0.2rem">
        <yd-slider autoplay="3000">
          <yd-slider-item >
            <img src="../../../assets/iconImg/bannerMid.png">
          </yd-slider-item>
        </yd-slider>
      </div>
      <div style="width: 100%;height: 0.6rem;display: flex;justify-content: flex-end;align-items: center;margin-top: 0.3rem">
        <span style="color: black;font-size: 0.32rem;flex: 1;font-weight: bold;margin-left: 0.3rem">平台累计信息</span>
        <span style="font-size: 0.2rem;width: .8rem;color: #666666">更多</span>
      </div>
      <div style="width: 100%;height: 1.8rem;padding: 0 0.3rem;display: flex;margin-top: 0.2rem">

        <div style="flex: 1;height:100%;background-color: #eeeeee;display: flex;align-items: center;">
          <div  style="padding-left: 0.2rem">
            <div style="font-size: 0.3rem"> 累计交易</div>
            <div style="font-size: 0.3rem;color: red;margin-top: 0.2rem">0.12323亿元</div>
          </div>
        </div>
        <div style="flex: 1;height:100%;background-color: #eeeeee;border-left: 1px solid white;border-right: 1px solid white;display: flex;align-items: center">
          <div style="padding-left: 0.2rem">
            <div style="font-size: 0.3rem"> 核心企业</div>
            <div style="font-size: 0.3rem;color: red;margin-top: 0.2rem">1家</div>
          </div>
        </div>
        <div style="flex: 1;height:100%;background-color: #eeeeee;display: flex;;align-items: center">
          <div  style="padding-left: 0.2rem">
            <div style="font-size: 0.3rem"> 注册企业</div>
            <div style="font-size: 0.3rem;color: red;margin-top: 0.2rem">67家</div>
          </div>
        </div>
      </div>
  </div>
 </div>
</template>

<script>
  import repay from '../../../assets/iconImg/金票还款.png'
  import edu from '../../../assets/iconImg/金票额度.png'
  import shenhe from '../../../assets/iconImg/金票审核.png'
  import sao from '../../../assets/iconImg/saoyisao.png'
  import user from '../../../assets/iconImg/企业用户.png'
  import shouxin from '../../../assets/iconImg/企业授信.png'
  import realName from '../../../assets/iconImg/实名认证.png'
  import ukey from '../../../assets/iconImg/Ukey授权.png'
  import jinpiaoedu from '../../../assets/iconImg/金票额度-1.png'
  import jinpiaoshenhe from '../../../assets/iconImg/金票审核-1.png'
  import huankuang from '../../../assets/iconImg/金票还款-1.png'
  import rongzi from '../../../assets/iconImg/金票融资.png'
  import more from '../../../assets/iconImg/全部.png'
  import shouzhi from '../../../assets/iconImg/金票收支.png'
    export default {
        data () {
            return {
              top:true,
              topItem:[{
                title:'扫一扫',
                img:sao,
                path:''
              },
                {
                  title:'金票审核',
                  img:shenhe,
                  path:''
                },
                {
                  title:'金票额度',
                  img:edu,
                  path:''
                },
                {
                  title:'金票还款',
                  img:repay,
                  path:''
                }],
              appliances:[
                {
                  title:'企业用户',
                  img:user,
                  path:""
                },
              {
                  title:'企业授信',
                  img:shouxin,
                  path:""
                },
                {
                  title:'实名认证',
                  img:realName,
                  path:""
                },
                {
                  title:'UKEY审核',
                  img:ukey,
                  path:""
                },
                {
                  title:'金票额度',
                  img:jinpiaoedu,
                  path:""
                },
               {
                  title:'金票审核',
                  img:jinpiaoshenhe,
                  path:""
                },
                {
                  title:'金票还款',
                  img:huankuang,
                  path:""
                },
                {
                  title:'金票收支',
                  img:shouzhi,
                  path:""
                },
                {
                  title:'金票融资',
                  img:rongzi,
                  path:""
                },
                {
                  title:'更多',
                  img:more,
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
  #myGrid .yd-grids-item{
    padding: 0.1rem 0;
    font-size: 0.2rem;
  }

  #myGrid .yd-grids-txt{
    font-size: 0.08rem;
  }

  #top{
    background-image:url(../../../assets/iconImg/shang.png)
  }
  .indexpage{
    overflow: hidden;
  }
  /*.indexpage{*/
     /*width: 100%;*/
     /*height: 100%;*/
    /*background-color: #fff;*/
  /*}*/
  /*.itemcont{*/
    /*padding: 0 0.26rem 0.3rem;*/
  /*}*/
  /*.itemcont .itemtitle{*/
     /*font-size: 0.32rem;*/
     /*color: black;*/
  /*}*/
  /*.itemcont .itemmess{*/
     /*background-color: #d0d0d0;*/
     /*border-radius: 8px;*/
     /*margin-top: 10px;*/
  /*}*/
  /*.itemtop{*/
      /*padding: 0.3rem 0;*/
  /*}*/
  /*.itemtop>p{*/
    /*text-align: center;*/
    /*font-size: 0.28rem;*/
    /*margin-top: 0.3rem;*/
  /*}*/
  /*.itemflexbox{*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*margin-top: 10px;*/
  /*}*/
  /*.itemflexbox>div{*/
     /*display: flex;*/
     /*flex: 1;*/
     /*flex-direction: column;*/
     /*justify-content: center;*/
     /*align-items: center;*/
  /*}*/
  /*.itemflexbox>div>span{*/
    /*margin-bottom: 0.3rem;*/
    /*font-size: 0.22rem;*/
  /*}*/



</style>
