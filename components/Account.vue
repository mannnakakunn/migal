<script setup lang="ts">
const supabase = useSupabaseClient();

const loading = ref(true);
const username = ref("");
const website = ref("");
const avatar_path = ref("");

loading.value = true;
const user = useSupabaseUser();
let { data } = await supabase
  .from("profiles")
  .select(`username, website, avatar_url`)
  .eq("id", user.value?.id)
  .single();
if (data) {
  username.value = data.username;
  website.value = data.website;
  avatar_path.value = data.avatar_url;
}
loading.value = false;

async function updateProfile() {
  try {
    loading.value = true;
    const user = useSupabaseUser();
    const updates = {
      id: user.value?.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    };
    let { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal", // Don't return the value after inserting
    });
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

async function signOut() {
  try {
    loading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = null;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
    location.reload();
  }
}
</script>

<template>
  <div>
    <v-row
      class="d-flex flex-center flex justify-center align-center col-6 form-widget px-4 text-center"
    >
      <v-col style="">
        <div class="text-h5 text-teal-darken-4 font-weight-bold header">
          Account Setting
        </div>
        <div class="text-subtitle-3 py-3 text-teal">Profile</div>

        <v-btn
          style="border-radius: 15.5px"
          class="bg-teal font-weight-bold round mb-4 px-6"
          >Edit
        </v-btn>
        <div>
          <v-btn
            class="bg-teal font-weight-bold round mb-4 px-6"
            @click="signOut"
            :disabled="loading"
          >
            Sign Out
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>

  <!-- <div style="margin-top: 10vh">
    <div class="text-h6 font-weight-bold">zawa</div>

    <div>Wanted</div>
    <div>Get</div>
    <div>Like</div>
  </div> -->
</template>

<style scoped>
.round {
  border-radius: 15.5px;
}
</style>
