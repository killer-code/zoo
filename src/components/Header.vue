<template>

    <header class="header">
        <div class="row">
            <div class="container">

                <div class="row  header_green">

                    <div class="head-title logo">
                        <router-link :to="{name: 'iMain'}">
                            <img src="/images/logo.svg" alt="" height="60px">
                        </router-link>
                        <small>DinoStore</small>
                    </div>

                    <div class="cart__wrap">

                        <router-link 
                            active-class="cart__btn-active"
                            tag="button"
                            class="cart cart__btn"
                            :to="{name: 'Form'}">
                            <div class="row cart__content">
                                <i class="fas fa-shopping-cart"></i>

                                <span class="cart__count">
                                    {{ cartItemCount }}
                                </span>
                            </div>
                        </router-link>

                    </div>

                </div>

                <div class="wrapper">
                    <h1 v-html="tagline"></h1>
                </div>

            </div>
        </div>    
    </header>

</template>

<script>
export default {
    name: 'my-header',
    data () {
        return {
            sitename: 'Vue.js Pet Deport',
            tagline: `The first and only store where you can buy a dinosaur!`
        }
    },
    props: ['cartItemCount'],
    methods: {
        
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

.logo {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.container {
    margin: 0;
}
</style>
