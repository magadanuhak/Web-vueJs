import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        myJSON: [],
        currentSetup: {}
    },
    mutations: {
        changeMyJSON(state, result){
            state.myJSON = result;
        },
        changeCurrentSetup(state, value){
            state.currentSetup = value
        }
    },
    getters: {
        getMyJSON: state => state.myJSON,
        getCurrentSetup: state => state.currentSetup
    },
    actions: {
        checkSorage({ commit }, { self }){
            if(localStorage.getItem('currentSetup') !== null){
                commit("changeCurrentSetup", localStorage.getItem('currentSetup') )
            } else{
                commit("changeCurrentSetup", {} );
            }
            self.onLoad()
        },
        getData({ commit }, { self })  {
            const axios = require('axios');
            axios.get('/db.json')
                .then(function (response) {
                    commit("changeMyJSON", response.data.components );
                    self.updateSelect()
                })
        }
    }
});