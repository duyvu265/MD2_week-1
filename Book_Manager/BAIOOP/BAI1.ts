import * as domain from "domain";

class Docmuments {
    private _ID: number;
    private _NXB: string;
    private _So_ban_phat_hanh: number;

    constructor(ID: number, NXB: string, So_phat_hanh: number) {
        this._ID = ID;
        this._NXB = NXB;
        this._So_ban_phat_hanh = So_phat_hanh;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get NXB(): string {
        return this._NXB;
    }

    set NXB(value: string) {
        this._NXB = value;
    }

    get So_ban_phat_hanh(): number {
        return this._So_ban_phat_hanh;
    }

    set So_phat_hanh(value: number) {
        this._So_ban_phat_hanh = value;
    }
}

class Book extends Docmuments {
    private _Ten_tac_gia: string;
    private _so_trang: number;

    constructor(ID: number, NXB: string, So_ban_phat_hanh: number, Ten_tac_gia: string, so_trang: number) {
        super(ID, NXB, So_ban_phat_hanh);
        this._Ten_tac_gia = Ten_tac_gia;
        this._so_trang = so_trang;
    }

    get Ten_tac_gia(): string {
        return this._Ten_tac_gia;
    }

    set Ten_tac_gia(value: string) {
        this._Ten_tac_gia = value;
    }

    get so_trang(): number {
        return this._so_trang;
    }

    set so_trang(value: number) {
        this._so_trang = value;
    }
}

class Tap_chi extends Docmuments {
    private _thang_phat_hanh: number;
    private _ngay_phat_hanh: number;

    constructor(ID: number, NXB: string, So_ban_phat_hanh: number, so_phat_hanh: number, ngay_phat_hanh: number) {
        super(ID, NXB, So_ban_phat_hanh);
        this._thang_phat_hanh = so_phat_hanh;
        this._ngay_phat_hanh = ngay_phat_hanh;
    }

    get so_phat_hanh(): number {
        return this._thang_phat_hanh;
    }

    set so_phat_hanh(value: number) {
        this._thang_phat_hanh = value;
    }

    get ngay_phat_hanh(): number {
        return this._ngay_phat_hanh;
    }

    set ngay_phat_hanh(value: number) {
        this._ngay_phat_hanh = value;
    }
}

class Newparper extends Docmuments {
    private _ngay_phat_hanh: number;

    constructor(ID: number, NXB: string, So_ban_phat_hanh: number, ngay_phat_hanh: number) {
        super(ID, NXB, So_ban_phat_hanh);
        this._ngay_phat_hanh = ngay_phat_hanh;
    }

    get ngay_phat_hanh(): number {
        return this._ngay_phat_hanh;
    }

    set ngay_phat_hanh(value: number) {
        this._ngay_phat_hanh = value;
    }
}

interface Ql_sach {
    add(a: Docmuments): any;

    delete(ID: number): void;

    show(): any;

    find(ID: number): any;

}

class QLY_SACH implements Ql_sach {
    documen: Docmuments[] = [];
    book: Book[] = [];
    tapchi: Tap_chi[] = [];
    newparper: Newparper[] = [];
    count:number=1;
    getId():number{
        return this.count++;
    }

    add(a: Docmuments): any {
        this.documen.push(a)
    }

    addbook(b: Book): void {
        this.book.push(b);
    }

    addtapchi(c: Tap_chi): void {
        this.tapchi.push(c);
    }

    addnewparper(d: Newparper) {
        this.newparper.push(d);
    }

    delete(ID: number): void {
        let deleteindex = this.find(ID);
        if (deleteindex == -1) {
            console.log("khong xac dinh")
        } else {
            this.documen.splice(deleteindex, 1)
        }
    }

    find(ID: number): any {
        // this.documen.forEach((function (value, index, array) {
        //     if (ID === value.ID) {
        //         console.log(array[index]);
        //
        //     }
        //
        // }))
        // return -1;
        return this.documen.findIndex((item)=>{
            return item.ID=ID;
        })
    }show() {
        return this.documen

    }

    showbook(): any {
        return this.book;
    }

