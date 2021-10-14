<template>
  <div>
    Контакты
    {{ user.name }}
  </div>
</template>

<script>

export default {
  name: "contacts",

  head() {
    return {
      title: 'Здеся страница Контакты',
    }
  },

  data() {
    return {
      user: []
    }
  },

  mounted() {
    this.getUser()
  },

  methods: {
    getUser() {
      this.$axios.$get("api/contacts")
      .then((res) => {
        this.user = res
      })
    }
  }
}
</script>

<style scoped>

</style>
