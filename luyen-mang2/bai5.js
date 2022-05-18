function bai5() {
    let array1 = [7, 0, 7, 27]
    let array2 = [7, 0, 7, 27]
    let flag = false
    if (array1.length === array2.length)
    {
        for ( let i=0; i<array1.length ; i++) {
           if (array1[i] !== array2[i]) {
               flag = true
           }
        }
    }
    else {
        flag = true;
    }

    if ( flag = true) {
        console.log("2 mảng giống nhau")
    } else {
        console.log("2 mảng không giống nhau")
    }


}