<template>

    <footer class="footer">
        <div class="container">
            <div class="row">

                <section>
                    <div class="footer__logo footer__logo-col">
                        <router-link :to="{name: 'iMain'}">
                            <img src="images/logo.svg" alt="" height="100px">
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
    background: grey;
}

.footer__logo-col {
    display: block;
}
</style>
