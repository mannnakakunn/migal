<script setup lang="ts">
// NuxtContent
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
import { randomInt } from "crypto";
// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import undermenubar from "/data/json/undermenubar.json";

// import required modules
import { Controller, FreeMode, Navigation, Pagination, Thumbs } from "swiper";

const query: QueryBuilderParams = {
  path: "/articles",
  limit: 5,
};

// Footer
const icons = [
  "mdi-facebook",
  "mdi-twitter",
  "mdi-linkedin",
  "mdi-instagram",
  "mdi-instagram",
];

const items = [
  {
    color: "#1F7087",
    src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
    title: "Items Name No.1",
    artist: "1",
  },
  {
    color: "#952175",
    src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
    title: "Items Name No.2",
    artist: "2",
  },
];

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
  <div style="background-color: #f2f7f6">
    <!-- ヘッダー -->
    <div
      class="d-flex flex-row justify-space-between align-center py-2 px-4"
      style="
        position: fixed;
        z-index: 99;
        width: 100vw;
        background-color: #f2f7f6;
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
      <v-avatar size="36" class="">
        <v-img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        ></v-img>
      </v-avatar>
    </div>

    <div
      style="padding-top: 7vh; padding-bottom: 15vh; background-color: #e0ece8"
    >
      <!-- メイン記事 -->
      <div class="d-flex flex-row align-center justify-center pt-6" style="">
        <div class="">
          <ContentList path="/items" v-slot="{ list }">
            <div v-for="article in list.slice(1)" :key="article._path">
              <v-card width="330" class="rounded-xl mb-6">
                <v-img
                  gradient=" rgba(0,0,0,.1), rgba(0,0,0,.7)"
                  height="200"
                  src="https://picsum.photos/id/122/550/330"
                  ><div
                    class="fill-height bottom-gradient d-flex align-end flex-between align-bottom"
                  >
                    <div class="pa-4">
                      <div
                        class="pb-2 mb-2"
                        style="
                          border-bottom: solid 1px rgba(255, 255, 255, 0.45);
                        "
                      >
                        <h2 class="text-teal-lighten-5">
                          {{ article.name }}
                        </h2>
                      </div>
                      <div
                        style="font-size: 0.55rem"
                        class="d-flex flex-row text-teal-lighten-2 text-white"
                      >
                        <v-avatar size="24" class="mr-">
                          <v-img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                          ></v-img>
                        </v-avatar>
                        <div class="d-flex flex-column">
                          <div class="text-teal-lighten-4 font-weight-bold">
                            John
                          </div>
                          <div>Update 2022.10.11</div>
                        </div>
                      </div>
                      <!-- <h4 class="text-white py-2">${{ article.price / 100 }}</h4> -->
                      <!-- <h4 class="text-right text-white"> -->
                      <!-- {{ article.weight }}kg -->
                      <!-- </h4> -->
                    </div>
                  </div>
                </v-img>
              </v-card>
            </div>
          </ContentList>
        </div>
        <!-- 最新情報 -->
      </div>

      <div class="pb-6" style="">
        <div class="px-4 font-weight-bold text-teal-darken-4 pb-4">Latest</div>
        <swiper
          :slidesPerView="2.75"
          :spaceBetween="10"
          :freeMode="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper pb-2 pl-4"
        >
          <swiper-slide v-for="n in 8" class=""
            ><v-card class="rounded-xl pb-4" elevation="0" height="165"
              ><v-img :src="'https://picsum.photos/300/200?random' + n">
              </v-img>
              <div class="pa-3">
                <div
                  class="text-left text-teal-darken-4 mb-2"
                  style="
                    font-size: 0.75rem;
                    height: 1.75rem;
                    border-bottom: 1px solid #c3dbd5;
                  "
                >
                  Article title
                </div>
                <div class="d-flex flex-row">
                  <v-avatar size="12">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    ></v-img>
                  </v-avatar>
                  <div class="text-teal pl-1 pb-0" style="font-size: 0.65rem">
                    John
                  </div>
                </div>
                <div style="font-size: 0.65rem" class="text-grey">
                  Update.2022.10.11
                </div>
              </div>
            </v-card>
          </swiper-slide>
        </swiper>
      </div>
      <div class="px-4 font-weight-bold text-teal-darken-4 pb-4">Popular</div>
      <swiper
        :slidesPerView="1.35"
        :spaceBetween="10"
        :freeMode="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper pb-2 pl-4"
      >
        <swiper-slide v-for="n in 3">
          <div
            v-for="n in 3"
            class="d-flex flex-no-wrap justify-space-between align-center mb-3 pb-3"
            style="border-bottom: solid 1px #c3dbd5; font-size: 0.8rem"
          >
            <div>
              <v-img
                class=""
                style="border-radius: 15.5px; width: 15vw; height: 15vw"
                :src="'https://picsum.photos/400?random=' + n + 99"
              ></v-img>
            </div>
            <div style="width: 10vw">
              <div
                class="text-center font-weight-bold text-teal"
                v-text="items[0].artist"
              ></div>
            </div>
            <div
              class="d-flex flex-column"
              style="width: 60vw; word-wrap: break-word"
            >
              <div
                style="height: 1.6rem"
                class="text-teal-darken-4"
                v-text="items[0].title"
              ></div>
              <div class="d-flex flex-column">
                <div class="d-flex flex-row">
                  <v-avatar size="16" class="mr-1 mb-1">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    ></v-img>
                  </v-avatar>
                  <div
                    class="text-teal-darken-4 mr-2"
                    style="font-size: 0.65rem"
                  >
                    John
                  </div>
                  <div class="text-grey" style="font-size: 0.6rem">
                    2022.12.31
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Special -->
      <div class="bg-teal-darken-2 pa-6 mx-4 rounded-xl" style="height: auto">
        <div
          class="font-weight-bold pb-4 mb-4"
          style="
            color: #e2fcf1;
            border-bottom: solid 1px #378b71;
            font-size: 1rem;
          "
        >
          特集が入ります
        </div>
        <div
          v-for="n in 3"
          class="d-flex flex-no-wrap justify-space-between align-center mb-6 pb-4"
          style="border-bottom: solid 1px #378b71"
        >
          <div>
            <v-img
              class=""
              style="border-radius: 15.5px; width: 15vw; height: 15vw"
              :src="'https://picsum.photos/400?random=' + n"
            ></v-img>
          </div>
          <div
            class="d-flex flex-column"
            style="width: 60vw; word-wrap: break-word; color: #b7fad3"
          >
            <div v-text="items[0].title"></div>
            <div class="text-teal-lighten-3 text-subtitle-2">2022.12.31</div>
          </div>
        </div>
      </div>

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
    </div>
  </div>
</template>
