function getVowelsCount(str) {
    var vowelsCount = 0
    var it = str[Symbol.iterator]()

    for (let v of it) {
        if (('aeiou').includes(v)) {
            vowelsCount++
        }
    }


    return vowelsCount
}

module.exports = {
    getVowelsCount,
}