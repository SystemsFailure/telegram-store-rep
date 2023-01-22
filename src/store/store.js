import {createStore} from "vuex";
import contentsModule from "./modules/contentsMoule";
import dbProductsController from './modules/DBProductsController';
import adminPanel from './modules/adminPanel'

const store = createStore({
    modules: {
        contentModule: contentsModule,
        productController: dbProductsController,
        adminPanel: adminPanel
    },
    state: () => ({
        token: '5871078876:AAErtPTON0UkNxv51O6TJF_fA9VeT3cOt6s',
        showHomeComp: true,
        showCatalogComp: false,
        showCartComp: false,
    }),
    mutations: {
        openHomeComp(state) {
            state.showHomeComp = true
            state.showCatalogComp = false
            state.showCartComp = false
        },
        openCatalogComp(state) {
            state.showCatalogComp = true
            state.showHomeComp = false
            state.showCartComp = false
        },
        openCartComp(state) {
            state.showCartComp = true
            state.showHomeComp = false
            state.showCatalogComp = false
        }
    }
})

export default store