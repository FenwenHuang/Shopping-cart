<template>
<Navbar></Navbar>


  <router-view/>
 <Footer></Footer>
</template>
<script>


import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'




export default {
  components: {
    Navbar,
    Footer
   
}
}

</script>
<style scoped> -->
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>

