const fs = require('fs')

module.exports = function(path){
    return new Promise((resolver, reject) => {
        try {
            var rows = path.map(element => fs.readFileSync(element).toString('utf-8'))
                        .reduce((totalText, textFile) => `${totalText}\n${textFile}`)
                        .split('\n')
            resolver(rows)
        }catch(e){
            reject(e)
        }
    })
}