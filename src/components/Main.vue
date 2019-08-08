<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>
        <main>
            <div class="container products">

                <div class="products__list" v-for="product in sortedProducts">
                    <section class="product product__link">
                        
                        <router-link :to="{ name: 'Id', params: { id: product.id }}">

                            <h2 class="product__title">
                                {{ product.title }}
                            </h2>

                            <figure class="product__image-wrapper">

                                <img class="product__image" 
                                    v-bind:src="product.image" 
                                    v-bind:alt="product.id">
                                                
                            </figure>

                        </router-link>

                        <div class="product__desc-col">
                            
                            <div class="row">

                                <div class="rating">
                                    <i class="far fa-star"
                                        :class="{'fas': checkRating(n, product)}"
                                        v-for="n in 5"></i>
                                </div>

                                <p class="product__price">
                                    {{ product.price | formatPrice }}
                                </p>
                            </div>

                            <button class="btn btn__add" 
                                v-on:click="addToCart(product)"
                                v-if="canAddToCart(product)">
                                Add to cart
                            </button>
                            <button class="btn btn__add-disabe" v-else disabled>
                                Limit amount
                            </button>

                            <transition name="bounce" mode="out-in">
                                <span class="inventory-message"
                                    v-if="deltaCountProduct(product) === 0"
                                    key="1">
                                    All out!
                                </span>
                                <span class="inventory-message"
                                    v-else-if="deltaCountProduct(product) < 5"
                                    key="0">
                                    Only {{ deltaCountProduct(product) }} left!
                                </span>
                                <span class="inventory-message"
                                    v-else key="">
                                    By Now!
                                </span>
                            </transition>

                        </div>

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
import { mapGetters } from 'vuex';

export default {
    name: 'imain',
    data() {
        return {
            cart: []
        }
    },
    components: { MyHeader, MyFooter },
    computed: {
        ...mapGetters([
            'products'
        ]),
        cartItemCount: function() {
            return this.cart.length || '';
        },
        sortedProducts() {
            if(this.products.length > 0) {
                let productsArray = this.products.slice(0);

                function compare(a, b) {
                    if(a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    }
                    if(a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                }
                return productsArray.sort(compare);
            }
        }
    },
    methods: {
        addToCart(aProduct) {
            this.cart.push( aProduct.id );
        },
        canAddToCart(aProduct) {
            return aProduct.availableInventory > this.cartCount(aProduct.id);
        },
        cartCount(id) {
            let count = 0;
            for(let i = 0; i < this.cart.length; i++) {
                if(this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Submited!!');
        },
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0;
        },
        deltaCountProduct: function(aProduct) {
            return aProduct.availableInventory - this.cartCount(aProduct.id);
        }
    },
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
    created: function() {
        this.$store.dispatch('initStore')
    }
}
</script>

<style scoped>
a { text-decoration: inherit; }

.product__title { text-decoration: inherit; }

.bounce-enter-active {
    animation: shake .72s cubic-bezier(.37, .07, .19, .97) both;
    transform: translate(0);
    backface-visibility: hidden;
}
@keyframes shake {
    10%, 90% { color: red; transform: translate(-1px); }
    20%, 80% { transform: translate(2px); }
    30%, 50%, 70% { color: red; transform: translate(-4px); }
    40%, 60% { transform: translate(4px); }
}
</style>
