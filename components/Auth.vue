<script setup lang="ts">
const supabase = useSupabaseClient()
const query = useRoute()
const user = useSupabaseUser()

const loading = ref(false)

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, {
      replace: true,
    })
  }
})

const login_git = async () => {
  const redirectTo = `${window.location.origin}${query.path}`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: { redirectTo },
  })
  if (error) {
    console.error(error)
  }
}

const login_google = async () => {
  const redirectTo = `${window.location.origin}${query.path}`
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo },
  })
  if (error) {
    console.error(error)
  }
}

const glogin = '~/public/g-logo.png'
</script>

<template>
  <v-row class="d-flex justify-center align-center" style="margin-top: 10vh">
    <div class="bg-teal-lighten-3 pa-6" style="border-radius: 50%">
      <v-img
        width="25vw"
        height="25vw"
        src="http://www.serebii.net/pokemongo/pokemon/025.png"
      ></v-img>
    </div>
  </v-row>

  <v-form class="row">
    <v-row
      class="d-flex flex-center flex justify-center align-center col-6 form-widget px-4 text-center"
    >
      <v-col style="">
        <div class="text-h5 text-teal-darken-4 font-weight-bold header">
          Sign in
          {{ query.path }}
        </div>
        <div class="text-subtitle-3 py-3 text-teal">
          Sign in with Social media account
        </div>
        <div class="logobtn py-2" @click="login_google">
          <img
            style="width: 50vw"
            :src="'/btn_google_signin_light_normal_web@2x.png'"
          />
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>

<style scoped>
.logobtn:hover {
  cursor: pointer; /* マウスカーソルを手の形にする */
  opacity: 0.6; /* ボタンの透明度を60%にする */
}
</style>
