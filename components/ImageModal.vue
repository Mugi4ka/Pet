<template>
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
</template>

<script>
export default {
  name: "ImageModal",
  //
  // data() {
  //   return {
  //     dialogFlag: {
  //       type: Boolean,
  //       default: false
  //     }
  //   }
  // },

  props: {
    url: String,
    dialog: Boolean,
  },
  //
  // computed() {
  //   this.dialogFlag = this.dialog;
  // },
}
</script>

<style scoped>

</style>
