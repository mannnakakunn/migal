<script setup lang="ts">
import undermenubar from "/data/json/undermenubar.json";
</script>

<template>
  <!-- UnderMenu -->
  <div
    class="d-flex flex-row justify-space-between"
    style="
      position: fixed;
      bottom: 0;
      background-color: #eefaf5;
      z-index: 99;
      height: 12.5vh;
      padding-top: 1vh;
      padding-left: 2vw;
      padding-right: 2vw;
    "
  >
    <v-btn
      v-for="menu in undermenubar"
      :key="menu"
      class="text-teal-darken-4"
      variant="text"
      width="19.5vw"
      height="19.5vw"
      style="border-radius: 50%"
    >
      <NuxtLink :to="menu.url">
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">
            <v-icon>{{ menu.mdi }}</v-icon>
          </div>
          <div class="pt-1 text-teal" style="font-size: 0.5rem">
            {{ menu.title }}
          </div>
        </div>
      </NuxtLink>
    </v-btn>
  </div>
</template>
