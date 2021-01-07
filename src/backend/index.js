import { ipcMain } from 'electron'

ipcMain.on('process-subtitles', (event, args) => {
    console.log(args)

    event.reply('process-subtitles', [
        { name: "words", amount: 1234 },
        { name: "test", amount: 900 },
        { name: "words2", amount: 854 },
        { name: "test2", amount: 600 }
    ])
})