class circle {
   public r : number;

    constructor( r: number) {
        this.r = r;
    }
    khoangcach(ht2:circle):number{
        let OR :number=Math.sqrt( Math.pow((ht1.r-ht2.r),2)+Math.pow(24,2));
        return OR;
   }
}
let ht1=new circle(9);
let ht2=new circle(5);
console.log(ht1.khoangcach(ht2));
