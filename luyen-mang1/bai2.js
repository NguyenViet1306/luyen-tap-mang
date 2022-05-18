function bai2() {
    creatArray()
    let max = array[0]
    let index = 0
    for ( let i=0 ; i<array.length ; i++) {
        if ( array[i]>max ) {
            max = array[i]
            index = i
        }
    }
    alert("số lớn nhất là:" + max + "ở vị trí" + index )
}