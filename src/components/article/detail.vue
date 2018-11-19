<template>
<div>
<div class="layui-container">
  <div class="layui-row layui-col-space15">
    <div class="layui-col-md8 content detail">
      <div class="fly-panel detail-box">
        <h1></h1>
        <div class="fly-detail-info">
          <!-- <span class="layui-badge">审核中</span> -->
         <!-- <span class="layui-badge layui-bg-green fly-detail-column">动态</span>
          
          <span class="layui-badge" style="background-color: #999;">未结</span> -->
          <!-- <span class="layui-badge" style="background-color: #5FB878;">已结</span> -->
      
          <div class="fly-admin-box" data-id="123">
        
            
          
            <!-- <span class="layui-btn layui-btn-xs jie-admin" type="set" field="stick" rank="0" style="background-color:#ccc;">取消置顶</span> -->
            
             <span  @click="delwz" class="layui-badge layui-bg-red">删除</span>
            <!-- <span class="layui-btn layui-btn-xs jie-admin" type="set" field="status" rank="0" style="background-color:#ccc;">取消加精</span> -->
          </div>
          <span class="fly-list-nums"> 
            <a href="#comment"><i class="iconfont" title="回答">&#xe60c;</i> {{list.comment}}</a>
            <a href="#comment"><i class="iconfont" title="回答">&#xe60b;</i> {{list.browse}}</a>
           
          </span>
        </div>
        <div class="detail-about">
          <a class="fly-avatar" >
            <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
          </a>
          <div class="fly-detail-user">
            <a  class="fly-link">
              <cite>{{list.upuser}}</cite>
            
              <i class="layui-badge fly-badge-vip">VIP3</i>
            </a>
            <span>{{list.data}}</span>
          </div>
          <div class="detail-hits" id="LAY_jieAdmin" data-id="123">
            <span class="layui-btn layui-btn-xs jie-admin" @click="openText"  type="edit"><a >编辑此贴</a></span>
          </div>
        </div>
        <div class="detail-body photos">
        <eild-are v-show="show" v-model="list.content">
        </eild-are>
              <div v-show="show"  class="layui-form-item">
                <button style="margin-left:300px;margin-top:8px;" class="layui-btn" @click="getRef" lay-filter="*" lay-submit>立即发布</button>
              </div>

         <div id="wzneir"  v-show="!show" style="max-width:601px;" ref="content"></div>            
        </div>
      </div>

      <div class="fly-panel detail-box" id="flyReply">
        <fieldset class="layui-elem-field layui-field-title" style="text-align: center;">
          <legend>评论</legend>
        </fieldset>

        <ul  class="jieda" id="jieda">
          <li  v-for="tmp in pinLun"  :key="tmp.cid"  data-id="111" class="jieda-daan">
            <a name="item-1111111111"></a>
            <div class="detail-about detail-about-reply">
              <a class="fly-avatar" href="">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt=" ">
              </a>
              <div class="fly-detail-user">
                <a href="" class="fly-link">
                  <cite v-text="tmp.username"></cite>
                  <i class="iconfont icon-renzheng"></i>
                  <i class="layui-badge fly-badge-vip">{{tmp.vip}}</i>              
                </a>
                
                <span></span>
                <!--
                <span style="color:#5FB878">(管理员)</span>
                <span style="color:#FF9E3F">（社区之光）</span>
                <span style="color:#999">（该号已被封）</span>
                -->
              </div>

              <div class="detail-hits">
                <span>{{tmp.date}}</span>
              </div>

 
            </div>
            <div class="detail-body jieda-body photos">
              <p>{{tmp.content}}</p>
            </div>
      
          </li>
          
        <div v-show="pageShow"  style="text-align: center">
          <div class="laypage-main">
          <span  @click="getlist(i-1,5)" v-for="i in page" class="page laypage-next">{{i}}</span>
        
          <a   @click="getlist(idex+1,5)"  class="laypage-next">下一页</a></div>
          </div>
      
          <!-- 无数据时 -->
          <!-- <li class="fly-none">消灭零回复</li> -->
        </ul>
        
        <div class="layui-form layui-form-pane">
        
            <div class="layui-form-item layui-form-text">
              <a name="comment"></a>
              <div class="layui-input-block">
                <textarea v-model="coment.content"  id="L_content" name="content" required lay-verify="required" placeholder="请输入内容"  class="layui-textarea fly-editor" style="height: 150px;"></textarea>
              </div>
            </div>
            <div class="layui-form-item">
              <input  type="hidden" name="jid"  >
              <button class="layui-btn"  @click="comments" >提交回复</button>
            </div>
       
        </div>
      </div>
     </div>
    <div class="layui-col-md4">
      <dl class="fly-panel fly-list-one">
        <dt class="fly-panel-title">本周热议</dt>
        <dd>
          <a href="">基于 layui 的极简社区页面模版</a>
          <span><i class="iconfont icon-pinglun1"></i> 16</span>
        </dd>
        <!-- 无数据时 -->
        <!--
        <div class="fly-none">没有相关数据</div>
        -->
      </dl>

      <div class="fly-panel">
        <div class="fly-panel-title">
          这里可作为广告区域
        </div>
        <div class="fly-panel-main">
          <a href="http://layim.layui.com/?from=fly" target="_blank" class="fly-zanzhu" time-limit="2017.09.25-2099.01.01" style="background-color: #5FB878;">LayIM 3.0 - layui 旗舰之作</a>
        </div>
      </div>

      <div class="fly-panel" style="padding: 20px 0; text-align: center;">
        <img  style="max-width: 100%;" alt="layui">
        <p style="position: relative; color: #666;">微信扫码关注 layui 公众号</p>
      </div>

    </div>
  </div>
