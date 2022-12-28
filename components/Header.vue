<script setup lang="ts">
// sideDrawer
let drawer = ref(null);
</script>

<template>
  <v-card style="z-index: 100">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        class="bg-teal-darken-4 py-6"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>

  <!-- ヘッダー -->
  <div
    class="d-flex flex-row justify-space-between align-center py-2 px-4"
    style="
      position: fixed;
      z-index: 99;
      width: 100vw;
      background-color: #f2f7f6;
      height: 7vh;
    "
  >
    <v-icon class="text-teal-darken-3" @click.stop="drawer = !drawer"
      >mdi-menu</v-icon
    >
    <div class="d-flex flex-row align-center">
      <div class="logo px-2">
        <img :src="'/img/logo-icon.png'" width="24" height="24" />
      </div>
      <div>
        <div
          style="font-size: 1.5rem; font-family: Futura, 'Century Gothic'"
          class="font-italic font-weight-light text-teal-darken-4"
        >
          nuxt3
        </div>
      </div>
    </div>
    <div>
      <v-icon class="pr-6 text-teal-lighten-3">mdi-magnify</v-icon>
      <v-avatar size="36" class="">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar>
    </div>
  </div>
</template>
