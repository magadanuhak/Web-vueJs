<template>
  <div class="Selectors row">
      <select v-model="carcase" class="col-12">
          <option value="" selected>Alege Carcasa</option>
          <option v-for="item,index in $store.getters.getMyJSON.case.cases"  v-bind:value="{name:item.name, index:index,  price: item.price}">
              {{item.name}}
          </option>
      </select>
      <br>
      <button class="saveBtn btn btn-info m-1">Vezi setup</button>
      <button class="saveBtn btn btn-info m-1">Salveaza</button>
      <div v-show="!isLoaded" class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'selector',
  data: function () {
      return {
          nume: '',
          motherboard: '',
          cpus:[],
          rams:[],
          mem:'',
          carcase:'',
          isLoaded : false
      }
  },
    methods: {
        updateSelect(){
        this.isLoaded = true
        },
        saveSetup(){
            let pc = {}
            pc.motherboard = this.motherboard
            pc.cpus = this.cpus
            pc.rams = this.rams
            pc.mem = this.mem
            pc.case = this.case
            localStorage.setItem('', pc)
            this.$store.dispatch('getData', {"self": this})
        }

    },
    mounted() {
        this.$store.dispatch("getData", {"self" : this })
    }
}
</script>


<style scoped>

</style>
