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
        :amount="word.amount"></Pill>
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
      groupedWords: []
    };
  },
  methods: {
      loadSubtitles(){
        var paths = this.files.map(element => element.path)

        console.log('hiii')

        ipcRenderer.send('process-subtitles', paths)
        ipcRenderer.on('process-subtitles', (event, resp) => {
        this.groupedWords = resp
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