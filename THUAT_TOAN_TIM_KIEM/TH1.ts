
function timkiem(data:number[]):number[] {
    let i: number = 1;
    let newarr: Array<number> = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            newarr.push(i);

        }
        i++;
    }
    console.log(newarr);

}
let arr:Array<number>=[1,2,3,4,5,7,9];
timkiem(arr);
