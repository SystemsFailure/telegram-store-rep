import { db } from "@/main"
import { doc, getDoc } from "firebase/firestore";
const productIDControllerAPI = {
    namespaced: true,
    state: () => ({
        
    }),
    actions: {
        async getDocID(id) {
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }
    },
    mutations: {

    },
    getters: {

    }
}

export default productIDControllerAPI