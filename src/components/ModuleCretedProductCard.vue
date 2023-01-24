<template>
    <div class="main-class-module-created-card">
        <div class="inner">
            <div class="title"><span style="margin-left: auto;">Создать продуктовую карточку</span> <i style="transform: translateX(-15px); color: #333; margin-left: auto; font-size: 12px;" class="fi fi-bs-cross"></i></div>
            <div class="error-line"><span id="error-text">Вы не ввели название продукта, пожалуйста заполните данное поле, оно обязательно к заполнению</span><i style="padding:5px; transform: translateX(-0px); color: #fff; margin-left: auto; font-size: 10px;" class="fi fi-bs-cross"></i></div>
            <div class="wrapper-container"></div>
            <div class="wrapper-box-deep-level">
                <div class="img-box">
                    <div class="wrapper-inline">
                        <span id="list-photos">i</span>
                    </div>
                    <img src="@/assets/openIMG.png" alt="" id="choiceImage">
                    <button class="btn-choice-image">Загрузить фотографии</button>
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
                <button class="btn-conf btn-choice-image">Создать</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.title {
    width: 100%;
    padding-top: 20px;
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
    padding-top: 50px;
    margin-top: 10px;
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
    margin-top: 10px;
    padding: 5px 15px 5px 15px;
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
    padding: 5px 10px 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border: 1px solid #999;
    transform: translateX(-25px) translateY(-1px);
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
    width: 80px;
    height: 80px;
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