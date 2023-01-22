<template>
    <div class="main-class-home-comp">
        <!-- <div class="ads-">
            <span>Реклама</span>
        </div> -->
        <div class="inner-cont-home">

            <div class="box-preview">
                <span class="LOGO">Store X</span>
                <span class="preview-site">
                    Сайт stockmann.ru – официальный интернет-магазин сети СТОКМАНН.
                     В едином каталоге собраны товары для всей семьи - мужская, женская и детская одежда, обувь, косметика и парфюмерия, аксессуары,
                     а также товары для дома – посуда, текстиль, аксессуары для ванной, предметы интерьера и многое другое.
                </span>
            </div>
            <div class="view-btn-line">
                <div class="viewBtn">show catalog</div>
            </div>
            <div class="swiper-container">

                <!-- <swiper
                class="swiper"
                :slides-per-view="3"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                >
                    <swiper-slide class="slide" v-for="prod in listSaleProduct" :key="prod.id">
                        <img class="img-prod" :src="require('@/assets/' + prod.imgUrl)" alt="">
                        <div class="info-box">
                            <span>
                                {{ prod.cost+' Руб' }}
                                <span style="color: #555; text-decoration: line-through;">
                                    {{ prod.sale_+' Руб' }}
                                </span>
                            </span>
                            <span>
                                {{ prod.title }}
                            </span>
                            <div class="saleCount">{{ prod.sale+'%' }}</div>
                        </div>
                    </swiper-slide>
                </swiper> -->

                <div class="inline-title-sale"><span>Самые горячие предложения, распродажа дня</span></div>
                <swiper
                class="swiper"
                :slides-per-view="3"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                >
                    <swiper-slide class="slide" v-for="prod in listSaleProduct" :key="prod.id">
                        <div class="img-container">
                            <img class="img-prod" :src="require('@/assets/' + prod.imgUrl)" alt="">
                            <div class="saleCount">{{ prod.sale+'%' }}</div>
                        </div>
                        <div class="info-box">
                            <span>
                                {{ prod.cost+' Руб' }}
                                <span style="color: #555; text-decoration: line-through;">
                                    {{ prod.sale_+' Руб' }}
                                </span>
                            </span>
                            <span>
                                {{ prod.title }}
                            </span>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    data() {
        return {
            listSaleProduct: [
                {id: 0, title: 'Шапка Bruclin', imgUrl: '07.png', cat: 'Cloth', sale: '44', cost: '1499', sale_: '1999'},
                {id: 1, title: 'Джинсы Jole mo', imgUrl: '23.png', cat: 'Cloth', sale: '52', cost: '699', sale_: '1299'},
                {id: 2, title: 'Кеды picture color', imgUrl: '19.png', cat: 'Cloth', sale: '23', cost: '1299', sale_: '1599'},
                {id: 3, title: 'Очки detrix 3D', imgUrl: '13.png', cat: 'Cloth', sale: '10', cost: '899', sale_: '999'},
                {id: 4, title: 'Шорты upper kit', imgUrl: '03.png', cat: 'Cloth', sale: '58', cost: '2399', sale_: '2899'},
                {id: 5, title: 'Красовка IO-Cloth', imgUrl: '25.png', cat: 'Cloth', sale: '33', cost: '1599', sale_: '1899'},
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
}
</script>
<style scoped>
.main-class-home-comp {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 50px; */
}

.swiper-container {
    position: relative;
    width: 100%;
    height:100px;
    /* bottom: 0; */
}


.LOGO {
    color: black;
    font-size: 45px;
    font-family: cursive;
    font-weight: bold;
}


.ads- {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    top: 0;
    background: var(--background-gr);
}

.inner-cont-home {
    width: 95%;
    height: 95%;
    /* border: 1px solid #f98100; */
    box-shadow: 2px 2px 15px #222;
    border-radius: 10px;
    position: relative;
    padding: 8px;
    /* background: url('@/assets/LOGOPRO2.jpg'); */
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.view-btn-line {
    width: 100%;
}

.viewBtn {
    font-size: var(--fSize);
    padding: 8px;
    color:white;
    background: var(--background-gr);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    border-radius: 8px;
    margin-top: 10px;
    font-family: "Gill Sans", sans-serif;
    text-transform: uppercase;
    font-size: var(--fSize);
}

.viewBtn:hover {
    cursor: pointer;
    opacity: .8;
    transition: .3s;
}

.box-preview {
    width: 100%;
    display:flex;
    flex-direction:column;
    color: white;
}

.preview-site {
    line-height: 16px;
    color: #8b8b8b;
    margin: 0 0 10px;
    width: 100%;
    color: #333;
    font-size: 10px;
}

.inline-title-sale {
    font-size: var(--fSize);
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, rgba(252,59,34,1) 100%, rgba(252,59,34,0.30015756302521013) 100%, rgba(253,148,11,1) 100%);
    bottom: 60px;
    border-radius: 5px;
    color: white;
    padding: 5px;
}

.swiper {
    width: 100%;
    /* bottom: -100px; */
    bottom: -50px;
}

.slide {
    position: relative;
    font-size: var(--fSize);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* padding: 4px; */
    /* background: linear-gradient(90deg, rgba(252,59,34,1) 0%, rgba(252,59,34,0.30015756302521013) 35%, rgba(253,148,11,1) 100%); */
    border-radius: 15px;
}

.saleCount {
    position: absolute;
    padding: 2px;
    transform: translateY(-35px);
    color: white;
    background: linear-gradient(90deg, rgba(252,59,34,1) 0%, rgba(252,59,34,0.30015756302521013) 35%, rgba(253,148,11,1) 100%);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-box {
    position: relative;
    width: 100%;
    padding: 4px;
    display: flex;
    /* align-items: center; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

.img-prod {
    position: relative;

    width: 100%;
    height: 100%;
    border-radius: 15px;
    /* border:2px solid #222; */
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.img-prod:hover {
    cursor: pointer;
    opacity: .8;
}

</style>