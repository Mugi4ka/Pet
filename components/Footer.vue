<template>
  <div>
    <v-footer app color="#ccc">
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>
