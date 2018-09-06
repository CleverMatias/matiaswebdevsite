<template>
  <div class="sidebar">
  	<div class="links">
  		<a v-on:click="$emit('go_home')">_INTRO</a>
  		<a v-bind:href="null" v-on:click.prevent="$emit('go_about')">_PROJECT</a>
  	</div> 
  </div>
</template>
<script>
  import { Bus } from '../../main.js'

export default {
name: 'SideBar'
}
</script>
<style scoped>
  .sidebar{
    height: 600px;
    background: #454545;
  }
  .links{
  	width: 100%;
  	height: 100%;
  	padding: 10%;
  	display: flex;
  	flex-direction: column;
  	justify-content: flex-start;
  	align-items: center;
  }
  .links a{
  	display: block;
  	padding: 5px;
  	cursor: pointer;
  	color: white;
  	font-weight: 800;
  	font-size: 1.2em;
  	opacity: .7;
  }

  .links a:hover {
  	opacity: 1;
  }
</style>