<template>

  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <selector>
          </selector>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Selector from './components/Selectors'

export default {
  name: 'App',
  data () {
      return {
          // links:["ok.ru"]
      }
  },
  computed: {

  },
  components: {
    'selector' : Selector
  },
  methods:{
    onLoad(){
      console.log( this.store.getters.getCurrentSetup)
    }
  },
  mounted() {
    this.store.dispatch('checkSorage', {self: this})

  }

}
</script>
