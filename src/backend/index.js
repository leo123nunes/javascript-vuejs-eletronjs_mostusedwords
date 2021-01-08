import { ipcMain } from 'electron'
const pathToRow = require('./pathToRow.js')
const prepareData = require('./prepareData.js')
const groupedWords = require('./groupedWords.js')

ipcMain.on('process-subtitles', (event, args) => {
    pathToRow(args)
    .then(result => prepareData(result))
    .then(result => groupedWords(result))
    .then(result => {
        event.reply('process-subtitles', result)
    })
})