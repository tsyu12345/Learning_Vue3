<script setup>
import { ref } from 'vue';
import FileUploader from './components/FileUploader.vue';


</script>

<template>
  <div id="send-photo-area" class="row">
    <!--写真を送信するエリア:カメラによる追加、ファイルからのアップロード-->
    <FileUploader />
  </div>
  <div id="result-area" class="row">
    <!--APIからの分析結果を表示するエリア-->
  </div>
</template>

<style scoped>
#send-photo-area {
  width: 50%;
  height: 100%;
  background-color: #8f8f8f;
}
</style>
