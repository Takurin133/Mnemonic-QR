<template>
  <div id="app">
    <ion-item>
      <div v-if="err">
        <ion-text color="danger"><p>{{err}}</p></ion-text>
      </div>
      <ion-label position="floating">password</ion-label>
      <ion-input
      @input="password = $event.target.value"
      ></ion-input>
        <ion-button size="small" shape="round" @click="getPassWord()"
          >Generate Account QRCode</ion-button>
      <img
        v-if="image"
        :src="image"
      >
    </ion-item>
  </div>
</template>

<script>
import GetWalletFromMnemonicQRJson from './ts/GetWalletFromMnemonicQRJson'
import GenerateMnemonic from './ts/GenerateMnemonic'

export default {
  data () {
    return {
      password: '',
      image: '',
      err: '',
      // accept: false
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted Import')
    // var node = document.getElementById('src');
    // if(node != null){
        //console.log("remove node=" + node.id);
	  // node.parentNode.removeChild(node);
  },
  // async Updated(){
  //   console.log("Updated")
  //   const encodedMnemonic = await GenerateMnemonic.exportEncodedQR(this.password);
      // this.image = encodedMnemonic;
  // },
  methods: {
    async getPassWord () {
      // $val = $("select[name='Goods']").val();
      console.log('on click button')
      console.log(this.password)
      this.err = '';
      this.image = '';
      // 入力値を代入したpasswordをthis.passwordとよしなに結びつけてくれるのがVue
      // methods内でのpasswordはローカル変数になるので定義されない
      // const model = new GetWalletFromMnemonicQRJson()
      // const a = new GenerateMnemonic()
      // model.password = this.password
      // a.model = this.password
      try {
        const encodedMnemonic = await GenerateMnemonic.exportEncodedQR(this.password);
        this.image = encodedMnemonic;
      } catch (e) {
        console.error(e);
        this.err = e;
      }
      // this.value = true;
      // render(h){
      //    return(
      //      <div class= "imgggg">
      //      <img src={image} alt ="mnemonic data"></img>
      //      </div>
      //    )};
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>