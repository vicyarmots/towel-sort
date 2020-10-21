
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return (matrix != [] && !Array.isArray(matrix)) ? [] : matrix.flatMap((item,index) => index % 2 === 0 ? item : item.reverse()).flat()
}
