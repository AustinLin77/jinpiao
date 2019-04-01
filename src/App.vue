<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app{
  width: 100%;
  height: 100%;
}
#app .yd-navbar-center>span{
  font-size: 0.34rem !important;
}
#company .head{
  /*background: linear-gradient(left, #789CF8,#4363EE);*/
  background-color:#789CF8 ;
  height:1.32rem ;
}
/*#company .top{*/
  /*background: linear-gradient(left top, #789CF8,#4363EE);*/

/*}*/
.listBorder .yd-cell{
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(73, 105, 239, 0.2);


}
#creditDetail input select{
  color: #666666;
}
#addCredit input select{
  color: #666666;
}
.yd-btn-primary:not(.yd-btn-loading){
  background-color: deepskyblue;
}
  #app .yd-scrollview:after {
    content: "";
    display: block;
    width: 100%;
    height: 0rem;
  }
#app .login .yd-cell {
  background-color: transparent;
}
.popup .yd-cell-title{
  color: #c00;
}
.zhuye .yd-navbar:after {
 height: 0px;
}
 #app .yd-grids-icon{
  height: 1.2rem;
}
.yd-cell-icon{
  margin-right: 0.3rem;
}
.yd-cell-left{
  font-size: 0.28rem;
}
  .me .yd-navbar{
    border: none;
  }
.yd-cell:after{
  display: none;
}
  .me .yd-cell{
    margin-left: 0.3rem;
  }
.you .yd-cell{
  margin-left: 0;
}
#me .item{
box-shadow: none
}
#login .content{
  margin-top: 0.2rem;
  position: static;
}
  .me .yd-cell-item:not(:last-child):after{
    height:0;
  }
  .he .yd-cell-item{
    border-bottom: 1px solid #eeeeee;
  }
  .login .yd-input>input{
    background-color: white;
  }
  input{
    font-family: Arial;
  }
  select{
    outline: none;
    font-family: Arial;
    color: #666666;
  }
  #myGrid .yd-grids-5:before{
    height: 0;
  }
  /*#main .yd-navbar-item span, i{*/
    /*color: inherit !important;*/
  /*}*/
</style>
