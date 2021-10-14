<template>
  <div>
    <v-app-bar app color="#ccc">
      <v-row justify="space-between" align="center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>O4ko inc.</v-app-bar-title>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="text--acent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/">List of decors</NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/about">About</NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <NuxtLink to="/contacts">Contacts</NuxtLink>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header.vue",

  data: () => ({
    drawer: false,
    group: null
  }),
}
</script>

<style scoped>

</style>
