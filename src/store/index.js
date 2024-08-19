import { createStore } from 'vuex'
import axios from 'axios'
/* eslint-disable */
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import{useCookies} from 'vue-cookies'

axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    fruits:null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async addUser({commit},info){
      let data = await axios.post('http://localhost:5050/users/insert',info)
      console.log(data);
    },
    async loginUser({commit},info){
    let {data} = await axios.post('http://localhost:5050/users/login',info)
    console.log(data); 
    $cookies.set('token', data.token)
    if (data.message){toast("Hello! Wow so easy!", {
      "theme": "auto",
      "type": "default",
      "dangerouslyHTMLString": true
    })}
    },
    async getFruit({commit}){
      let data = await axios.get('http://localhost:5050/fruit')
      commit('se')
    }
  },
  modules: {
  }
})
