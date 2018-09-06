<template>
  <div v-bind:class="{ 'about': cl==='about', 'aboutclosed': cl==='aboutclosed' }">
  	<div class="content">
	  	<h1>Matias Web Dev</h1>
	  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	  	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	  	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	  	consequat.</p>
	  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	  	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	  	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	  	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	  	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	  	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	  	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	  	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	  	consequat.cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	  	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  	</div>
  </div>
</template>
<script>
export default{
  name: 'Home',
  props: ['cl']
}
</script>
<style scoped>
 .about{
 	padding-top: 50px;
 	text-align: center;
 	background: brown;
 	color: white;
 }
 .aboutclosed{
  grid-column-start: 1;
  grid-column-end: 3;
  padding-top: 50px;
  text-align: center;
  background: brown;
  color: white;
}
.content{
	width: 80%;
	margin: 0 auto;
	text-align: left;
	line-height: 1.4em;
}

.content h1{
	text-align: center;
	margin: 30px;
}
</style>