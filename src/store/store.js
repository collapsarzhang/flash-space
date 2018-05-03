import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    currentUser: undefined
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    login(state) {
        state.currentUser = 'Demo User'
    },
    logout(state) {
        state.currentUser = undefined
    }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    login: ({commit}) => commit('login'),
    logout: ({commit}) => commit('logout')
}

// getters are functions
const getters = {
    currentUser: state => state.currentUser
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
