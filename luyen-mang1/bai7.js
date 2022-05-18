function bai7() {
    creatArray()
    let v = +prompt("nhập vào số: ")
    for (let i = 0; i < array.length; i++) {
        if (v === +array[i]) {
            array.splice(i,1)
            array.push("0")
        }

    }
    console.log(array)
}