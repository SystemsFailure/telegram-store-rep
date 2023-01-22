// import { db, storage } from "@/main"
import { storage } from "@/main"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const adminPanel = {
    namespaced: true,
    state: () => ({

    }),
    mutations: {

    },
    actions: {
        async getCountImageNumber() {
            // Получаем число из документа, которое меняется на 1 каждую загрузку increment
        },
        getProgress() {

        },
        async uploadImage(user, file) {
            const typeFile = file.type.split('/')[1]
            if(typeFile != 'png')
            {
                console.log('so type not denied! change type please')
                return
            }
            const imageRef = ref(storage, `images-of-products/product-${user.id}-${file.name}`+`${0}` + `${typeFile}` || '.png');
            const task = await uploadBytesResumable(imageRef, file)
            task.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
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
