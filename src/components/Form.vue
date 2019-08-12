<template>
    <div>
        <my-header :cartItemCount="cartItemCount"></my-header>

        <div class="wrapper">
            <form class="form">

                <section class="row form__header">
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

                <div class="form__content">
                    <section class="form-group form-group__row">
                        <label for="first-name">First Name: </label>
                        <input type="text"
                            v-model.trim="order.firstName"
                            class="form-control"
                            name="first-name">
                    </section>

                    <section class="form-group form-group__row">
                        <label for="last-name">Last Name: </label>
                        <input type="text"
                            v-model.trim="order.lastName"
                            class="form-control"
                            name="last-name">
                    </section>

                    <section class="form-group form-group__row">
                        <label for="email">E-mail: </label>
                        <input type="email"
                            v-model.lazy="order.userEmail"
                            class="form-control"
                            name="email">
                    </section>

                    <section class="form-group form-group__row">
                        <label for="city">City: </label>
                        <input type="text"
                            v-model="order.userCity"
                            class="form-control"
                            name="city">
                    </section>

                    <section class="form-group form-group__row">
                        <label for="state">State: </label>
                        <select name="state"
                            v-model="order.userState"
                            class="form-control__select">
                            <option disabled value="">State</option>
                            <option v-for="(state, key) in states"
                                :value="state"
                                class="form-control__option">
                                    {{ key }}
                            </option>
                        </select>
                    </section>

                    <section class="form-group form-group__row">
                        <label for="zip">Zip/ Postal Code: </label>
                        <input type="number"
                            v-model.number="order.userZip"
                            class="form-control"
                            name="zip">
                    </section>
                </div>

                <section class="form-group form-group__submit">
                    <button type="submit"
                        class="btn btn__form"
                        @click="submitForm">Place Order
                    </button>
                </section>

            </form>

            <pre class="information">
                <ul class="information__list">
                    <li class="information__item">First Name: <span>{{ order.firstName }}</span></li>
                    <li class="information__item">Last Name:  <span>{{ order.lastName }}</span></li>
                    <li class="information__item">Email:      <span>{{ order.userEmail }}</span></li>
                    <li class="information__item">City:       <span>{{ order.userCity }}</span></li>
                    <li class="information__item">Zip:        <span>{{ order.userZip }}</span></li>
                    <li class="information__item">State:      <span>{{ order.userState }}</span></li>
                    <li class="information__item">Gift:       <span>{{ order.gift }}</span></li>
                    <li class="information__item">Method:     <span>{{ order.method }}</span></li>
                </ul>    
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');

.form__header {
    font-size: 21px;
    line-height: 35px;
    margin: 15px 0;
    padding: 10px;
    background-color: #00fe32;
    border: solid 1px #00f330;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 100%);
}

.form__content {
    max-width: 400px;
    margin: 10px auto;
    padding: 15px 7px;
}

.form-group__row {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-control {
    font-family: 'Satisfy', cursive;
    font-size: 19px;
    text-align: center;
    width: 60%;
    height: 25px;
    color: #001c42;
    padding: 0 10px;
    border: solid 1px #001c42;
    background: #fbfbfb;
}

.form-control__select {
    padding: 5px;
    border-radius: 15px;
    background-color: #001c42;
    color: white;
}

.form-control__select:hover {
    cursor: pointer;
}

.form-control__select:focus {
    outline-offset: inherit;
    outline: inherit;
}

.form-group__submit {
    display: flex;
    margin: 15px 0;
    padding: 10px;
    background-color: #00fe32;
    border: solid 1px #00f330;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 100%);
}

.btn__form {
    margin: 0 auto;
    width: 50%;
    background-color: #001c42;
    color: white;
    border-radius: 15px;
    box-shadow:0px 0px 22px 14px rgba(206,214,248,0.68)inset;
    -webkit-box-shadow:0px 0px 22px 14px rgba(206,214,248,0.68)inset;
    -moz-box-shadow:0px 0px 22px 14px rgba(206,214,248,0.68)inset;
}

.information {
    font-family: 'Special Elite', cursive;
    font-size: 18px;
    max-width: 400px;
    min-width: 280px;
    margin: 10px auto;
    padding: 15px 7px;
}

.information__list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 28px;
    display: flex;
    flex-direction: column;
}

.information__item {
    margin: 0;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    border-bottom: 1px solid #001c42;
}

</style>
