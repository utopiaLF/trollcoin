<template>
    <div class="stat" id="stat">
            <h1><i class="bi bi-clipboard-data"></i> Top users</h1>

            <div class="meBox">
                <h3>My Account</h3>
                <div class="me">
                    <h4><i class="bi bi-person-fill"></i> <span id="myName">{{ firstname }}</span></h4>
                    <p id="meCoins">Coins: 486k</p>
                </div>
            </div>

            <div class="topUser">
                <h4><i class="bi bi-person-fill"></i> user</h4>
                <p>Coins: 5,000,000</p>
            </div>
            <div class="topUser">
                <h4><i class="bi bi-person-fill"></i> user</h4>
                <p>Coins: 78,403</p>
            </div>
            <div class="topUser">
                <h4><i class="bi bi-person-fill"></i> user</h4>
                <p>Coins: 1,380,400</p>
            </div>
            
        </div>
</template>

<script>
export default {
    data() {
        return {
            firstname: null
        }
    },
    mounted() {
        const tg = window.Telegram.WebApp
        const user = tg.initDataUnsafe.user

        this.firstname = user.first_name
    }
}
</script>