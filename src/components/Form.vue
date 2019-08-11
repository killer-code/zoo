<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>

        <div class="wrapper">
            <form class="form">

                <section class="row">
                    <section class="form-group">
                        <input type="checkbox"
                            value="true"
                            :true-value="order.sendGift"
                            :false-value="order.dontSendGift"
                            v-model="order.gift"
                            name="gift">
                        <label for="gift">Ship is Gift?</label>
                    </section>

                    <section class="form-group">
                        <input type="radio"
                            v-model="order.method"
                            :value="order.home"
                            name="home">
                        <label for="home">Home</label>
                        <input type="radio"
                            v-model="order.method"
                            :value="order.business"
                            name="business">
                        <label for="business">Business</label>
                    </section>
                </section>

                <section class="form-group">
                    <label for="first-name">First Name: </label>
                    <input type="text"
                        v-model.trim="order.firstName"
                        class="form-control"
                        name="first-name">
                </section>

                <section class="form-group">
                    <label for="last-name">Last Name: </label>
                    <input type="text"
                        v-model.trim="order.lastName"
                        class="form-control"
                        name="last-name">
                </section>

                <section class="form-group">
                    <label for="email">E-mail: </label>
                    <input type="email"
                        v-model.lazy="order.userEmail"
                        class="form-control"
                        name="email">
                </section>

                <section class="form-group">
                    <label for="city">City: </label>
                    <input type="text"
                        v-model="order.userCity"
                        class="form-control"
                        name="city">
                </section>

                <section class="form-group">
                    <label for="state">State: </label>
                    <select name="state"
                        v-model="order.userState"
                        class="form-control">
                        <option disabled value="">State</option>
                        <option v-for="(state, key) in states"
                            :value="state">
                                {{ key }}
                        </option>
                    </select>
                </section>

                <section class="form-group">
                    <label for="zip">Zip/ Postal Code: </label>
                    <input type="number"
                        v-model.number="order.userZip"
                        class="form-control"
                        name="zip">
                </section>

                <section class="form-group">
                    <button type="submit"
                        class="btn"
                        @click="submitForm">Place Order
                    </button>
                </section>

            </form>

            <pre>
                First Name: {{ order.firstName }}
                Last Name:  {{ order.lastName }}
                Email:      {{ order.userEmail }}
                City:       {{ order.userCity }}
                Zip:        {{ order.userZip }}
                State:      {{ order.userState }}
                Gift:       {{ order.gift }}
                Method:     {{ order.method }}
            </pre>

        </div>

        <my-footer></my-footer>

    </div>
</template>

<script>
import MyHeader from './Header.vue';
import MyFooter from './Footer.vue';

export default {
    name: 'Form',
    props: ['cartItemCount'],
    data() {
        return {
            states: {
                AL: 'Alabama',
                AR: 'Arizona',
                CA: 'California',
                NV: 'Nevada',
            },
            order: {
                gift: 'Send as a gift',
                sendGift: 'Send as a gift',
                dontSendGift: 'Do not send a gift',
                method: 'home',
                home: 'home',
                business: 'business',
                firstName: '',
                lastName: '',
                userEmail: '',
                userState: '',
                userCity: '',
                userZip: '',
            }
        }
    },
    components: { MyHeader, MyFooter },
    methods: {
        submitForm() {
            alert('Submitted')
        }
    }
}
</script>
