<template>
    <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(items,i) in item"  :key='i' >
       <img :src="items" >
    </el-carousel-item>
  </el-carousel>
</template>


<script>
     export default{
         name:"el-canrousel",
         mounted() {
         },
         props:{
            list:{
              type:[Array,Object],
              default:()=>{
                return ''
              }
            }
         },
         data(){
           return {
            item:['./1.jpg','../assets/2.jpg','@/assets/3.jpg','@/assets/4.jpg']
           }
         }
     }
</script>
<style lang="css">
 @import 'element-ui/lib/theme-chalk/index.css';
    .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>