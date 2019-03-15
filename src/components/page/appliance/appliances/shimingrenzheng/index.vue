<template>
  <div class="appliance">
    <yd-navbar title="应用" bgcolor="" color="#555" style="border-bottom: solid 1px #ccc">
    </yd-navbar>
    <yd-grids-group :rows="4" >
      <yd-grids-item  v-for="(item,index) in appliances" :key="index">
        <img slot="icon" :src="item.img" >
        <span slot="text">{{item.title}}</span>
      </yd-grids-item>
    </yd-grids-group>
  </div>
</template>

<script>
    import img1 from '../../../assets/iconImg/1.png'
    import img2 from '../../../assets/iconImg/2.png'
    import img3 from '../../../assets/iconImg/3.png'
    import img4 from '../../../assets/iconImg/4.png'
    import img5 from '../../../assets/iconImg/5.png'
    import img6 from '../../../assets/iconImg/6.png'
    import img7 from '../../../assets/iconImg/7.png'
    import img8 from '../../../assets/iconImg/8.png'
    import img9 from '../../../assets/iconImg/9.png'
    import img10 from '../../../assets/iconImg/10.png'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                appliances:[
                  {
                    title:'实名认证',
                    img:img1,
                    path:""
                  },{
                    title:'企业用户',
                    img:img2,
                    path:""
                  },{
                    title:'Ukey授权',
                    img:img3,
                    path:""
                  },{
                    title:'企业授信',
                    img:img4,
                    path:""
                  },{
                    title:'票据',
                    img:img5,
                    path:""
                  },{
                    title:'金票额度',
                    img:img6,
                    path:""
                  },{
                    title:'金票审核',
                    img:img7,
                    path:""
                  },
                  {
                    title:'金票还款',
                    img:img8,
                    path:""
                  }, {
                    title:'金票收支',
                    img:img9,
                    path:""
                  }, {
                    title:'金票融资',
                    img:img10,
                    path:""
                  },
                ]
            }
        },
        mounted: function(){

        },
        methods:{
            relogin:function () {
                localStorage.removeItem("tuser");
               // this.$router.history.go(-100)
                console.log(this.$route.matched);
                this.$router.replace({path:"login"})
            },
            goTtolk:function () {
                   },
            goitem:function (path) {
                this.$router.push({path: path});
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flexbox{
    background-color: #fff;
    padding: 0.25rem 0;
  }
  .gaid-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center

  }
  .gaid-item .iconcontent{
    width: 0.8rem;
    height: 0.8rem;
    background-color: #f43;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gaid-item span{
    color: #333;
    padding: 0.1rem;
    font-size: 0.28rem;
  }

</style>
