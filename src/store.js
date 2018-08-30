import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const langCodeList = ['kr', 'en']

export default new Vuex.Store({
  state: {
    language: 'en'
  },
  mutations: {
    changeLanguage (state, langCode) {
      if (langCodeList.indexOf(langCode) === -1) {
        langCode = 'en'
      }
      state.language = langCode
    }
  },
  actions: {

  }
})
