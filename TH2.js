function geeks() {
    let obj = {name: 'peter', age: 25, salary: 3000}
    for (let i = 0; i <= 10; i += 2) {
        console.log(i + "")
    }
    for (let i of ['HANOI', 20.32, 3000]) {
        console.log(i + "")
    }
    for (let i in obj) {
        console.log(obj[i] + '')
    }
}
geeks();