</div>


</div>

</template>
<script>
import {getdetail,browseone,addcomment,deleteWz,updata} from '@/axios/index'
import eild from '@/components/eild'
 export default{
    name:"Detail",
    beforeMount() {
      
    },
    mounted() {
          
    },
    components:{
      'eild-are':eild
    },
    data(){
      return {
        list:'werwer',
        imgSrc:[],
        datt:'',
        show:false,
        coment:{},
        pinLun:null,
        pageShow:false,
        page:null,
        idex:null,
        user:null,
        uname:null
      }
    },
    created() {
       this.getlist()
       this.browseAdd()
       
    },
    methods:{
        nextPage(){

        },
        browseAdd(){
           const id=this.$route.params.id
           var obj={'id':id}
            browseone(obj).then((res)=>{
              console.log(res.data) 
            })
        },
        comments(){
          const id=this.$route.params.id
          this.coment.uid=1
          this.coment.id=id
          const uname=sessionStorage.getItem('username')
          if(uname=='') {
            alert("请先登录，再BB");
            return
          }
           addcomment(this.coment).then((res)=>{
              res.data.code==200 ?  alert("评论成功"):alert("评论失败")
              this.getlist()
              this.coment.content=''
           })
        },
        delwz(){
        //  console.log(this.$message)
       //   this.$message({
       //   showClose: true,
        //  message: '恭喜你，这是一条成功消息',
       //   type: 'success'
       // });
      //  console.log(1)
      //  return
          const uname=sessionStorage.getItem('username')
          if(uname!=this.user.username) {
            alert('没有权限')
            return
            }

          const id=this.$route.params.id
          deleteWz(id).then((res)=>{
            this.getlist()
            if(res.data.code!=200) return;
            this.$router.push('/')
            
          })
        },
        getlist(page=0,limit=5){
         const id=this.$route.params.id
           getdetail(id).then((res)=>{
              this.list=res.data.msg
              this.user=res.data.user
              // this.page=parseFloat(res.data.comment.length/limit)
               this.pinLun=res.data.comment.slice(page,limit)
           
               this.uname=res.data.user.username
             if(res.data.comment.length>5){
                  this.page=Math.ceil(res.data.comment.length/limit)
                  var cont=page!=0 ? page*limit+5:limit
                  var start=page!=0 ? page*limit:page
                   this.idex=start
                   if(page>this.page){
                     alert("已到尽头")
                      this.getlist()
                     return
                   }else{
                       this.pinLun=res.data.comment.slice(this.idex,cont)
                       this.pageShow=true;
                       
                   }
                 
             }
        
              this.$refs.content.innerHTML=this.list.content
            
           })

        },
        openText(){
          const uname=sessionStorage.getItem('username')
           if(uname==this.user.username){
                this.show=true;
                return;
           }else{
             alert("只有本帖子才具有权限")
              return;
           }
        },
        getRef(){
          const id=this.$route.params.id
          this.list.id=id
             updata(this.list).then((res)=>{
                 this.getlist()
                     
             })
                this.show=false;
        }
    }
 }
</script>

<style  scoped lang="css">
 @import '../../assets/layui.css';
 @import '../../assets/global.css';