    showtapchi(): any {
        return this.tapchi;
    }

    shownewparper(): any {
        return this.newparper;
    }

}

let input = require('readline-sync');
let QLSACH = new QLY_SACH();




function main() {
    let choise = -1;
    do {
        console.log(` 
            -----MENU-Main-----
            1.Them tai lieu 
            2.Xoa tai lieu 
            3.Hien thi thong tin tai lieu 
            0.Thoat khoi chuowng trinh`);
        choise = +input.question('nhap vao');
        switch (choise) {
            case 1:
                addall();
                break;
            case 2:
                deleteall();
                break;
            case 3:
                showall();
                break
        }

    } while (choise !== 0);

}

function addall() {
    let choise = -1;
    do {
        console.log(` 
            -----MENU-ADD-----
            1.Them sach" 
            2.them tap chi
            3.them bao 
            0.Thoat khoi chuowng trinh`);
        choise = +input.question('nhap vao');

        switch (choise) {
            case 1:
                addbook();
                break;
            case 2:
                addtapchi();
                break;
            case 3:
                addbao();
                break
        }

    } while (choise !== 0);


}

function deleteall() {
    let choise = -1;
    do {
        console.log(`
            -----MENU-DELETE-----
            1.nhap ID can xoa
            0.Thoat khoi chuowng trinh`);
        choise = +input.question('nhap vao');

        switch (choise) {
            case 1:
                deletes();
                break;
        }

    } while (choise !== 0);


}

function showall() {
    let choise = -1;
    do {
        console.log(
            ` 
            -----MENU-SHOW-----
            1.Show sach  
            2.Show tap chi 
            3.Show bao"  
            4.show tat ca
            0.Thoat khoi chuowng trinh 
            
        `)
        choise = +input.question('nhap vao');

        switch (choise) {
            case 1:
                showbook();
                break;
            case 2:
                showtapchi();
                break;
            case 3:
                showbao();
                break;
            case 4:
                showfull()
        }

    } while (choise !== 0);


}

function addbook() {
    console.log(`----MENU-ADDBOOK---- `);
    let ID = QLSACH.getId();
    let NXB = input.question(`Nhap ten NXB`);
    let sobanphathanh = input.question(`Nhap so phat hanh`);
    let tentacgai = input.question(`Nhap ten tac gia`);
    let sotrang = +input.question(`Nhap so trang`);
    let book: Book = new Book(ID, NXB, sobanphathanh, tentacgai, sotrang);
    QLSACH.addbook(book);
    QLSACH.add(book);
    console.log("thanh cong")
}

function addtapchi() {
    console.log(`----MENU-THEM TAP CHI---- `);
    let ID =    QLSACH.getId();
    let NXB = input.question(`nhap ten NXB`);
    let sobanphathanh = +input.question(`nhap so ban phat hanh`);
    let sophathanh = +input.question(`nhap so phat hanh`)
    let thangphathanh = +input.question(`nhap thang phat hanh`);
    let tapchi: Tap_chi = new Tap_chi(ID, NXB, sobanphathanh, sobanphathanh, thangphathanh)
    QLSACH.addtapchi(tapchi);
    QLSACH.add(tapchi);
    console.log("thanh cong")
}

function addbao() {
    console.log(`----MENU-THEM BAO---- `);
    let ID = QLSACH.getId();
    let NXB = input.question(`nhap ten NXB`);
    let sobanphathanh = +input.question(`nhap so ban phat hanh`);
    let ngayphathanh = +input.question(`nhap ngay phat hanh`)
    let bao: Newparper = new Newparper(ID, NXB, sobanphathanh, ngayphathanh)
    QLSACH.addnewparper(bao);
    QLSACH.add(bao);
    console.log("thanh cong")
}

function deletes() {
    let ID = + input.question((`nhap ID`));
            QLSACH.delete(ID);
}
function showbook(){
    console.table(QLSACH.showbook());
}
function showtapchi(){
    console.table( QLSACH.showtapchi());
}function showbao(){
    console.table(QLSACH.shownewparper());
}
function showfull(){
    console.table(QLSACH.show())
}

main()

