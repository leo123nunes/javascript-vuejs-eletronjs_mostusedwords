<template>
    <v-container>
        <v-form>
            <v-file-input label="Select the subtitle" 
            multiples 
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
export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupedWords: [
        { name: "words", amount: "1234" },
        { name: "test", amount: "900" }
      ],
    };
  },
  methods: {
      loadSubtitles(){
          console.log(this.files)
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