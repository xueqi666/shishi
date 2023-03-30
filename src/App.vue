<template>
<div id="aa" >
  <button @click="a=!a">开启人脸识别</button>
  <Start v-show="a"></Start>
</div>

</template>

<script>
import Start from './components/Start.vue';

export default {
  components: { Start },
  name:'App',
  comments:{
    Start
  },
  data() {
    return {
      a:false
    }
  },

}
</script > 

<style >
  #aa{
    width:400px;
    height: 400px;
    margin: 50px auto;
  }

</style>