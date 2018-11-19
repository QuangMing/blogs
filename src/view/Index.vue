<template>
 <div>
<div class="layui-container">
  <div class="layui-row layui-col-space15">
    <div class="layui-col-md8">
      <div class="fly-panel">
          <el-canrousel style="width:620px;" :list='item' >
          </el-canrousel>
        <div class="fly-panel-title fly-filter">
        <div style="width:200px; height:200px;">
      
        </div>
            </div>
            <div class="fly-list-badge">
              <!--
              <span class="layui-badge layui-bg-black">置顶</span>
              <span class="layui-badge layui-bg-red">精帖</span>
              -->
            </div>
          </li>
        
        </ul>
      </div>

      <div class="fly-panel" style="margin-bottom: 0;">
        
        <div class="fly-panel-title fly-filter">
          <a href="" class="layui-this">综合</a>
          <span class="fly-filter-right layui-hide-xs">
            <a href="" class="layui-this">按最新</a>
            <span class="fly-mid"></span>
            <a href="">按热议</a>
          </span>
        </div>

        <ul class="fly-list">          
          <li v-for="tmp in list">
            <a  class="fly-avatar">
              <img :src="tmp.userIco" >
            </a>
            <h2>
              <a class="layui-badge">动态</a>
              <router-link :to="'detail/'+tmp.id">{{tmp.title}}</router-link>
            </h2>
            <div class="fly-list-info">
              <a  link>
                <cite>{{tmp.upuser}}</cite>
                <!--<i class="iconfont icon-renzheng" title="认证信息：XXX"></i>-->
                <i class="layui-badge fly-badge-vip">{{tmp.vip}}</i>
              </a>
              <span>{{tmp.data}}</span>
              
              <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> {{tmp.likes}}</span>
         <!--       <span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
              <span class="fly-list-nums"> 
                <i class="iconfont icon-pinglun1" title="回答"></i> {{tmp.comment}}
              </span>
            </div>
            <div class="fly-list-badge">
            <!--  <span class="layui-badge layui-bg-red">精帖</span>-->
            </div>
          </li>
         
        </ul>
     
        <div style="text-align: center">
        
        </div>

      </div>
    </div>
    <div class="layui-col-md4">

      <div class="fly-panel">
        <h3 class="fly-panel-title">温馨通道</h3>
        <ul class="fly-panel-main fly-list-static">
          <li>
            <a href="http://fly.layui.com/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
          <li>
            <a href="http://fly.layui.com/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
          <li>
            <a href="http://fly.layui.com/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
          <li>
            <a href="http://fly.layui.com/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
          </li>
          
        </ul>
      </div>


      <div class="fly-panel fly-signin">
        <div class="fly-panel-title">
          访客
          <i class="fly-mid"></i> 
          <a href="javascript:;" class="fly-link" id="LAY_signinHelp">说明</a>
          <i class="fly-mid"></i> 
          <a href="javascript:;" class="fly-link" id="LAY_signinTop">活跃榜<span class="layui-badge-dot"></span></a>
          <span class="fly-signin-days">最近<cite>7</cite>天</span>
        </div>
        <div class="fly-panel-main fly-signin-main">
          <button class="layui-btn layui-btn-danger" id="LAY_signin">今日访客</button>

          
          <!-- 已签到状态 -->
          <!--
          <button class="layui-btn layui-btn-disabled">今日已签到</button>
          <span>获得了<cite>20</cite>飞吻</span>
          -->
        </div>
      </div>

      <div class="fly-panel fly-rank fly-rank-reply" id="LAY_replyRank">
        <h3 class="fly-panel-title">最近登陆</h3>
        <dl>
          <!--<i class="layui-icon fly-loading">&#xe63d;</i>-->
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
          <dd>
            <a >
              <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
            </a>
          </dd>
        </dl>
      </div>

      <dl class="fly-panel fly-list-one">
        <dt class="fly-panel-title">本周热议</dt>
        <dd>
          <a >基于 layui 的极简社区页面模版</a>
          <span><i class="iconfont icon-pinglun1"></i> 16</span>
        </dd>
        <dd>
          <a >基于 layui 的极简社区页面模版</a>
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
          <a @click="open"  target="_blank" class="fly-zanzhu" time-limit="2017.09.25-2099.01.01" style="background-color: #5FB878;">LayIM 3.0 - layui 旗舰之作</a>
        </div>
      </div>
      
      <div class="fly-panel fly-link">
        <h3 class="fly-panel-title">友情链接</h3>
        <dl class="fly-panel-main">
          <dd><a>layui</a></dd>
          <dd><a>WebIM</a></dd>
          <dd><a>layer</a></dd>
          <dd><a>layDate</a></dd>
          <dd><a>申请友链</a></dd>
        </dl>
      </div>

    </div>
  </div>
</div>




</div>

</template>

<script>
import {getMain} from '@/axios/index'
import  Canrousel from '@/components/share/canrousel.vue'

export default {
  name: 'Index',
  data () {
    return {
      list:null,
      page:null,
      item:['../assets/1.jpg','../assets/2.jpg','../assets/3.jpg','../assets/4.jpg']
    }
  },
  components:{
    "el-canrousel":Canrousel
  },
  created() {
    this.getlist()

  },
  methods:{
    open() {
        this.$massge('这是一条消息提示');
      },
     getlist(page=0,limit=12){
       getMain().then((res)=>{
         this.list=res.data
                  this.page=Math.ceil(res.data.length/limit)
                  var cont=page!=0 ? page*limit+5:limit
                  var start=page!=0 ? page*limit:page
       })
     }
  },
}
</script>


<style scoped lang="css">
   @import '../assets/layui.css';
   @import '../assets/global.css';
   @import 'element-ui/lib/theme-chalk/index.css';

</style>
