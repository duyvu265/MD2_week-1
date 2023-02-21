class Docmoments {
    private _ID: number;
    private _NXH: string;
    private _SL: number;

    constructor(ID: number, NXH: string, SL: number) {
        this._ID = ID;
        this._NXH = NXH;
        this._SL = SL;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get NXH(): string {
        return this._NXH;
    }

    set NXH(value: string) {
        this._NXH = value;
    }

    get SL(): number {
        return this._SL;
    }

    set SL(value: number) {
        this._SL = value;
    }
}

class Book extends Docmoments {
    private _tentacgai: string;
    private _sotrang: number;

    constructor(ID: number, NXH: string, SL: number, tentacgai: string, sotrang: number) {
        super(ID, NXH, SL);
        this._tentacgai = tentacgai;
        this._sotrang = sotrang;
    }

    get tentacgai(): string {
        return this._tentacgai;
    }

    set tentacgai(value: string) {
        this._tentacgai = value;
    }

    get sotrang(): number {
        return this._sotrang;
    }

    set sotrang(value: number) {
        this._sotrang = value;
    }
}

class Tap_chi extends Docmoments {
    private _so_phat_hanh: number;
    private _Thang_phat_hanh: number;

    constructor(ID: number, NXH: string, SL: number, so_phat_hanh: number, Thang_phat_hanh: number) {
        super(ID, NXH, SL);
        this._so_phat_hanh = so_phat_hanh;
        this._Thang_phat_hanh = Thang_phat_hanh;
    }

    get so_phat_hanh(): number {
        return this._so_phat_hanh;
    }

    set so_phat_hanh(value: number) {
        this._so_phat_hanh = value;
    }

    get Thang_phat_hanh(): number {
        return this._Thang_phat_hanh;
    }

    set Thang_phat_hanh(value: number) {
        this._Thang_phat_hanh = value;
    }
}

class Newspayper extends Docmoments {
    private _ngayphathanh: number;

    constructor(ID: number, NXH: string, SL: number, ngayphathanh: number) {
        super(ID, NXH, SL);
        this._ngayphathanh = ngayphathanh;
    }

    get ngayphathanh(): number {
        return this._ngayphathanh;
    }

    set ngayphathanh(value: number) {
        this._ngayphathanh = value;
    }
}

interface QuanLysach {
    add(a:Docmoments):Docmoments;

    delete(b:number):void;

    show(ID);

    find(ID):any;

}

class QuanLySach implements QuanLysach {
    documents: Docmoments[] = [];
    book: Book[] = [];
    tapchi: Tap_chi[] = [];
    newpayper: Newspayper[] = [];

    add(a: Docmoments):any {
       this.documents.push(a);
    }

    addbook(b: Book): any {
        return this.book.push(b)
    }

    addtapchi(c: Tap_chi): any {
        return this.tapchi.push(c);
    }

    addnewspayper(d: Newspayper): any {
        return this.newpayper.push(d);
    }

    delete(b:number):void {
    }

    find(ID: number) :any {
        this.documents.forEach((function (value, index, array) {
            if (ID === value.ID) {
                return array[index];

            }

        }))
        return -1;
    }

    findbook(ID: number): any {
        this.book.forEach((function (value, index, array) {
            if (ID === value.ID) {
                return array[index];

            }

        }))
        return -1;
    }

    findtapchi(ID: number): any {
        this.tapchi.forEach((function (value, index, array) {
            if (ID === value.ID) {
                return array[index];

            }

        }))
        return -1;
    }

    findnewspayper(ID: number): any {
        this.newpayper.forEach((function (value, index, array) {
            if (ID === value.ID) {
                return array[index]

            }

        }))
        return -1;
    }

    show() {
    }

}