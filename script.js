var app = new Vue({
  el: '#app',
  data: {
    text:"",
    message:"",
    numb:0,
    items: [
      {
        name:"name1",
        type:"Guitar",
        price:"$159.99",
        brand:"Fender",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkykAE6cqyrvzlNwfkHyznh9OHX4AN4outtiXdwGhJ9ex_0c0e_Cv6JaZNw&usqp=CAc"
      },
      {
        name:"name2",
        type:"Guiar",
        price:"$129.99",
        brand:"Fender",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkykAE6cqyrvzlNwfkHyznh9OHX4AN4outtiXdwGhJ9ex_0c0e_Cv6JaZNw&usqp=CAc"
      },
      {
        name:"name3",
        type:"Guitar",
        price:"4,599.99",
        brand:"Yamana",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkykAE6cqyrvzlNwfkHyznh9OHX4AN4outtiXdwGhJ9ex_0c0e_Cv6JaZNw&usqp=CAc"
      },
      {
        name:"name4",
        type:"Guitar",
        price:"899.99",
        brand:"Yamana",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkykAE6cqyrvzlNwfkHyznh9OHX4AN4outtiXdwGhJ9ex_0c0e_Cv6JaZNw&usqp=CAc"
      },
      {
        name:"name5",
        type:"Guitar",
        price:"$799.99",
        brand:"Maton",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkykAE6cqyrvzlNwfkHyznh9OHX4AN4outtiXdwGhJ9ex_0c0e_Cv6JaZNw&usqp=CAc"
      },
      {
        name:"name6",
        type:"Guitar",
        price:"$699.99",
        brand:"Maton",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkykAE6cqyrvzlNwfkHyznh9OHX4AN4outtiXdwGhJ9ex_0c0e_Cv6JaZNw&usqp=CAc"
      }
    ]
  },
  computed:{
    textCount: function(){
    }
  }
})

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


Vue.component('counter', {
  data: function(){
    return{
      number:0
    }
  },
  props:['mess'],
  methods:{
    increaseStuff:function(){
      this.number++;
      this.$emit("inc");
    }
  },
  template:`<button v-on:click="increaseStuff">{{mess}} {{number}} Add to cart</button>`
})