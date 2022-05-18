function bai5() {
    let num5 = [1, 6, -8, 9, -4, -7]
    let count = 0
    for ( let i=0 ; i<num5.length ; i++) {
        if ( num5[i]<0 ) {
            count++
        }
    }
    console.log(num5)
    console.log(count)
}
