class point{
    public x:number;
    public y:number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    displayname="point";
    hienthi(c){
        let ax=this.x-c.x;
        let ay=this.y-c.y;
        return Math.hypot(ax,ay);
    }
} let p1=new point(10,13);
let p2=new point(15,8);
console.log(p1.displayname);
console.log(p1.hienthi(p2));