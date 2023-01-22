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
                <div class="item" v-for="it in listProducts" :key="it.id" @click="openViewProduct">
                    <div class="count-pay" style="font-size: 10px;">{{ '16K купили' }}</div>
                    <div class="sale-box">{{ it.sale + '%' }}</div>
                    <div class="event-box">{{ 'some event' }}</div>
                    <img class="image" :src="require('@/assets/' + it.imgUrl)" alt="" srcset="">
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
                        <span style="font-size: 12px;">{{ 'Nike' }}</span>
                        <div class="wrapper">
                            <span class="title-box">
                                {{ it.title }}
                            </span>
                            <span style="font-size: 9px;">{{ 'отзывы' }} ({{ '356' }})</span>
                        </div>
                    </div>
                </div>
                <div class="pagination">
                    <div class="inner-content-pagin">
                        <div class="item-pagination" v-for="itPagination in listProducts.length" :key="itPagination">
                            {{ 10 }}
                        </div>
                        <div class="three-points">...</div>
                        <div class="last-element">Следующая часть</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            listProducts: [
                {id: 0, title: 'Джинсы Ласкут', cat: 'Jens', imgUrl: '03.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 1, title: 'Шорты Ласкут', cat: 'Jens', imgUrl: '23.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 2, title: 'Калготки Ласкут', cat: 'Jens', imgUrl: '25.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 3, title: 'Руьашка Ласкут', cat: 'Jens', imgUrl: '07.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 4, title: 'Брюки Ласкут', cat: 'Jens', imgUrl: '13.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 5, title: 'Шапка Ласкут', cat: 'Jens', imgUrl: '19.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 6, title: 'Худи Ласкут', cat: 'Jens', imgUrl: '03.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 7, title: 'Перчатки Ласкут', cat: 'Jens', imgUrl: '07.png', cost: '1399', sale: '56', countSale: '1999'},
                {id: 8, title: 'Перчатки Ласкут', cat: 'Jens', imgUrl: '23.png', cost: '1399', sale: '56', countSale: '1999'},
            ],
        }
    },
    methods: {
        ...mapMutations('contentModule', {
            openViewProduct: 'openViewProductComp',
            closeViewProduct: 'closeViewProductComp',
        })
    }
}
</script>
<style scoped>

.pagination {
    position: absolute;
    width: 100%;
    height: 30px;
    /* background-color: red; */
    bottom: 0;
    left: 0;
    color: black;
}

.inner-content-pagin {
    padding: 5px;
    display: flex;
    align-items: center;
}

.item-pagination {
    margin-left: 5px;
}

.three-points {
    margin-left: 5px;

}

.last-element {
    margin-left: 5px;
    font-size: 12px;
}

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
    position: relative;
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
    padding-bottom: 60px;
    list-style: none;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.item {
    position: relative;
    width: 45%;
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
    font-size: 9px;
    line-height: 10px;
    color: #999;
    font-weight: 400;
}

.cost-sale {
    width: 100%;
    display: flex;
    font-size: 9px;
    line-height: 20px;
}

.cost- {
    font-size: 9px;
    line-height: 20px;
    color: #242424;
    font-weight: 700;
    margin-right: 10px;
}

.sale- {
    font-size: 9px;
    line-height: 16px;
    color: #8b8b8b;
}

.count-pay {
    font-size: 9px;
    position: absolute;
    transform: translateX(-45px) translateY(-115px);
    padding: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
    /* border-radius: 10px; */
    color: white;
    background: linear-gradient(90deg, rgba(252,59,34,1) 0%, rgba(252,59,34,0.30015756302521013) 35%, rgba(253,148,11,1) 100%);
}

.sale-box {
    font-size: 9px;
    position: absolute;
    transform: translateX(-60px) translateY(60px);
    padding: 5px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: white;
    background: linear-gradient(90deg, rgba(252,59,34,1) 0%, rgba(252,59,34,0.30015756302521013) 35%, rgba(253,148,11,1) 100%);
}

.event-box {
    font-size: 9px;
    position: absolute;
    transform: translateX(-50px) translateY(40px);
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
    font-size: 9px;
    justify-content: space-between;
}

.uiBtn {
    font-size: 9px;

    margin-top: 5px;
    padding: 3px 10px 3px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgb(0 0 0 / 8%);
    border-radius: 8px;
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