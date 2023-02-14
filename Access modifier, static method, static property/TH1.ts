class Application{
    private name:string;
    static count:number=0;
    constructor(name:string) {
        this.name=name;
        Application.count++;
    }
}

console.log(Application.count);
let a1=new Application("one mind");
console.log(Application.count);
let a2=new Application("no one");
console.log(Application.count);
