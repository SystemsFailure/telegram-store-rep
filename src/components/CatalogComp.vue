<template>
    <div class="main-class-catalog-comp">
        <div class="inner">
            <div class="sorted-inline">
                <div class="popular uiBtn"><i class="fi fi-bs-sort-alt"></i>Популярность</div>
                <div class="category uiBtn">Категория<i class="fi fi-bs-angle-down"></i></div>
                <div class="brand uiBtn">Бренд<i class="fi fi-bs-angle-down"></i></div>
                <div class="cost uiBtn">Цена<i class="fi fi-bs-angle-down"></i></div>
                <div class="countBackView uiBtn">Oтзывы<i class="fi fi-bs-angle-down"></i></div>
            </div>
            <div class="collection">
                <div class="item" v-for="it in listProducts" :key="it.id">
                    <div class="count-pay" style="font-size: 14px;">{{ '16K купили' }}</div>
                    <div class="sale-box">{{ it.sale + '%' }}</div>
                    <div class="event-box">{{ 'some event' }}</div>
                    <img class="image" src="@/assets/23.png" alt="" srcset="">
                    <!-- {{ it.title }} -->
                    <div class="info-box">
                        <div class="cost-sale">
                            <span class="cost-">
                                {{ it.cost + ' Руб' }}
                            </span>
                            <span class="sale-" style="color: #555; text-decoration: line-through;">
                                {{ it.countSale + ' Руб' }}
                            </span>
                        </div>
                        <span>{{ 'Nike' }}</span>
                        <div class="wrapper">
                            <span class="title-box">
                                {{ it.title }}
                            </span>
                            <span style="font-size: 13px;">{{ 'отзывы' }} ({{ '356' }})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listProducts: [
                {id: 0, title: 'Джинсы Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 1, title: 'Шорты Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 2, title: 'Калготки Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 3, title: 'Руьашка Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 4, title: 'Брюки Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 5, title: 'Шапка Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 6, title: 'Худи Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 7, title: 'Перчатки Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
                {id: 8, title: 'Перчатки Ласкут', cat: 'Jens', imgUrl: '', cost: '1399', sale: '56', countSale: '1999'},
            ],
        }
    },
}
</script>
<style scoped>
.main-class-catalog-comp {
    width: 100%;
    height: 100%;
    padding: 10px;
}

.inner {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.collection {
    border-radius: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 100%;
    flex: 0 1 100%;
    padding: 20px;
    list-style: none;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.item {
    position: relative;
    width: 205px;
    height: 350px;
    margin: 0;
    padding:0;
    /* padding: 15px; */
    /* margin-left: 5px; */
    /* border: 1px solid #333; */
    display:flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    /* font-size: 14px; */
    justify-content: center;
    border-radius: 10px;
}

.image {
    width: 100%;
    height: 100%;
    border-radius: 10px;

}

.info-box {
    width: 100%;
}

.wrapper {
    display: flex;
}

.title-box {
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    line-height: 20px;
    color: #999;
    font-weight: 400;
}

.cost-sale {
    width: 100%;
    display: flex;
    
}

.cost- {
    font-size: 14px;
    line-height: 20px;
    color: #242424;
    font-weight: 700;
    margin-right: 10px;
}

.sale- {
    font-size: 12px;
    line-height: 16px;
    color: #8b8b8b;
}

.count-pay {
    position: absolute;
    transform: translateX(-60px) translateY(-160px);
    padding: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 10px; */
    color: white;
    background: linear-gradient(90deg, rgba(252,59,34,1) 0%, rgba(252,59,34,0.30015756302521013) 35%, rgba(253,148,11,1) 100%);
}

.sale-box {
    position: absolute;
    transform: translateX(-75px) translateY(85px);
    padding: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: white;
    background: linear-gradient(90deg, rgba(252,59,34,1) 0%, rgba(252,59,34,0.30015756302521013) 35%, rgba(253,148,11,1) 100%);
}

.event-box {
    position: absolute;
    transform: translateX(-53px) translateY(55px);
    padding: 3px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    background: linear-gradient(90deg, rgb(0, 36, 242) 0%, rgba(252,59,34,0.30015756302521013) 35%, rgb(200, 0, 250) 100%);
}

.sorted-inline {
    width: 100%;
    padding: 5px;
    display:flex;
    align-items: center;
    font-size: 14px;
    justify-content: space-between;
}

.uiBtn {
    font-size: 12px;

    margin-top: 5px;
    /* margin-left: 10px; */
    padding: 3px;
    /* text-overflow: ellipsis; */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgb(0 0 0 / 8%);
    border-radius: 8px;
    /* font-size: 14px; */
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    max-width: 272px;
}
i {
    margin-top: 8px;
    margin-left: 4px;
    color: #666;

}

.fi-bs-sort-alt {
    margin-right: 5px;
    color: #666;
}
</style>