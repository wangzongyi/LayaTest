import { ui } from "./../ui/layaMaxUI";

export default class MainSceneUI extends ui.Scene.MainSceneUI {
    
    private flag:boolean = false;

    constructor() { 
        super(); 
        Laya.Stat.show(0, 0);
        Laya.loader.load("res/atlas/hec.atlas", Laya.Handler.create(this, this.onLoaded));
    }
    
    onLoaded() : void
    {
        var name = "wzc";
        console.log(`my name is ${name}`)

        this.onString("a", "b");

        var someValue : number = 12;
        var str = someValue.toString();
        var num : number = str.length;
        console.log("length :" + num);
        console.log("type :" + typeof(str));

        var image = new Laya.Image();
        image.skin = "hec/hec01.png";
        image.pos(250, 50);

        this.addChild(image);

        var sprite = new Laya.Sprite();
        sprite.loadImage("hec/hec01.png");
        sprite.pos(250, 250);
        this.addChild(sprite);

        sprite.on("click", this, ()=>
        {
            this.onSwitch(sprite.graphics);
        });

        // var boom = new Laya.Animation();
        // boom.loadAnimation("Animation/boom.ani");
        // this.addChild(boom);
        // boom.play();
    }

    onEnable(): void {
    }

    onDisable(): void {
    }

    onSwitch(grapic:Laya.Graphics): void 
    {
        var url : string = (this.flag = !this.flag) ? "hec/hec01.png" : "hec/hec14.png";
        var texture = Laya.loader.getRes(url);
        grapic.drawTexture(texture);
    }

    onString(s1:string, s2:string)
    {
        console.log(`error ${s1} ${s2}`)
    }
}