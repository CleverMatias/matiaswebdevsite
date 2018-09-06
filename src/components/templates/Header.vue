<template>
  <div class="header">
    <div 
      class="btn-menu"
      v-on:click="$emit('toggle-sidebar')"
    >menu</div>
    
  </div>
</template>
<script>
import { Bus } from '../../main.js'
export default{
  name: 'Header',
  data () {
    return {
      number: 1
    }
  }
}
</script>
<style scoped>
  .header{
    height: 60px;
    background: #555555;
    position: relative;
  }
  .btn-menu{
    width: 50px;
    padding: 5px;
    color: white;
    cursor: pointer;
    display: block;
    border: 1px solid white;
    text-align: center;
    position: relative;
    left: 15px;
    top: 15px;
    opacity: .7;
  }

  .btn-menu:hover{
    opacity: 1;
  }
</style>