<template>
  <div class="dog">
    <img src="../../assets/Dog_silhouette.svg" alt>
    <div class="bark" v-show="isBark">
      {{text}}
    </div>
  </div>
</template>

<script lang="ts" src="./Dog.ts">
</script>

<style scoped lang="scss">
@import "./Dog.scss";
</style>
