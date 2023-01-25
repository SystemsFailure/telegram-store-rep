<template>
    <div class="main-class-module-created-card">
        <div class="inner">
            <div class="title"><span style="margin-left: auto;">Создать продуктовую карточку</span> <i @click="closeCreatedWindow" style="transform: translateX(-15px); color: #333; margin-left: auto; font-size: 12px;" class="fi fi-bs-cross"></i></div>
            <div v-if="showErrorNotify" class="error-line"><span id="error-text">Вы не ввели название продукта, пожалуйста заполните данное поле, оно обязательно к заполнению</span><i @click="() => {this.showErrorNotify = false}" style="padding:5px; transform: translateX(-0px); color: #fff; margin-left: auto; font-size: 10px;" class="fi fi-bs-cross"></i></div>
            <div class="wrapper-container"></div>
            <div class="wrapper-box-deep-level">
                <div class="img-box">
                    <div class="wrapper-inline">
                        <div id="list-photos"><span>0</span> <div class="wapper-list-photos" style="font-size: 8px; margin-left: 1px;"> %</div></div>
                    </div>
                    <div class="wrapper-inline inline-progress">
                        <div id="progress-id">
                            <div class="inner-progress-id" id="progress-bar-id"></div>
                        </div>
                    </div>
                    <img src="@/assets/openIMG.png" alt="" id="choiceImage">
                    <label for="file" class="btn-choice-image">Загрузить фотографии</label>
                    <input type="file" id="file" name="file" multiple style="width:0px;height:0px;display:none;opacity:0;" accept=".jpg, .jpeg, .png" @change="uploadImages($event)">
                </div>
                <div class="name-and-cost-and-sale-procent">
                    <input type="text" placeholder="Название продукта" class="inp-class" style="border: 1px solid red;">
                    <input type="text" placeholder="Цена продукта" class="inp-class">
                    <input type="text" placeholder="Сумма скидки" class="inp-class">
                    <input type="text" placeholder="Процент скидки, вычисляется автоматически" class="inp-class">
                </div>
            </div>
            <div class="wrapper-other-box-deep-level">
                <textarea class="inp-class" placeholder="Описание продукта" name="desc" id="desc-area-text" cols="30" rows="10" style="max-width: 290px;max-height: 150px; min-height: 85px; min-width: 290px; height: 85px;"></textarea>
            </div>
            <div class="wrapper-other-box-deep-two-level">
                <input type="text" placeholder="Введите бренд продукта" class="inp-class">
                <input style="margin-left: auto;" type="text" placeholder="Тип продукта. Пример: куртка, брюки" class="inp-class">
            </div>
            <div class="wrapper-other-box-deep-two-level">
                <input type="text" placeholder="Коллекция" class="inp-class">
                <input style="margin-left: auto;" type="text" placeholder="Цвет" class="inp-class">
            </div>
            <div class="wrapper-other-box-deep-two-level">
                <input type="text" placeholder="страна производитель" class="inp-class">
                <input style="margin-left: auto;" type="text" placeholder="Пол" class="inp-class">
            </div>
            <div class="wrapper-other-box-deep-two-level">
                <input type="text" placeholder="Тип материала" class="inp-class">
                <input style="margin-left: auto;" type="text" placeholder="Стиль" class="inp-class">
            </div>
            <div class="wrapper-other-box-deep-two-level">
                <input type="text" placeholder="Сезон" class="inp-class">
                <input style="margin-left: auto;" type="text" placeholder="Тип карманов" class="inp-class">
            </div>
            <div class="wrapper-other-box-deep-two-level">
                <button @click="createdDocumentLocal" class="btn-conf btn-choice-image">Создать</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            showErrorNotify: true,
        }
    },
    computed: {
        ...mapState('adminPanel', {
            data: 'data',
            file_state: 'file',
            duration: 'duration',
        }),
    },
    watch: {
        duration: {
            handler(newValue) {
                let progress = document.getElementById('progress-bar-id')
                let procentProgress = document.getElementById('list-photos')
                console.log(newValue)
                if(newValue != 100) {
                    progress.style.height = `${newValue}%`
                    procentProgress.innerText = `${newValue}%`
                } else {
                    progress.style.height = '0%'
                    procentProgress.innerHTML = '0'
                }
            },
            deep: true
        }
    },
    methods: {
        ...mapMutations('adminPanel', {
            closeCreatedWindow: 'closeCreatedWindow',
            setDataState: 'setDataState',
            setFileState: 'setFileState',
        }),
        ...mapActions('adminPanel', {
            createdDocument: 'createdDocument',
            uploadImage: 'uploadImage',
        }),
        uploadImages(e) {
            let file = e.target.files
            if(file.length === 1) {
                this.setFileState(file)
                // this.uploadImage()
            }else {
                this.setFileState(file)
            }
        },
        createdDocumentLocal() {
            let array = []
            let today = new Date();
            let now = today.toLocaleString();
            let listInputs = document.getElementsByClassName('inp-class')
            console.log(listInputs[0].value, typeof listInputs[0].value)
            for (let index = 0; index < listInputs.length; index++) {
                if(listInputs[index].value === '') 
                {
                    console.log('you dont to contain all fields? please to check field, all field to could be contain')
                    return
                }
                const element = listInputs[index]
                array.push(element.value)
            }
            this.setDataState({
                arrayImages: [],
                arrayUserReview: [],
                atCreated: now,
                atUpdated: now,
                name: array[0],
                coutryManufacture: array[9],
                brand: array[5],
                collection: array[7],
                color: array[8],
                cost: array[1],
                countBuys: '0',
                description: array[4],
                gender: array[10],
                materialType: array[11],
                procentSale: array[3],
                sale: array[2],
                season: array[13],
                style: array[12],
                typeEmployees: array[14],
                typeProduct: array[6],
                modelFeatures: null,
                typeEvent: null,
            })
            this.uploadImage()
        }
    }
}
</script>
<style scoped>
.title {
    width: 100%;
    /* padding-top: 20px; */
    margin-top: 80px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
}

