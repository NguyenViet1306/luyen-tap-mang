function bai3() {
    let count = 0
    let array = [ 'c', 's', 'c', '2', '6', '1' ]
    for ( let i=0 ; i<array.length ; i++) {
        if (!isNaN(array[i])) {
            count++
        }
    }
    console.log(count)
    console.log(array.length)
}
