<template>
  <Map ref="mapRef" :statrAddress="[113.539333, 22.242564]" type="view" />
</template>

<script lang="ts" setup>
import { ref, nextTick } from "vue";
import Map from "../page/Index.vue";
const mapRef = ref<InstanceType<typeof Map>>()
  nextTick(() => {
    mapRef.value?.getMapList()
  })
</script>
