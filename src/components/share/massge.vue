<template>
<div ref="massge" id="massge" class="massge">
   <span>
     {{text}}
   </span>
</div>
</template>

<script>
export default{
    name:"Massge",
    mounted() {
        
    },
    mounted() {
       this.toogle()
    },
    props:{
       text:{
           type:String,
           default:()=>{
               return '提示消息'
           }
       }
    },
    methods:{
        toogle(){
            setTimeout(()=>{
                 this.$refs.massge.style="display:none"
            },3000)
         
        }
    }
}
</script>

<style scoped lang="css">
  
.massge{
   width:300px;
   height:50px;
   display:flex;
   justify-content:center;
   background:#000;
   align-items:center;
   color:#ffff;
   position:fixed;
   top:50%;
   left:50%;
   margin-left:-150px;
   margin-top:-25px;
   opacity:.8;
   cursor: pointer;
   transition:2s
}

</style>