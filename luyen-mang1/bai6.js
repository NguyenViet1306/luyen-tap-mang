function bai6() {
    creatArray()
    let v= +prompt("nhập vào số: ")
    for ( let i=0 ; i<array.length ; i++) {
        if ( v == array[i] ){
            alert( v + "is in the array")
        }
        else {
            alert( v + "is not in the array")

        }
    }
}