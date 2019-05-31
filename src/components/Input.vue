<template>
  <div class="hello">
    <hr>
    <formgroup>
<!--      <v-text-field-->
<!--              v-model="x"-->
<!--              label="x"-->
<!--              required-->
<!--              @input="changedX"-->
<!--      ></v-text-field>-->
<!--      <v-text-field-->
<!--              v-model="y"-->
<!--              label="y"-->
<!--              required-->
<!--              @input="changedY"-->
<!--      ></v-text-field>-->
    </formgroup>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data: function () {
      return {
          x: 0,
          y: 0
      }
  },
    methods: {
        changedX: function(event) {
            this.$store.commit('changeX', this.x);
        },
        changedY: function(event) {
            this.$store.commit('changeY', this.y);
        }
    }

}
</script>


<style scoped>

</style>
