<template>
<div class="wrapper">
  <div class="places"> <!--class="products" -->
    <div class="place" v-for="place in places" :key="place.id"> <!--class="product" -->
      <div class="info">
        <h1>Memory: {{place.memory}}</h1> <!--name-->
        <p>"{{place.note}}"</p>
        <h1>Location:</h1>
        <p> &emsp; &emsp; {{place.country}}</p>
        <p> &emsp; &emsp; {{place.state}} {{place.city}}</p>
      </div>
      <div class="image">
        <img :src="'/images/'+place.image"> <!--'/images/products/'+product.image-->
      </div>
      <div class="like"> <!--price-->
        <h1>You can modify your likes</h1>
        <button class="auto" @click="removeItem(place)">Dislike</button> 
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'PlaceList', 
  props: {
    places: Array 
  },

  data() {
    return{
    }
  },
  methods: {
    removeItem(place) {
        const index = this.$root.$data.likes.indexOf(place);
        if(index > -1) {
            this.$root.$data.likes.splice(index, 1)// 2nd parameter means remove one item only
        }
    }
  }
}
</script>



<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.places {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.place {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
}

.place img {
  border: 1px solid #5f2daf;
  border-radius: 4.0px;
  height: 450px; /*450px*/
  width: 400px;
  object-fit: cover;
}

.place .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.image:hover {
  /* transform: translate(0, -20px);*/
  filter: drop-shadow(0 0 0.7rem rgba(191, 240, 241, 0.199));
  position:relative;
  max-width: 100%;
  max-height: 100%;
  top:-60px;
  right:1px;
  width:20rem;
  height:auto;
  display:block;
  z-index:999;
}

.info {
  border: 1px solid #7b1dc9;
  border-radius: 9.0px;
  line-height: 1.2;
  background-color: transparent;
  color: #ccd6f6;
  padding: 3px 7px;
  height: 6.5em;
}

.info h1 {
  font-size: 23px;
  margin-top: 0px;
  margin-bottom: 0px;
  background-color: transparent;
}

.info h2 {
  font-size: 20px;
  background-color: transparent;
}

.info p {
  margin: 0px;
  font-size: 18px;
  background-color: transparent;
}


.like {
  display: flex;
}

.like p {
  margin: 0px;
  font-size: 20px;
}

.like h1 {
  margin: 0px;
  font-size: 0.9em;
  color: #83199e;
}

button {
  height: 40px;
  border: none;
  color:rgb(192, 46, 27);
  background-color: transparent;
  border: 1px solid rgb(192, 46, 27);
  border-radius: 3.0px;
  line-height: 1.2;
  padding: 0.1em;
  padding-left: 0.4em;
  padding-right: 0.4em;
  font-weight: 500;
}
button:hover {
  background: #ff646433;
}

.auto {
  margin-left: auto;
}
</style>