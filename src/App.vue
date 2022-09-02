<template>
    <div class="container">
        <h1>Vue</h1>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const counter = ref(0)

const newCount = computed(() => {
    return counter.value
})
</script>

<style scoped lang="less">
.container {
    width: 100vw;
    height: 100vh;
    background: url("./assets/bg.jpg") no-repeat center center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
