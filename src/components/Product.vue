<template>
    <div>
        <my-header></my-header>

        <main class="wrapper product">

            <h2>{{ product.title }}</h2>
            <section class="row">

                <small>This is the id {{  $route.params.id }}</small>
                <div class="rating">
                    <i class="far fa-star"
                        :class="{'fas': checkRating(n, product)}"
                        v-for="n in 5"></i>
                </div>

            </section>   

            <div class="product__wrapper">
                <figure>
                    <img :src="product.image" 
                        class="photo"
                        alt="the picture product">
                </figure>

                <div class="product__desc-col">

                    <h4>Description:</h4>
                    <p v-html="product.description" class="product__desc-text"></p>

                    <div class="row price">
                        <h4>Price:</h4>
                        <p class="product__price">
                            {{ product.price | formatPrice }}
                        </p>
                    </div>

                    <section class="wrapper">
                        <button @click="edit" 
                            class="btn btn__long btn__long-green">
                                Edit Product
                        </button>
                        <router-view></router-view>
                    </section>
                </div>
            </div>
        </main>

        <my-footer></my-footer>

    </div>
</template>

<script>
import MyHeader from './Header.vue';
import MyFooter from './Footer.vue';
import axios from 'axios';

export default {
    data() {
        return {
            product: {}
        }
    },
    components: { MyHeader, MyFooter },
    filters: {
        formatPrice: function(price) {
            if(!parseInt(price)) { return ''; }

            if(price > 99999) {
                let priceString = (price/100).toFixed(2),
                    priceArray  = priceString.split('').reverse(),
                    index       = 3;

                while(priceArray.length > index + 3) {
                    priceArray.splice(index+3, 0, ' ');
                    index += 4;
                }

                return '$' + priceArray.reverse().join('');
            } else {
                return '$' + (price/100).toFixed(2);
            }
        }
    },
    methods: {
        edit() {
            this.$router.push({name: 'Edit'})
        },
        checkRating(n, product) {
            return product.rating - n >= 0;
        },
    },
    created() {
        axios.get('http://127.0.0.1:8080/db/products.json')
        .then((response) => {
            this.product = response.data.products.filter(
                data => data.id == this.$route.params.id)[0];
            this.product.image = '../../' + this.product.image
        })
    }
}
</script>

<style scoped>
h2 {
    width: 100%;
    text-align: center;
}

h4 {
    margin-left: 20px;
    font-size: 25px;
}

p {
    line-height: 23px;
    font-size: 17px;
}

figure { 
    float: left;
    width: 50%;
    height: 100%;
    margin: 27px 25px;
    shape-outside: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
}

.row { align-items: baseline; }

.photo {
    width: 100%;
    max-height: 300px; 
}

.price { justify-content: flex-start; }

.product__price { margin-left: 12px; }

.product__desc-col {
    max-width: 700px;
    margin: 0 auto;
}

.product__wrapper {
    padding-bottom: 25px;
    background-color: rgba(0, 0, 0, 1);
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%);
}

</style>
 