import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SayHello')
export class SayHello extends Component {

    @property({type: Label})
    public resultLabel: Label | null = null;

    start() {

    }

    update(deltaTime: number) {

    }

    onSayHelloButtonClick() {
        let demo = new Demo('World');
        this.resultLabel.string = demo.hello('Cocos');
    }
}