.error-line {
    margin-top: 10px;
    width: 80%;
    padding: 10px;
    background-color: rgb(255, 40, 40);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

}

#error-text {
    color: white;
}

.main-class-module-created-card {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    font-size: 9px;
    z-index: 15;
    padding: 10px;
}

.inner {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-bottom: 20px;
    /* padding-top: 60px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px 10px #888;
    border-radius: 10px;
}

.wrapper-other-box-deep-two-level {
    width: 290px;
    margin-top: 10px;
    display: flex;
    align-items: center;

}

.wrapper-other-box-deep-level {
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.wrapper-box-deep-level {
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* .wrapper-container {
    border-top: 1px solid #999;
    margin-top: 5px;
    height: 1px;
    width: 60%;
} */

.img-box {
    position: relative;
    /* margin-top: 10px; */
    padding: 2px 10px 8px 10px;
    border: 1px solid #999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-right: 10px;
}

.wrapper-inline {
    padding: 0;
    top: 0;
    position: absolute;
    width: 100%;
    display: flex;
}

#list-photos {
    width: 26.52px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items:center;
    border: 1px solid #999;
    transform: translateX(-31.5px) translateY(-1px);
}


.inline-progress {
    padding: 0;
    top: 0;
    position: absolute;
    width: 100%;
    display: flex;
}

#progress-id {
    padding-bottom: 5px;
    border: 1px solid #999;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 67px;
    width: 26.52px;
    transform: translateX(-31.5px) translateY(20px);
}

.inner-progress-id {
    width: 2px;
    height: 0%;
    background-color: rgb(0, 157, 255);
}


.btn-choice-image {
    background: rgb(0, 157, 255);
    border-radius: 3px;
    border: 1px solid #888;
    color: white;
    padding: 5px;
    font-size: 9px;
}

#choiceImage {
    width: 60px;
    height: 60px;
    color: #666;
}

.name-and-cost-and-sale-procent {
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inp-class {
    padding: 5px;
    background: none;
    border: 1px solid #999;
    color: black;
    margin-top: 2px;
    font-size: 9px;
    outline-color: rgb(0, 157, 255);
}

</style>