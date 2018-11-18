<template>
<div>
<div class="layui-container fly-marginTop">
  <div class="fly-panel" pad20 style="padding-top: 5px;">
    <!--<div class="fly-none">没有权限</div>-->
    <div class="layui-form layui-form-pane">
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">发表新帖<!-- 编辑帖子 --></li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <form >
              <div class="layui-row layui-col-space15 layui-form-item">
                <div class="layui-col-md9">
                  <label for="L_title" class="layui-form-label">标题</label>
                  <div class="layui-input-block">
                    <input v-model="list.title" type="text" id="L_title" name="title" required lay-verify="required" autocomplete="off" class="layui-input">
                    <!-- <input type="hidden" name="id" value="{{d.edit.id}}"> -->
                  </div>
                </div>
              </div>
              
               
              <div class="layui-form-item layui-form-text">
                 <eild-are v-model="list.content"></eild-are>
              </div>
              
            </form>
                <button style="margin-left:480px;" v-on:click="pushWz" class="layui-btn"  >立即发布</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</template>


<script>
import '../assets/layui.js'
import eild from '@/components/eild'
import {addWz} from '@/axios/index.js'
export default{
    name:"Add",
    mounted() {
      
    },
    components:{
      'eild-are':eild
    },
    data(){
       return {
         list:{}
       }
    },
    methods:{
       pushWz(){
         const title=this.list.title
         const content=this.list.content
         this.list.upuser=sessionStorage.getItem('username')
           if(title==null && content.length<=10){
             alert("请输入信息")
             return;
           }
           console.log(addWz)
          addWz(this.list).then((res)=>{
                    this.$router.push('/')
          })

       }
    }
    
    
}
</script>

<style scoped lang="css">
 @import '../assets/layui.css';
 @import '../assets/global.css';

</style>