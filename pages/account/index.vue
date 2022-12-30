<script setup lang="ts">
// supabaseAuth
const supabase = useSupabaseClient();
const query = useRoute();
const user = useSupabaseUser();

const loading = ref(false);

// watchEffect(async () => {
//   if (user.value) {
//     await navigateTo(query.redirectTo as string, {
//       replace: true,
//     });
//   }
// });

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error(error);
  }
};
</script>

<template>
  <Header />
  <div v-if="!user">
    <div
      class="d-flex justify-center align-center"
      style="height: 80vh; background-color: #e0ece8"
    >
      <div class="d-flex flex-column justify-center align-center">
        <v-img
          style="width: 30vw; height: 30vw; border-radius: 50%"
          src="https://picsum.photos/id/400/300/300"
        />
        <v-form class="row">
          <v-row
            class="d-flex flex-center flex justify-center align-center col-6 form-widget px-4 text-center"
          >
            <v-col>
              <div
                class="text-h5 text-teal-darken-4 font-weight-bold header pt-6"
              >
                Sign in
              </div>
              <div class="text-subtitle-3 pt-1 pb-3 text-teal">
                Sign in with Social media account
              </div>
              <div
                class="d-flex flex-row justify-center align-center logobtn py-2"
                @click="login"
              >
                <v-img
                  :src="'/img/btn_google_signin_light_normal_web@2x.png'"
                />
              </div>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
  </div>
  <div v-else>
    <div style="padding-top: 20vh">
      <div
        class="d-flex justify-center align-center"
        style="height: 80vh; background-color: #e0ece8"
      >
        <div class="d-flex flex-column justify-center align-center">
          <v-img />
          <v-img
            style="width: 30vw; height: 30vw; border-radius: 50%"
            :src="user.user_metadata.avatar_url"
          />

          <v-form class="row">
            <v-row
              class="d-flex flex-center flex justify-center align-center col-6 form-widget px-4 text-center"
            >
              <v-col>
                <div
                  class="text-h5 text-teal-darken-4 font-weight-bold header pt-6"
                >
                  Hi,{{ user.user_metadata.name }}
                </div>
                <div class="text-subtitle-3 pt-1 pb-3 text-teal"></div>
                <v-btn
                  class="rounded-pill bg-white text-grey-darken-2 font-weight-bold text-capitalize d-flex flex-row justify-center align-center logobtn py-2"
                  elevation="1"
                  @click=""
                >
                  logout
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </div>
      you've login<br />
      your info is here<br />
      Hello {{ user.email }}
      <v-btn @click="signOut"></v-btn>
    </div>
  </div>
  <Footer />
</template>
