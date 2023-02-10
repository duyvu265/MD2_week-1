class Staff {
    private _name: string;
    private _email: string;
    private _age: number;


    constructor(name: string, email: string, age: number) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    getname(): string {
        return this._name;
    }

    setname(name:string): void {
        this._name = name;
    }

    getemail(): string {
        return this._email;
    }

    setemail(email: string):void {
        this._email = email;
    }

    getage(): number {
        return this._age;
    }

    setage(age: number):void {
        this._age = age;
    }
}
let staff1=new Staff("duy","duy123@gmail.com",15);
staff1.setage(20);
console.log(staff1.getname(),staff1.getemail(),staff1.getage());
