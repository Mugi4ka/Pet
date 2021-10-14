<template>
  <v-row>
      <v-col
        v-for="decor in getDecors"
        :key="decor.id"
        cols="12"
        md="4"
        sm="6"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ decor.title }}
              </div>
              <v-list-item-subtitle>{{ decor.classifier }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
              @click="showModal(decor.image)"
            >
              <v-img
                :src="decor.image"
              ></v-img>
            </v-list-item-avatar>

          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              text
            >
              Button
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>

      <Pagination store="decors"/>
      <!--    <ImageModal :dialog="dialog" :url="url"/>-->
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <v-card>
            <v-card-actions>
              <v-img
                contain
                :src="url"
              ></v-img>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
  </v-row>

</template>

<script>
import Pagination from "./Pagination";
import ImageModal from "./ImageModal";
import Loader from "./Loader";

export default {
  components: {
    ImageModal,
    Pagination,
    Loader
  },

  data() {
    return {
      decors: [],
      dialog: false,
      url: '',
      loading: true
    }
  },

  computed: {
    getDecors() {
      return  this.$store.getters.getDecors.data;
    },
  },

  created() {
    this.$store.dispatch("getDecorList", 0)
  },

  methods: {
    showModal(url) {
      this.url = url;
      this.dialog = true;
    },
  }
}
</script>

<style scoped>

</style>
