<template>
    <div class="refs" id="refs">
        <h2 style="text-align:center;" id="myRefLink">https://t.me/trollcoin_test_bot?start={{ userId }}</h2>

        <h3 style="margin-top: 30px;font-family: 'Poppins', sans-serif;font-weight: 500;">Rewards? In this economy?</h3>

        <button disabled>Copy</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userId: null
        }
    },
    mounted() {
        const tg = window.Telegram.WebApp
        const user = tg.initDataUnsafe.user

        this.userId = user.id
    }
}
</script>