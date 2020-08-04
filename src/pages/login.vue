<template>
  <v-container class="fill-height" fluid>
    <v-alert :value="alert.value" :type="alert.type" />
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>-->
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Login" name="login" prepend-icon="mdi-account" type="text"></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-btn outlined fab @click="googleSignIn()" color="#4285F4">
        <v-icon>fab fa-google</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "@vue/composition-api"

export default defineComponent({
  name: "Login",
  components: {},
  setup(props, ctx) {
    const provider: any = ref("")
    const alert: any = ref({
      value: false,
      type: "success",
      text: "",
      dismissible: true
    })

    const googleSignIn = async () => {
      provider.value = new ctx.root.$fireAuthObj.GoogleAuthProvider()
      console.log("googleSignIn -> provider", provider)
      try {
        await ctx.root.$fireAuth.signInWithPopup(provider).then((result) => {
          ctx.root.$router.push({ path: "home" })
        })
      } catch (e) {
        alert.value = true
        alert.type = "error"
        alert.text = e.message

        console.log(e)
      }
    }
    return { alert, googleSignIn }
  }
})
</script>
