interface TEST_LIST<T>{
    add(data:T):void;
    get(index:number):T;
    size():number;
    remove():void;

}
class LIST<T> implements TEST_LIST<T>{
    container:Array<T>;

    constructor() {
        this.container = [];
    }

    add(data: T): void {
        this.container.push(data);
    }

    get(index: number): T {

        return this.container[index];
    }

    remove(): void {
        this.container.pop();

    }

    size(): number {
        return this.container.length;
    }

}
interface Post{
    tiler:string;

}
let list= new LIST<Post>();
list.add({tiler:`lap trinh JS`});
list.add({tiler:`lap trinh PHP`});
list.add({tiler:`lap trinh JAVA`});
console.log(list.container)