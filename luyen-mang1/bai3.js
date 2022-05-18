function bai3() {
    creatArray()
    let sum = 0
    let max = array[0]
    let tb=0
    for (let i = 0; i < array.length;i++ ){
        sum += +array[i]
        if (array[i] > max) {
            max = array[i]
        }
    }
    tb = sum/array.length
    console.log(array)
    console.log(max)
    console.log(tb)
}

