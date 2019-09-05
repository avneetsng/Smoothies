<template>

  <div id="app">
    <Navbar/>
    <!-- <Cards/> -->
    <router-view/>

   </div>
 
</template>

<script>
import Navbar from './components/Navbar';
// import Cards from "./components/cards";
//don't import EVERTHING  here .ONLY import those components that you want to be visible all the time .
//add other components in router 



export default {
  name: 'App',
  components:{
    Navbar
    // ,Cards
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
 
  color: #2c3e50;
  font-family: 'Raleway', sans-serif;
  
}

</style>
