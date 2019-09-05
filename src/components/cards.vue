<template>
<div class=" mycards container">  <!-- the container is for putting things in center -->
     <div v-if="smoothies.length==0" class="nocards">
         <!-- <h1>;_______;</h1><br> -->
         <h3>NO CARDS</h3>
        <h4>Add new from the top right corner</h4>
     </div>
     <div class="card teal darken-4" v-for="smoothie in smoothies" :key="smoothie.key">
         <div class="card-content">
           <i class="material-icons delete" @click="deleteSmoothie(smoothie.key)">delete</i>
           <h2 class="black-text ">{{smoothie.title}}<hr class="style-2"></h2>
           <ul class="ings">
               <li  v-for="(ing,index) in smoothie.ings" :key="index">
                   <span class="chip  teal darken-3 black-text"> {{ing}}</span>
               </li>
           </ul>
       </div>
       <span class="btn-floating btn-large halfway-fab black">
           <router-link :to="{name:'EditSmoothie',params:{url:smoothie.url}}">
               <i class="material-icons edit">edit</i>
            </router-link>
       </span>
     </div>
 </div>
</template>
<script>
import db from './firebase/init'
export default {
    name:'cards',
    data(){
        return{
          smoothies:[]
        }
    },
    methods:{
        deleteSmoothie(id){
            db.collection('smoothies').doc(id).delete().then(()=>{
             this.smoothies=this.smoothies.filter(smoothie=> id!=smoothie.key)
            })
          
        }
    },
    created(){
        db.collection('smoothies').get().then(snapshot=>{
            snapshot.forEach(doc=>{
                //console.log(doc)
                let smoothie=doc.data();
                smoothie.key=doc.id;
                this.smoothies.push(smoothie)
            })
            
        })
    }
}
</script>

<style scoped>
.mycards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1vw;
    margin-top: 10vh;
}
.mycards h2{
    font-size: 1.8em;
    text-align: center;
    margin-top: 0px;
}
hr.style-2 {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}
.ings li{
display: inline-block;
}
.delete{
    color: black;
    position: absolute;
    right: 4px;
    top:4px;
    cursor: pointer;
    font-size: 1.4em;
    

}
.nocards{
    position: absolute;
    left: 43vw;
    top: 43vh;
}
.nocards h4{
    margin-left: -10vw;
    
    
}
</style>