.laypage-main *[data-v-e2d26ecc]:hover{
    background:#009E94;
    color:#fff;
    transition:.5s
}
.laypage-main *[data-v-376851e1]:active{
    
}

 #wzneir{
   max-width:600px;
   max-height:auto;
   overflow:hidden;

 }
 #wzneir p img{
     max-width:600px;
     max-height:500px;
   
 }
 .page:hover{

}
.button{
  display: inline-block;
  *display: inline;
  zoom: 1;
  padding: 6px 10px;
  margin: 0;
  cursor: pointer;
  border: 1px solid #bbb;
  overflow: visible;
  font: bold 13px arial, helvetica, sans-serif;
  text-decoration: none;
  white-space: nowrap;
  color: #555;
  
  background-color: #ddd;
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,1)), to(rgba(255,255,255,0)));
  background-image: -webkit-linear-gradient(top, rgba(255,255,255,1), rgba(255,255,255,0));
  background-image: -moz-linear-gradient(top, rgba(255,255,255,1), rgba(255,255,255,0));
  background-image: -ms-linear-gradient(top, rgba(255,255,255,1), rgba(255,255,255,0));
  background-image: -o-linear-gradient(top, rgba(255,255,255,1), rgba(255,255,255,0));
  background-image: linear-gradient(top, rgba(255,255,255,1), rgba(255,255,255,0));
  
  -webkit-transition: background-color .2s ease-out;
  -moz-transition: background-color .2s ease-out;
  -ms-transition: background-color .2s ease-out;
  -o-transition: background-color .2s ease-out;
  transition: background-color .2s ease-out;
  background-clip: padding-box; /* Fix bleeding */
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, .3), 0 2px 2px -1px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .3) inset;
  text-shadow: 0 1px 0 rgba(255,255,255, .9);
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button:hover{
  background-color: #eee;
  color: #555;
}

.button:active{
  background: #e9e9e9;
  position: relative;
  top: 1px;
  text-shadow: none;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .3) inset;
}

.button[disabled], .button[disabled]:hover, .button[disabled]:active{
  border-color: #eaeaea;
  background: #00968;
  cursor: default;
  position: static;
  color: #999;
  /* Usually, !important should be avoided but here it's really needed :) */
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  text-shadow: none !important;
}

/* Smaller buttons styles */

.button.small{
  padding: 4px 12px;
}

/* Larger buttons styles */

.button.large{
  padding: 10px 22px;
  text-transform: uppercase;
}

.button.large:active{
  top: 2px;
}

/* Colored buttons styles */

.button.green, .button.red, .button.blue {
  color: #fff;
  text-shadow: 0 1px 0 rgba(0,0,0,.2);
  
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,.3)), to(rgba(255,255,255,0)));
  background-image: -webkit-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
  background-image: -moz-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
  background-image: -ms-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
  background-image: -o-linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
  background-image: linear-gradient(top, rgba(255,255,255,.3), rgba(255,255,255,0));
}

/* */

.button.green{
  background-color:#009688;
  border-color:#009688;
}

.button.green:hover{
  background-color: #009688;
}

.button.green:active{
  background: #57a957;
}

/* */

.button.red{
  background-color: #ca3535;
  border-color: #c43c35;
}

.button.red:hover{
  background-color: #ee5f5b;
}

.button.red:active{
  background: #c43c35;
}

/* */

.button.blue{
  background-color: #269CE9;
  border-color: #269CE9;
}

.button.blue:hover{
  background-color: #70B9E8;
}

.button.blue:active{
  background: #269CE9;
}

/* */

.green[disabled], .green[disabled]:hover, .green[disabled]:active{
  border-color: #00968;
  background: #57A957;
  color: #D2FFD2;
}

.red[disabled], .red[disabled]:hover, .red[disabled]:active{
  border-color: #C43C35;
  background: #00968;
  color: #FFD3D3;
}

.blue[disabled], .blue[disabled]:hover, .blue[disabled]:active{
  border-color: #269CE9;
  background: #269CE9;
  color: #93D5FF;
}

/* Group buttons */

.button-group,
.button-group li{
  display: inline-block;
  *display: inline;
  zoom: 1;
}

.button-group{
  font-size: 0; /* Inline block elements gap - fix */
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, .1);
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  padding: 7px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  border-radius: 7px;
}

.button-group li{
  margin-right: -1px; /* Overlap each right button border */
}

.button-group .button{
  font-size: 13px; /* Set the font size, different from inherited 0 */
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
}

.button-group .button:active{
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;
  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;
}

.button-group li:first-child .button{
  -moz-border-radius: 3px 0 0 3px;
  -webkit-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

.button-group li:first-child .button:active{
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;
  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, -5px 0 5px -3px rgba(0, 0, 0, .2) inset;
}

.button-group li:last-child .button{
  -moz-border-radius: 0 3px 3px 0;
  -webkit-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.button-group li:last-child .button:active{
  -moz-box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset;
  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset;
  box-shadow: 0 0 1px rgba(0, 0, 0, .2) inset, 5px 0 5px -3px rgba(0, 0, 0, .2) inset;
}
</style>