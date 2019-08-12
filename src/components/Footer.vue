<template>

    <footer class="footer">
        <div class="container">
            <div class="row footer__row">

                <section>
                    <div class="footer__logo footer__logo-col">
                        <router-link :to="{name: 'iMain'}">
                            <img src="/images/logo.svg" alt="" height="40px">
                        </router-link>
                        <small>DinoStore</small>
                    </div>
                </section>

                <section>
                    <address class="address">
                        <i class="fas fa-phone-square address__icon"></i>
                        <a href="tel:+79991725234" class="address__link">+7(999)172-5234</a>
                    </address>

                    <address class="address">
                        <i class="fas fa-envelope address__icon"></i>
                        <a href="mailto:killer_code@bk.ru" class="address__link">killer_code@bk.ru</a>
                    </address>
                </section>

                <section class="social">
                    <a href="https://github.com/killer-code" target="__blank">
                        <i class="fab fa-github social__link"></i>
                    </a>
                    <a href="https://vk.com/dog_bite" target="__blank">
                        <i class="fab fa-vk social__link"></i>
                    </a>
                    <a href="https://t-do.ru/dog_bite" target="__blank">
                        <i class="fab fa-telegram social__link"></i>
                    </a>
                </section>

            </div>
        </div>    
    </footer>

</template>

<script>
export default {
    name: 'my-footer'
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.footer {
    background-color: #b0b0b0;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0) 100%);

    margin-top: 40px;
    padding: 10px;
}

.footer__logo {
    display: flex;
    align-items: center;
    color: black;
}

.footer__row {
    justify-content: space-around;
}

.social {
    background: rgba(0, 0, 0, 0.3);
    border: solid 1px black;
    border-radius: 20px;
}

.social__link {
    font-size: 23px;
    color: white;
    margin: 5px 10px;
}

.address {
    display: flex;
    justify-content: center;
    margin: 5px;
}

.address__link {
    color: black;
    margin: 2px 7px;
    border-bottom: 1px solid black;
}

.address__icon {
    color: black;
    font-size: 19px;
}

</style>
