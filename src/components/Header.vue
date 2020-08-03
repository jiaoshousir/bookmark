<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    text-color="#000"
    active-text-color="#49dd84"
    >
      <el-menu-item v-for="(item, index) in menus" :key="item.id" :index="index.toString()"  @click="jump('menu' + (index+1))">
        <!-- <a :href="'#menu' + (index+1)">{{ item }}</a> -->
        <a>{{ item }}</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    menus: {
      type: Array,
      required: true
    },
    activeIndex: {
      type: String,
      default: "0"
    }
  },
  methods:{
    jump(domId){
       //页面滚动了的距离
      let height = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; 
      
      // 获取第一块内容距离顶部的高度，防止滚动时候顶部固定菜单挡住内容部分
      let topDom = document.querySelector('.el-main div');
      let topDomHeight = topDom.offsetTop;

      //指定dom到页面顶端的距离
      let dom = document.getElementById(domId);
      let domHeight = dom.offsetTop - topDomHeight;

      //滚动距离计算
      let S = Number(height) - Number(domHeight);
      //判断上滚还是下滚
      if(S<0){
          //下滚
          S = Math.abs(S);
          window.scrollBy({ top: S, behavior: "smooth" });
      }else if(S==0){
          //不滚
          window.scrollBy({ top: 0, behavior: "smooth" });
      }else{
          //上滚
          S = -S
          window.scrollBy({ top: S, behavior: "smooth" });
      }
  
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
  display: flex;
  justify-content: center;
}
</style>
