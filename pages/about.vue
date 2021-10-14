<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="firstname"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn
          elevation="2"
          @click="checkForm"
        >отправить</v-btn>
      </v-container>
    </v-form>
    <div>{{ firstname }}</div>
  </div>
</template>

<script>
export default {
  name: "about",

  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
  }),

  head() {
    return {
      title: 'Здеся поле Обо мне',
    }
  },

  methods: {
    checkForm() {
      console.log(1)
    }
  }
}
</script>

<style scoped>

</style>
