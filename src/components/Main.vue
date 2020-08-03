<template>
  <div>
    <div class="page-title"  :id="'menu'+index" >
      <h2>{{items.title}}</h2>
    </div>
    <div class="page-container">
      <div class="list-container">
        <ul class="list clear">
          <li v-for="item in items.data" :key="item.id" class="item">
            <a target="_blank" :href="item.link" :title="item.decription" >{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    index:{
      type: Number
    },
    items: {
      type: Object,
      required: true
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
    font-size: 32px;
    color: #fff;
}
li {
  height: 53px;
  float: left;
  width: auto;
  border: 1px solid #fff;
  border-radius: 5px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  transition: .1s ease-in;
}
a{
  color: #fff;
  display: block;
  padding: 15px;
}
li:hover {
  -o-box-shadow: 0 0 3px 0 #fff, 0 1px 6px 0 #000;
  box-shadow: 0 0 3px 0 #fff, 0 1px 6px 0 #000;
  transform: translateY(-3px);
}
.list-container {
  margin: 10px auto;
}
</style>
