const state = () => ({
  items: []
})

// getters
const getters = {
  cartProducts: (state) => {
    return state.items;
  }
}

// actions
const actions = {
  addItemToStandards({ state, commit }, standard) {
    commit('addItemToStandards', { standard })
  },
  removeItemFromStandards({ state, commit }, standard) {
    commit('removeItemFromStandards', { standard })
  },
  clearStandards({ state, commit }) {
    commit('clearStandards')
  }
}

// mutations
const mutations = {
  addItemToStandards(state, { standard }) {
    if (state.items.includes(standard)) {
      state.items.splice(state.items.indexOf(standard), 1);
    } else {
      state.items.push(standard)
    }

  },
  removeItemFromStandards(state, { standard }) {
    if (state.items.includes(standard)) { //affirm object exists
      state.items.splice(state.items.indexOf(standard), 1);
    }
  },
  clearStandards(state){
    state.items = [];
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
