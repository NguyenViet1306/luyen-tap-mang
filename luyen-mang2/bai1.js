function bai1() {
    let array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

    for (let i in array)
    {
        console.log("row " + i);
        for (let j in array[i])
        {
            console.log(" " + array[i][j]);
        }
    }
}