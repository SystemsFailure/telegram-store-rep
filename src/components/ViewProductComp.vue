<template>
    <div class="main-class-view-product">
        <div class="inner">
            <div class="inline-close"><i @click="closeViewProduct" style="color: #333; margin-left: auto; font-size: 12px;" class="fi fi-bs-cross"></i></div>
            <div class="content">
                <div class="title-product"><span style="font-size: 12px;">Пальто Серое, Шелк 100%, Не кордиган с большим рукавом</span></div>
                <div class="img-box">

                    <swiper
                    class="swiper"
                        :slides-per-view="1"
                        :space-between="50"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        :navigation="true"
                        :modules="modules"
                    >
                        <swiper-slide class="slide" v-for="it in listPhotos" :key="it.id">
                            <img class="img_" :src="require('@/assets/' + it.name)" alt="" srcset="">
                        </swiper-slide>
                    </swiper>

                </div>

                <div class="info-box">
                    <div class="cost-box">
                        <div class="wrapper0">
                            <span>8899 руб</span>
                            <span style=" margin-left: 8px; font-size: 9px; font-size: 9px; text-decoration: line-through; line-height: 10px; color: #8b8b8b;">11999</span>
                        </div>
                        <div class="count-bays"><span>Более <span style="color: rgb(200, 104, 0);">{{'21300'}}</span> купили</span></div>
                    </div>
                    <div class="color-box">
                        <div class="wrapper1">
                            <span style="color: #8b8b8b;">Цвет: </span><span style="margin-left: 8px;">Черный</span>
                        </div>
                        <div class="count-review"><span>1365 отзывов</span></div>
                    </div>

                    <div class="deep-info-box">
                        <div class="brand-box"><span>GUCCI</span></div>
                        <div class="title-prod-box"><span>Пальто Серое, Шелк 100%, Не кордиган с большим рукавом</span></div>

                        <div class="articule-box">
                            ID: <span class="id-art" id="uid-articule">f56op782fu32</span>
                        </div>
                    </div>

                    <div class="about-product">
                        <div class="description-box">
                            <span style="font-size: 15px;">Описание</span>
                            <span style="line-height: 10px; margin-bottom: 5px;">Кожаная мужская куртка из высококачественной экокожи- актуальная и комфортная вещь в мужском гардеробе. Куртка бомбер мужская - универсальная базовая модель. Куртка косуха черная кожаная отлично</span>
                            <span style="font-size: 12px;">Развернуть описание</span>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            listPhotos: [
                {id: 0, url: '', name: '010.png', size: ''},
                {id: 0, url: '', name: '020.png', size: ''},
                {id: 0, url: '', name: '030.png', size: ''},
                {id: 0, url: '', name: '040.png', size: ''},
            ],
        }
    },

    methods: {
        ...mapMutations('contentModule', {
            closeViewProduct: 'closeViewProductComp'
        })
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
        modules: [Navigation],
      };
    },

    components: {
      Swiper,
      SwiperSlide,
    },
    
}
</script>
<style scoped>

.main-class-view-product {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(188, 188, 188, .7);
    padding: 5px;
    padding-top: 50px;
    z-index: 10;
    font-size: 9px;
}

.inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.content {
    position: relative;
    width: 95%;
    height: 100%;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    overflow: auto;
    display: block;

}

.img-box {
    position: relative;
    width: 100%;
}

.img_ {
    width: 70%;
}
/* INFO */


.info-box {
    margin-top: 60px;
    margin-left: auto;
    width: 100%;
    /* height: 300px; */
    /* background-color: red; */
    padding: 10px;
}

.deep-info-box {
    width: 100%;
    /* height: 100px; */
    padding: 5px;
    margin-top: 20px;
    border-top: 1px solid #999;
}

.about-product {
    width: 100%;
    /* height: 100px; */
    padding: 5px;
    /* margin-top: 20px; */
    border-top: 1px solid #999;
}

.description-box {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
}

.brand-box {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 14px;
}

.title-prod-box {
    width: 100%;
    font-size: 11px;
    padding: 5px;
}

.articule-box {
    font-size: 14px;
    padding: 5px;
}

.id-art {
    font-size: 12px;
    color: rgb(200, 104, 0);
}

.cost-box {
    width: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    font-size: 10px;
}

.wrapper0 {
    width: 80px;
}

.count-bays {
    border-left: 1px solid #333;
    padding-left: 10px;
    margin-left: 10px;
}

.count-review {
    margin-left: 10px;
    border-left: 1px solid #333;
    padding-left: 10px;
    color: rgb(200, 104, 0);

}

.color-box {
    width: 100%;
    padding: 5px;
    display: flex;
    color: black;
    font-size: 9px;
}

.wrapper1 {
    width: 80px;
}

.title-product {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}



/* INFO */


.swiper {
    width: 100%;
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

.inline-close {
    width: 100%;
    /* background-color: red; */
    padding: 10px 10px 5px 0px;
    display: flex;
    align-items: center;
}

i:hover {
    cursor: pointer;
    opacity: .7;
}

</style>