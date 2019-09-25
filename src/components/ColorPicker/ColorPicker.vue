<template>
  <div class="color-picker">
    <div class="option" v-for="color in colors" :key="color" :class="color" @click="changeColor(color)"></div>
  </div>
</template>

<script lang="ts" src="./ColorPicker.ts">
</script>

<style lang="scss" scoped>
@import "./ColorPicker.scss";
</style>
