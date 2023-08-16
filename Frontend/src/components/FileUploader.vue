<script setup>
import { ref } from 'vue'

const msg = ref('選択してファイルをアップロードしてください。')

</script>


<template>
    <div class="container">
        <label for="file-uploader">
            <input type="file" class="d-none">
            <i class="fa-solid fa-file fa-10x"></i>
        </label>
        <p v-text="msg"></p>
    </div>
</template>


<style scoped>
    .container {
        width: fit-content;
        border: 3px solid black;
        padding: 20px;
        display: flex;
        justify-content: center; /*左右中央揃え*/
        align-items: center;     /*上下中央揃え*/
    }

    label {
        width: 100%;
    }

    p, label {
        text-align: center;
    }
</style>