<template>
  <div class="parent">
    <div class="Selectors row" v-show="showConfigurator">
        Alege nume Setup<hr>
        <input type="text" name="numeSetup" v-model="nume" class="col-12">
        Alege motherboard
        <select v-show="isLoaded" v-model="motherboard" class="col-12">
            <option value="" selected>Alege Motherboard</option>
            <option v-for="item,index in $store.getters.getMyJSON.motherboard.motherboards"  v-bind:value="{name:item.name, index:index, cpus: item.cpus, socket: item.socket, rams: item.rams, price: item.price, ddr:item.ddr}">
                {{item.name}}
            </option>
        </select>
        <hr>
        Alege cpu
        <select v-for="cpu,index in motherboard.cpus"  v-show="motherboard !== ''" v-model="cpus[index]" class="col-12" >
            <option value="" selected>Alege CPU</option>
            <option v-show="item.socket == motherboard.socket" v-for="item, index in $store.getters.getMyJSON.cpu.cpus"  v-bind:value="{ name:item.name, socket: item.socket, index: index, img: item.img, price: item.price  }">
                {{item.name}}
            </option>
        </select>
        <hr>
        Alege Ram
        <select v-for="ram,index in motherboard.rams"  v-show="motherboard !== ''" v-model="rams[index]" class="col-12" >
            <option value="" selected>Alege RAM</option>
            <option v-show="item.ddr == motherboard.ddr" v-for="item,index in $store.getters.getMyJSON.ram.rams"  v-bind:value="{ name: item.name, index: index, img: item.img, price: item.price  }">
                {{item.name}}
            </option>
        </select>
        <hr>
        Alege Memorie
        <select
                v-model="mem" class="col-12">
            <option value="" selected>Alege Memorie</option>
            <option v-for="item,index in $store.getters.getMyJSON.mem.mems"  v-bind:value="{name:item.name, index:index, type: item.type, price: item.price}">
                {{item.name}}
            </option>
        </select>

        <hr>
        Alege Carcasa
        <select v-model="carcase" class="col-12">
            <option value="" selected>Alege Carcasa</option>
            <option v-for="item,index in $store.getters.getMyJSON.case.cases"  v-bind:value="{name:item.name, index:index,  price: item.price}">
                {{item.name}}
            </option>
        </select>
        <br>

        <button class="saveBtn btn btn-info m-1" @click="saveSetup">Salveaza</button>
        <div v-show="!isLoaded" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div class="cards">
      Cardurile
      <div class="row">
        <div v-for="card in pc[0]"  v-if="card.name" class="card border-success col mb-3" style="max-width: 18rem;">
          <div class="card-header bg-transparent border-success"> {{card.name}}</div>
          <div class="card-body text-success">
           {{ (card.price) ?  "price" : ""}}  {{card.price}}
          </div>        
        </div>
      </div>
      <div v-for="card in pc[0]" class="row">
        <div v-for="ac, index, key in card" v-if="ac.name" class="card border-success mb-3 col" style="max-width: 18rem;">
          <div class="card-header bg-transparent border-success">{{index}} | {{ac.name}}</div>
          <div class="card-body text-success">
         {{ (ac.price) ?  "price" : ""}}  {{ac.price}}
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selector',
  data: function () {
      return {
          pc:[],
          showConfigurator: false,
          motherboard: '',
          cpus:[],
          rams:[],
          mem:'',
          carcase:'',
          totalPrice: 0,
          isLoaded : false
      }
  },
    methods: {
        updateSelect(){
        this.isLoaded = true
        },
        saveSetup(){
            if(true){
            let pc = {};
            pc.name = this.nume;
            pc.motherboard = this.motherboard;
            pc.cpus = this.cpus;
            pc.rams = this.rams;
            pc.mem = this.mem;
            pc.case = this.case;
            localStorage.setItem('pc', JSON.stringify(pc));
            this.$store.commit('changeCurrentSetup', pc )
            this.showConfigurator = !this.showConfigurator
            this.showSetup()
          }
        },
          showSetup(){
              this.pc.push(JSON.parse(localStorage.getItem('pc')) )

          }
        }

    ,
    mounted() {
        this.$store.dispatch("getData", {"self" : this })
        if(localStorage.getItem('pc') == null) {
          this.showConfigurator = true
        }
        this.showSetup()
    }
}
</script>


<style scoped>

</style>
