<template>
  <div class="QrDisplay">
       <img
        :src="image"
        alt="mnemonic data"
      >
  </div>
</template>

<script>
// @ is an alias to /src
import encodedMnemonic from '../App.vue'
import GenerateMnemonic from '../ts/GenerateMnemonic'
export default {
  name: 'home',
  data(){
      return{
          image:''
      }
  },
    Updated(){
  this.image = encodedMnemonic;
  }
}
</script>