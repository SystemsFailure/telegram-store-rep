
const contentsModule = {
    namespaced: true,
    state: () => ({
        showViewProductComp: false,

    }),
    mutations: {
        openViewProductComp(state) {
            state.showViewProductComp = true
        },
        closeViewProductComp(state) {
            state.showViewProductComp = false
        }
    },
    actions: {

    },
    getters: {

    }
}

export default contentsModule