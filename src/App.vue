<template>
  <div id="app">
    <Header 
      v-on:toggle-sidebar="retract"
      v-if="header"
    ></Header>

    <SideBar
      v-if="sidebar"
      v-on:go_home="go_home"
      v-on:go_about="go_about"
    ></SideBar>

    <Home
      v-if="home"
      v-bind:cl="homeclass"
    ></Home>

    <About
      v-if="about"
      v-bind:cl="aboutclass"
    ></About>
  </div>
</template>

<script>
import Header from './components/templates/Header.vue'
import SideBar from './components/templates/SideBar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import EventBus from './event-bus.js'

export default {
  name: 'app',
  data (){
    return {
      header: true,
      sidebar: false,
      home: true,
      about: false,
      homeclass: 'homeclosed',
      aboutclass: 'aboutclosed'
    }
  },
  methods: {
    retract () {
      this.sidebar = !this.sidebar
      if(!this.sidebar){ 
        this.homeclass = 'homeclosed'
        this.aboutclass = 'aboutclosed'
      }else{
        this.homeclass = 'home'
        this.aboutclass = 'about'
      }
    },
    go_home () {
      this.home = true
      this.about = false
      this.retract()
    },
    go_about () {
      this.home = false
      this.about = true
      this.retract()
    }
  },
  components: {
    Header,
    SideBar,
    Home,
    About
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
p{
  margin: 10px 0;
  font-family: 'Arial', sans-serif;
  font-size: 1.25em;
  letter-spacing: 1px;
}
#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 180px auto;
}
.header{
  grid-column-start: 1;
  grid-column-end: 3;
}



body{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
