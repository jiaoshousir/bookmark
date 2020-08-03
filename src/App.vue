<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- header -->
    <el-header>
      <Header :menus="getMenu()" />
    </el-header>
    <el-container>
      <!-- main -->
        <el-main>
            <div v-for="(item,index) in data" :key="item.id">
              <!-- {{ item }} -->
              <Main :items="item" :index="index+1"/>
            </div>
        </el-main>
      <el-backtop><div></div></el-backtop>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header";
import Main from "./components/Main";
import datas from "./assets/bookmarkdata";
export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Main
  },
  data(){
    return {
      data: datas
    }
  },
  methods: {
    getMenu() {
      let title = [];
      this.data.forEach(element => {
        title.push(element.title);
      });
      return title;
    }
  }
}
</script>

<style>
a{
  color: #000;
  font-size: 16px;
}
.el-header{
  padding: 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}
.el-main{
  margin-top: 60px;
}
.el-backtop{
  width: 80px;
  height: 80px;
  background: url(./assets/gototop.png) 0 0 no-repeat;
  background-size: contain;
  box-shadow: none;
}
.el-backtop:hover{
  background: url(./assets/gototop.png) 0 0 no-repeat;
  background-size: contain;
}
</style>
