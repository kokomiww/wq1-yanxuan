const state = () => {
    return {
        username: 'zs',
    }
}

const mutations = {
    changeUserName(state) {
        state.username = 'ls'
    }
}
const actions = {
    changeUserAsync(context) {
        setTimeout(() => {
            context.commit('changeUserName')
        }, 1000)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}