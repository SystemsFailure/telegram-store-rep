<template>
    <div class="main-class-home-comp">
        <!-- <div class="ads-">
            <span>Реклама</span>
        </div> -->
        <div class="inner-cont-home">

            <div class="box-preview">
                <span class="LOGO">Store X</span>
                <span class="preview-site">
                    This is an app for those who invest in stocks. The users can monitor their
                     shares, see the latest news about companies and discuss the stock market with their friends.
                </span>
            </div>
            <div class="view-btn-line">
                <div class="viewBtn">show catalog</div>
            </div>
            <div class="swiper-container">
                <!-- <div class="inline-title-sale"><span>Самые горячие предложения, распродажа дня</span></div> -->
                <swiper
                class="swiper"
                :slides-per-view="3"
                :space-between="10"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                >
                    <swiper-slide class="slide" v-for="prod in listSaleProduct" :key="prod.id">
                        <img class="img-prod" :src="require('@/assets/' + prod.imgUrl)" alt="">
                        <div class="info-box">
                            {{ prod.cost }}
                            {{ prod.title }}
                            <div class="saleCount">{{ prod.sale+'%' }}</div>
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
                {id: 0, title: 'Шапка', imgUrl: '07.png', cat: 'Cloth', sale: '44', cost: '1499'},
                {id: 1, title: 'Джинсы', imgUrl: '23.png', cat: 'Cloth', sale: '52', cost: '699'},
                {id: 2, title: 'Кеды', imgUrl: '19.png', cat: 'Cloth', sale: '23', cost: '1299'},
                {id: 3, title: 'Очки', imgUrl: '13.png', cat: 'Cloth', sale: '10', cost: '899'},
                {id: 4, title: 'Шорты', imgUrl: '03.png', cat: 'Cloth', sale: '58', cost: '2399'},
                {id: 5, title: 'Красовка', imgUrl: '25.png', cat: 'Cloth', sale: '33', cost: '1599'},
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
    /* position: absolute; */
    width: 100%;
    height:100px;
    /* bottom: 0; */
}


.LOGO {
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
    border: 1px solid #333;
    border-radius: 10px;
    position: relative;
    padding: 8px;
    background: url('@/assets/LOGOPRO2.jpg');
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
    font-size: 10px;
}

.box-preview {
    width: 60%;
    display:flex;
    flex-direction:column;
    color: white;
}

.preview-site {
    width: 100%;
    color: #333;
}

.inline-title-sale {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

}

.swiper {
    width: 100%;
    bottom: -200px;
}

.slide {
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
    transform: translateX(10px) translateY(-35px);
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
    align-items: center;
    /* justify-content: center; */
    color: white;
}

.img-prod {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border:2px solid #222;
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