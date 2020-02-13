import { Password, NetworkType } from 'nem2-sdk';
import { MnemonicPassPhrase } from 'nem2-hd-wallets';
import { MnemonicQR } from 'nem2-qr-library';
// import variable from '../App.vue'
export default class GenerateMnemonic{

    static async exportEncodedQR(passwordStr: string) {
        try{
            var passnum = passwordStr.length
            const mnemonic = MnemonicPassPhrase.createRandom();
            const password = new Password(passwordStr);
            const generationHash = '45870419226A7E51D61D94AD728231EDC6C9B3086EF9255A8421A4F26870456A';
            const exportMnemonic = new MnemonicQR(mnemonic, password.value, NetworkType.MIJIN_TEST, generationHash);
            const encodedQR = exportMnemonic.toBase64().toPromise();
        
            if(passnum!=8){
                throw new Error("8文字のpasswordを入力して下さい")
            }
            return encodedQR;
        }catch(e){
            console.log("エラー：", e.message)
        }
    }
}
    //password: string = '';
    /*
    constructor(){
const mnemonic = MnemonicPassPhrase.createRandom();
const password = new Password('this.password');
const generationHash = 'CC42AAD7BD45E8C276741AB2524BC30F5529AF162AD12247EF9A98D6B54A385B';

const exportMnemonic = new MnemonicQR(mnemonic, password.value, NetworkType.TEST_NET, generationHash);
exportMnemonic.toBase64().subscribe(x => console.log(x));
}*/
