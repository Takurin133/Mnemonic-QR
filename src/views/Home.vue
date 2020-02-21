<template>
  <div class="home">
    <ion-item>
      <ion-label position="floating">password</ion-label>
      <ion-input @input="password = $event.target.value"></ion-input>
      <router-link to="/qr-display">
        <ion-button size="small" shape="round" @click="getPassWord()"
          >Generate Account QRCode</ion-button
        >
      </router-link>
          <img :src="image" alt="mnemonic data" />
    </ion-item>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
