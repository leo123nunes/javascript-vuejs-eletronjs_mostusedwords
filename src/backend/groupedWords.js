module.exports = function(words){
    return new Promise((resolve, reject) => {
        try{
            var groupedWords = words.reduce((objWords, word) => {
                if(objWords[word]){
                    objWords[word] = objWords[word] + 1
                }else{
                    objWords[word] = 1
                }
                return objWords
            }, {})

            var result = Object.keys(groupedWords).reduce((result, element) => {
                var newObj = {name: "", amount: 0}
                newObj.name = element
                newObj.amount = groupedWords[newObj.name]
                result.push(newObj)

                return result
            }, [])

            amountSorter(result)

            resolve(result)
        }catch(e){
            reject(e)
        }
    })
}

const amountSorter = function(data){
    for(let x = 0; x < data.length; x++){
        for(let y = 0; y < data.length; y++){
            if(data[x].amount > data[y].amount){
                let aux = data[y]
                data[y] = data[x]
                data[x] = aux
            }
        }
    }
}