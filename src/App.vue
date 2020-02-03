<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import GetWalletFromMnemonicQRJson from './ts/GetWalletFromMnemonicQRJson'

export default {
  data () {
    return {
      password: '',
      image: ''
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted Import')
  },
  methods: {
    getPassWord () {
      console.log('on click button')
      console.log(this.password)
      // 入力値を代入したpasswordをthis.passwordとよしなに結びつけてくれるのがVue
      // methods内でのpasswordはローカル変数になるので定義されない
      const model = new SettingModel()
      model.password = this.password
      this.image = 'data:image/png;base64,' + exportMnemonic
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