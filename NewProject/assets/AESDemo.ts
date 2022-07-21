import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;


declare class AES {
    decrypt(e: ArrayBuffer | ArrayBufferView): Uint8Array;
    encrypt(p: ArrayBuffer | ArrayBufferView): Uint8Array;
}

const HAS_AES = typeof AES !== "undefined";


@ccclass('AESDemo')
export class AESDemo extends Component {

    @property({ type: Label })
    originText: Label;

    @property({ type: Label })
    encryptedText: Label;

    @property({ type: Label })
    decryptedText: Label;

    aes: AES;

    start() {
        if (HAS_AES) {
            this.aes = new AES();
        }
    }

    updateText(msg: string) {
        this.originText.string = msg;
        if(HAS_AES) {
            let uint8array = new TextEncoder().encode(msg);
            let enc = this.aes.encrypt(uint8array);
            this.encryptedText.string = enc.toString();
            this.decryptedText.string = new TextDecoder("utf-8").decode(this.aes.decrypt(enc));
        } else {
            this.encryptedText.string = "AES not supported";
            this.decryptedText.string = "AES not supported";
        }
    }

    update(deltaTime: number) {

    }
}


