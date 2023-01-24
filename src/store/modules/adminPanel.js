import { db, storage } from "@/main"
// import { storage } from "@/main"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, getDoc, updateDoc, increment } from "firebase/firestore";
const adminPanel = {
    namespaced: true,
    state: () => ({
        showDashboard: false,
        showCreatedWindow: false,
        data: {},
        file: null,
        current_user: 'free2f23hop4',
        duration: null,
    }),
    mutations: {
        changeProgress(state, value) {
            state.duration = value
        },
        setFileState(state, value) {
            state.file = value
        },
        setDataState(state, value) {
            state.data = value
        },
        openCreatedWindow(state) {
            state.showCreatedWindow = true
        },
        closeCreatedWindow(state) {
            state.showCreatedWindow = false
        },
        openDashboard(state) {
            state.showDashboard = true
        },
        closeDashboard(state) {
            state.showDashboard = false
        }
    },
    actions: {
        async createdDocument(context) {
            // data is object, inside which contain data of product, use object to create document, next upload all images 
            // получаем дату и время
            const docRef = await addDoc(collection(db, "products"), context.state.data);
              console.log("Document written with ID: ", docRef.id);
        },
        
        async getCountImageNumber() {
            // Получаем число из документа, которое меняется на 1 каждую загрузку increment
            const docRef = doc(db, "imagesCount", "2Ya6j0A86l7oXfK1DXM8");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data().index
            } else {
                console.log("No such document!");
            }
        },

        async changeFieldIndex() {
            const docRef = doc(db, "imagesCount", "2Ya6j0A86l7oXfK1DXM8");
            await updateDoc(docRef, {
                index: increment(1),
            });
        },

        getProgress() {

        },

        async uploadImage(context) {
            console.log(context.state.file[0].type.split('/')[1])
            const typeFile = context.state.file[0].type.split('/')[1]
            if(typeFile != 'png')
            {
                console.log('so type not denied! change type please')
                return
            }
            if(context.state.file.length === 0 || context.state.file === null) {
                console.log('file is null')
                return
            }
            const imageRef = ref(storage, `images-of-products/product-${context.state.current_user.id}-${context.state.file[0].name}`+`${0}` + `${typeFile}` || '.png');
            const task = uploadBytesResumable(imageRef, context.state.file[0])
            task.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                context.commit('changeProgress', Math.ceil(progress))
                // console.log('Upload is ' + Math.ceil(progress) + '% done');
                switch (snapshot.state) {
                    case 'paused':
                      console.log('Upload is paused');
                      break;
                    case 'running':
                      console.log('Upload is running');
                      break;
                }
            }, (err) => console.log(err), () => {
                getDownloadURL(task.snapshot.ref).then((downloadURL) => {

                    console.log('File available at', downloadURL);
                });
            })
            console.log('Uploaded a blob or file!', task);
        }
    },
    getters: {

    }
}

export default adminPanel

// const storageRef = ref(storage, 'some-child');

// const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
// uploadBytes(storageRef, bytes).then((snapshot) => {
//   console.log('Uploaded an array!');
// });

// Upload the file and metadata
// const uploadTask = uploadBytesResumable(storageRef, file);

// Pause the upload
// uploadTask.pause();

// Resume the upload
// uploadTask.resume();

// Cancel the upload
// uploadTask.cancel();
