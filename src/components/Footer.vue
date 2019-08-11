<template>

    <footer class="footer">
        <div class="container">
            <div class="row">

                <section>
                    <div class="footer__logo footer__logo-col">
                        <router-link :to="{name: 'iMain'}">
                            <img src="/images/logo.svg" alt="" height="40px">
                        </router-link>
                        <small>DinoStore</small>
                    </div>
                </section>

                <section></section>

                <section></section>

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
</style>
