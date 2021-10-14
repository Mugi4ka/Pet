<template>
  <div class="text-center wrapper">
    <v-pagination
      v-model="currentPage"
      :length="lastPage"
      :total-visible="7"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    store: String,
    collection: String
  },

  watch: {
    currentPage(newVal, oldVal) {
      this.paginatePage(newVal);
    }
  },

  computed: {
    currentPage: {
      get() {
        return this.$store.state[this.store].current_page;
      },
      set(value) {
        this.$store.commit('setCurrentPage', value);
      }
    },
    lastPage: {
      get() {
        return this.$store.state[this.store].last_page;
      }
    }
  },

  methods: {
    paginatePage(pageNumber) {
      this.$store.dispatch('getDecorList', pageNumber)
    }
  }

}
</script>

<style scoped>
 .wrapper {
   width: 100%;
 }
</style>
