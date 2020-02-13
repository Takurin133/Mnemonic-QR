<template>
  <div class="QrDisplay">
    <ion-item>
      <ion-label position="floating">password</ion-label>
      <ion-input
      @input="password = $event.target.value"
      ></ion-input>
      <router-link to="/qr-display">
        <ion-button size="small" shape="round" @click="getPassWord()"
          >Generate Account QRCode</ion-button>
      </router-link>
       <img
        :src="image"
        alt="mnemonic data"
      >
    </ion-item>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import encodedMnemonic from './QrDisplay'
import GenerateMnemonic from './ts/GenerateMnemonic'
export default {
  name: 'home',
  data(){
      return{
          image:''
      }
  },
  beforeUpdate(){
      
      const encodedMnemonic = await GenerateMnemonic.exportEncodedQR(this.password);
      this.image = encodedMnemonic;
      console.log("this.image")
  }
}
</script>
