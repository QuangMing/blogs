<template>
  <div>
      <div class="fly-header layui-bg-black">
  <div class="layui-container">
    <a class="fly-logo" href="/">
      <img alt="layui">
    </a>
    <ul class="layui-nav fly-nav layui-hide-xs">
      <li class="layui-nav-item layui-this">
        <a href="/"><i class="iconfont icon-jiaoliu"></i>交流</a>
      </li>
      <li class="layui-nav-item">
        <a href="http://www.layui.com/" target="_blank"><i class="iconfont icon-ui"></i>框架</a>
      </li>
    </ul>
    
    <ul class="layui-nav fly-nav-user">
      
      <!-- 未登入的状态 -->
      <div v-if='!login'>
   <li  class="layui-nav-item">
        <a class="iconfont icon-touxiang layui-hide-xs" ></a>
      </li>
      <li class="layui-nav-item">
        <router-link to='/login'>登入</router-link>
      </li>
      
      <li class="layui-nav-item layui-hide-xs">
        <a href="/app/qq/" title="QQ登入" class="iconfont icon-qq"></a>
      </li>
      <li class="layui-nav-item layui-hide-xs">
        <a   title="微博登入" class="iconfont icon-weibo"></a>
      </li>   
      </div>
      
      <!-- 登入后的状态  -->
      <li v-else class="layui-nav-item">
        <a class="fly-nav-avatar" href="javascript:;">
          <cite class="layui-hide-xs">{{list.uname}}</cite>
          <i class="iconfont icon-renzheng layui-hide-xs" ></i>
          <i class="layui-badge fly-badge-vip layui-hide-xs">{{list.vip}}</i>
          <img :src="list.userIco">
        </a>
        <dl style="margin-top:-7px" class="layui-nav-child">
          <dd  ><a @click="ques"  style="text-align: center;">退出</a></dd>
        </dl>
      </li>
    </ul>
  </div>
</div>
<br>
<br>
<div class="fly-panel fly-column">
  <div class="layui-container">
    <ul class="layui-clear">
      <li class="layui-hide-xs layui-this"><a href="/">首页</a></li> 
     
      <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><span class="fly-mid"></span></li> 
      <!-- 用户登入后显示 -->

    </ul> 
    
    <div class="fly-column-right layui-hide-xs"> 
      <span class="fly-search"><i class="layui-icon"></i></span> 
      <a  class="layui-btn" @click="addInner">发表新帖</a>
    </div> 
    <div class="layui-hide-sm layui-show-xs-block" style="margin-top: -10px; padding-bottom: 10px; text-align: center;"> 
  <aclass="layui-btn"></a> 
    </div> 
  </div>
</div><!--ok-->
  </div>
</template>

<script>
     
export default{
    name:"Header",
    mounted() {
      
    },
    created() {
      this.getLogin();
    },
    data(){
      return {login:false,list:{}}
    },
    methods:{
        ques(){
           var uname=sessionStorage.setItem('username','')
           var vip=sessionStorage.setItem('vip','')
           var userIco=sessionStorage.setItem('userIco','')
           this.getLogin();
           window.location.href='/'
        },
        addInner(){
          if(this.login==true){
            this.$router.push('/add')
          }else{
            alert("请先完成登陆")

          }
        },
        getLogin(){
           var uname=sessionStorage.getItem('username')
           var vip=sessionStorage.getItem('vip')
           var userIco=sessionStorage.getItem('userIco')
           this.list['uname']=uname
           this.list['vip']=vip
           this.list['userIco']=userIco
           console.log(this.list)
           if(uname!=''){
               this.login=true
           }else{
             this.login=false
             return 
           }
        }
    }
}
</script>

<style scoped lang="css">
 @import '../../assets/layui.css';
 @import '../../assets/global.css';
 .layui-nav-item:hover .layui-nav-child{
     display:block;
     transition:.5s
 }
 .layui-nav-child:hover{
     display:block;
     transition:.5s
 }
 .layui-container{
     font-size:15px;
     padding:8px;
 }
 .fly-column{
     width:100%;
     border-bottom:1px solid #E9E9E9;
 }

</style>