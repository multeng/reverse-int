module.exports = function reverse(n) {
    let result = Math.abs(n)
    result = result.toString().split('').reverse().join('')
    return +result
}
