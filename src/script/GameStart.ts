export default class GameStart extends Laya.Script {
    constructor() { super(); }
    
    onEnable(): void {
    }

    onDisable(): void {
    }

    onClick(): void {
        Laya.Scene.open("test/TestScene.scene");
    }
}