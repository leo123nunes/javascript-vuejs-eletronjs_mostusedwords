<template>
    <v-container>
        <v-form>
            <v-file-input label="Select the subtitle" 
            multiple
            prepend-icon="mdi-message-text"
            append-icon="mdi-send"
            v-model="files"
            chips
            outlined
            @click:append="loadSubtitles"
            />
        </v-form>
    <div class="pills">
        <Pill v-for="word in groupedWords" :key="word.name" :name="word.name"
        :amount="word.amount" :mostusedamount="mostUsedAmount"></Pill>
    </div>
    </v-container> 
</template>

<script>
import Pill from "./Pill.vue";
import {ipcRenderer} from 'electron'

export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupedWords: [],
      mostUsedAmount : 0
    };
  },
  methods: {
      loadSubtitles(){
        const paths = this.files.map(element => element.path)

        ipcRenderer.send('process-subtitles', paths)
        ipcRenderer.on('process-subtitles', (event, resp) => {
        this.groupedWords = resp
        let mostUsedAmount = 0

        for(let x = 0; x < resp.length; x++){
          if(resp[x].amount > mostUsedAmount){
            mostUsedAmount = resp[x].amount
          }
        }

        this.mostUsedAmount = mostUsedAmount
        console.log(`most used amount = ${this.mostUsedAmount}`)
        })
      }
  }
};
</script>

<style scoped>
    .pills{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        /* flex-direction: space-around; */
        flex-wrap: wrap;
    }
</style>