module.exports = function(row){
    return new Promise((resolver, reject) => {
        try{
            var validData = row.filter(element => validRow(element))
                        .map(element => removePunctuation(element))
                        .map(element => removeTag(element))
                        .reduce((totalText, text) => merge(totalText, text))
                        .split(" ")
                        .map(word => word.toLowerCase())
                        .map(word => word.replace("'",""))
            resolver(validData)
        }catch(e){
            reject(e)
        }
    })
}

const validRow = function(row){
    var notNumber = !parseInt(row.trim())
    var notInterval = !row.includes('-->')
    var notEmpty = !!row.trim()

    return notNumber && notInterval && notEmpty
}

const removePunctuation = row => row.replace(/[,?!.-]/g, "")
const removeTag = row => row.replace(/(<[^>]+)>/g, "").trim()
const merge = (totalText, text) => `${totalText} ${text}`