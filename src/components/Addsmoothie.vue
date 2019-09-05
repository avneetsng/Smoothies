<template>
<div class="addSmoothie container">
    <h3 class="center-align heading-title">Add Smoothie </h3>
    <hr class="heading style-2">
    <form @submit.prevent="Addsmoothie()">
        <div class="field title">
            <label for="title">Smoothie Title  : </label>
            <input type="text" name="title" v-model="title" autocomplete="off">
        </div>
        <br>
        <div class="field ing">
            <div v-for="(ing,index) in ings" :key="index">
              <label for="ing">Ingredient:</label>
              <i class="material-icons delete" @click="deleteing(ing)">delete</i>
               <input type="text" name="ing" v-model="ings[index]" autocomplete="off">
              <!-- we must v-model things only with the data present in data function -->
            </div>
            <label for="ing">Add An Ingredient : </label>
            <input type="text" name="ing" v-model="temping"  @keydown.enter.prevent="adding()" @keydown.tab.prevent="adding()" autocomplete="off" >
           
        </div>
        <p class="center-align ">{{feedback}}</p>
        <br>
        <div class="field center-align submit button">
             <button class="btn teal darken-4 ">Submit</button>
        </div>
        
    </form>
</div>   
</template>
<script>
import db from './firebase/init'
import slugify from 'slugify'
export default {
    name:'Addsmoothie',
    data(){
        return{
           title:'',
           temping:null,
           ings:[],
           feedback:null

        }
    },
    methods:{
        Addsmoothie(){
         if(this.title){
             this.feedback=null;
             this.url=slugify(this.title,{
                 replacement:'-',
                 remove:/[$_+~.()''"/\|@]/g,
                 lower:true
             })
             db.collection('smoothies').add({
                 title:this.title,
                 ings:this.ings,
                 url:this.url
             }).then(()=>{
                 this.$router.push({name:'Cards'})
             })
         }
         else{
             this.feedback='Add title plox';
         }
         
        },
        adding(){
            if(this.temping){
                this.ings.push(this.temping);
                this.temping=null;
                this.feedback=null;
                
            }
            else{
                this.feedback="add some value in field u moron"
            }
        },
        deleteing(ingDel){
            this.ings=this.ings.filter(ing=>ing!=ingDel)
        }
    }
}
</script>
<style scoped>
hr.style-2 {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(100, 110, 110, 0), rgba(110, 110, 110, 0.75), rgba(110, 110, 110, 0));
}
.heading{
    margin-bottom: 10vh;
    
}

input{
    color: aliceblue;
    background:black
}
.heading-title{
    color:#004d40;
}
.addSmoothie{
    max-width: 40vw;
    margin-top: 10vh;

}
label{
    color:  #2c3e50;
    /* color: #424242; */
    font-size: 2vh;
    font-weight: bold;
    
}
p{
    font-weight: bold;
}
.delete{
    position: relative;
    
    left: 33vw;
    top: 5.6vh;
    cursor: pointer;
}


</style>


