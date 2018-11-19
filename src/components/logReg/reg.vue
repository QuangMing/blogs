<template>
 <div>
   <div  class="layui-container fly-marginTop">
  <div  class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title">
           <li @click="urlGo">登入</li>
        <li class="layui-this">注册</li>
      </ul>
      <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
        <div class="layui-tab-item layui-show">
           <div class="layui-form layui-form-pane">
            
              <div class="layui-form-item">
                <label   class="layui-form-label">昵称</label>
                <div class="layui-input-inline">
                  <input v-model="user.uname" type="text" id="L_username" name="username" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
                  <div class="layui-form-mid layui-word-aux">确认后不可更改</div>
              </div>
              <div class="layui-form-item">
                <label  class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input v-model="user._pass" type="password" id="L_pass" name="pass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
                <div class="layui-form-mid layui-word-aux">密码长度需大于6位</div>
              </div>
              <div class="layui-form-item">
                <label   class="layui-form-label">确认密码</label>
                <div class="layui-input-inline">
                  <input v-model="user.pass" type="password" id="L_repass" name="repass" required lay-verify="required" autocomplete="off" class="layui-input">
                </div>
              </div>
              <div class="layui-form-item">
                <button class="layui-btn" @click="submit" style="margin-left:140px;margin-top:12px;"   >立即注册</button>
              </div>
            <Uicon @getIcon="getIcon" id="uicon" style="width:178px;height:178px;border:3px solid #ccc;"></Uicon>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
 </div>
</template>

<script>
 import Uicon  from '../share/uicon.vue';
 import {resg,login} from '@/axios/index.js'
    export default {
         name:"Reg",
         mounted() {
           
         },
         components:{
              Uicon
         },
         created() {
         },
         data(){
           return {
             user:{},
             imageUrl: '',
             list:{}
           }
         },
        
         methods:{
          submit(){
            this.user['userIcon']=this.imageUrl;
            if(this.user['userIcon']==''){
              alert("请正确输入，注册账号密码并上传jpg格式头像")
              return
            }
            if(this.user._pass!=this.user.pass){
               alert("密码不匹配")
               return;
            }
            var obj={'uname':this.user.uname,'upwd':this.user.pass}
             resg(this.user).then((res)=>{
              login(obj).then((res)=>{
                this.list=res.data.msg[0]
                 sessionStorage['username']=this.list.username
                 sessionStorage['userIco']=this.list.userIco
                 sessionStorage['address']=this.list.address
                 sessionStorage['vip']=this.list.vip
                 window.location.href='/'
             })

             })
            
          },
          urlGo(){
               this.$router.push('/login')
           },
          getIcon(val){
              
              var reader = new FileReader(); 
              reader.readAsDataURL(val); 
              reader.onload = (e)=>{ 
                this.imageUrl=e.target.result;
              } 
          }
         }

        
     
    } 
</script>

<style scoped lang="css">
 @import '../../assets/layui.css';
 @import '../../assets/global.css';
 #uicon{
   position:relative;
   left:570px;
   top:-210px;
 }
.layui-form-pane .layui-form-label[data-v-47e04698]{
    font-size:12px;
}
  .avatar-uploader .el-upload {
    border: 5px solid #ccc;
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
