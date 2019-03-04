
export default class ButtonScale extends Laya.Script{
    /** @prop {name:duration, tips:"动画时间", type:Int, default:100}*/
    public duration:number = 100;

    /** @prop {name:press, tips:"缩放幅度", type:Number, default:0.8}*/
    public press:number = 0.8;
    
    // public scale:
    constructor() {
        super();
    }

    onMouseDown() : void
    {
        Laya.Tween.to(this.owner,{scaleX:this.press,scaleY:this.press},this.duration);
    }

    onMouseUp() : void
    {
        Laya.Tween.to(this.owner,{scaleX:1,scaleY:1},this.duration);
    }

    onMouseOut() : void
    {
        Laya.Tween.to(this.owner,{scaleX:1,scaleY:1},this.duration);
    }
}