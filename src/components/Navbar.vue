<template>
    <div class="navbar">
        <nav class="nav-extended     teal darken-4 ">
            <div class="nav-content">
                
                 <router-link :to="{name:'Addsmoothie'}">
                    <a class="btn-floating btn-large waves-effect waves-light black">
                        <i class="material-icons">add</i>
                    </a>
                 </router-link>
                
                 <router-link :to="{name:'Cards'}">
                    <span class="nav-title black-text">
                       <img src="./../assets/s.png" alt="S">
                          <b>MOOTHIES</b>
                    </span>
                 </router-link>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
 
 .btn-floating{
     position: absolute;
     right:2vw;
     top:2.8vh;
 }
 .nav-title{
     padding-left: 2vw;
 }
 img{
     position: relative;
     top:1.35vh;
     left:.4vw;
     height: 6vh;
 }
</style>


