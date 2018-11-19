<template>
 <div>
   <div  class="layui-container fly-marginTop">
  <div  class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
        <li class="layui-this">登入</li>
        <li><a  @click="urlGo"  >注册</a></li>
      </ul>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
          <div class="layui-form layui-form-pane">
            <form >
              <div class="layui-form-item">
                <label for="L_email" class="layui-form-label">用户</label>
                <div class="layui-input-inline">
                  <input v-model="list.uname" type="text"     class="layui-input">
                </div>
              </div>
              <div class="layui-form-item">
                <label   class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input v-model="list.upwd" type="password"   class="layui-input">
                </div>
              </div>
            
              <div @click="getlist" class="layui-form-item">
                <button class="layui-btn"  >立即登录</button>
                <span style="padding-left:20px;">
                </span>
              </div>
              <div class="layui-form-item fly-form-app">
                <span>或者使用社交账号登入</span>
                <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 </div>
</template>

<script>
    import {login} from '@/axios/index.js'
    export default {
         name:"Login",
         mounted() {
           
         },
         created() {
         },
         data(){
           return {
             list:{}
           }
         },
         methods:{
           urlGo(){
               this.$router.push('/reg')
           },
           getlist(){
             console.log(this.list)
             login(this.list).then((res)=>{
               if(res.data.code!=200) {
                 alert("账号或密码错误！请重新登陆");
                 return 
               }else{
                this.list=res.data.msg[0]
                console.log(res.data)
                console.log(this.list.username)
                 sessionStorage['username']=this.list.username
                 sessionStorage['userIco']=this.list.userIco
                 sessionStorage['address']=this.list.address
                 sessionStorage['vip']=this.list.vip
                 window.location.href='/'
               }
              
             })
           }
         }
    } 
</script>

<style scoped lang="css">
 @import '../../assets/layui.css';
 @import '../../assets/global.css';
 @import 'element-ui/lib/theme-chalk/index.css';
 .layui-form-pane .layui-form-label[data-v-10d9df09] {
   font-size:12px;
 }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
