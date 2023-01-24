import { db } from "@/main"
import { collection, query, getDocs } from "firebase/firestore";
const dbProductsController = {
    namespaced: true,
    state: () => ({
        listProducts: [],
    }),
    mutations: {
        pushListProducts(state, data) {
            state.listProducts.push(data)
        },
    },
    actions: {
        async getAllProducts(context) {
            context.state.listProducts = []
            const q = query(collection(db, "products"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const data = {
                    // arrayUsersReviews: doc.data().arrayUserReview,
                    arrayImages: doc.data().arrayImages,
                    id: doc.id,
                    title: doc.data().name,
                    atCreated: doc.data().atCreated,
                    atUpdated: doc.data().atUpdated,
                    brand: doc.data().brand,
                    collection: doc.data().collection,
                    color: doc.data().color,
                    cost: doc.data().cost,
                    countBuys: doc.data().countBuys,
                    countryManufacture: doc.data().countryManufacture,
                    description: doc.data().description,
                    gender: doc.data().gender,
                    materialType: doc.data().materialType,
                    modelFeatures: doc.data().modelFeatures,
                    procentSale: doc.data().procentSale,
                    sale: doc.data().sale,
                    season: doc.data().season,
                    style: doc.data().style,
                    typeEmployees: doc.data().typeEmployees,
                    typeEvent: doc.data().typeEvent,
                    typeProduct: doc.data().typeProduct
                }
                context.commit('pushListProducts', data)
            });
            return context.getters.returnListProducts
        },
    },
    getters: {
        returnListProducts(state) {
            return state.listProducts
        },
    }
}

export default dbProductsController