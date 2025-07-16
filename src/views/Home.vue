<template>
    <div class="home" id="main">
            <div class="myCoins">
                <div class="topBar">
                    <div id="ton-connect"></div>
                    <p id="level">Level: King</p>
                </div>

                <div>
                    <img src="../assets/main.png" width="160" alt="Trollcoin">
                    <h1 id="h1">{{ coins.toLocaleString('en-US') }} $TCOIN</h1>

                    <div class="userMiniInfos">
                        <h4>Tasks: {{ tasks }}</h4>
                        <h4>Ref: {{ refs }}</h4>
                        <h4 id="toDay">Day: {{ day }}</h4>
                    </div>
                </div>
            </div>
            <Tasks :daily-bonus="dailyBonus" :today-coins="todayCoins" @claim-bonus="claimBonus"/>
        </div>


        <div class="gift" :class="{ active: dailyBonus}" id="gift">
            <img src="../assets/bonus.png" width="120" alt="Trollcoin">
            <h1>Claim your daily reward</h1>

            <p>Earn a $TCOIN bonus every day by using our mini-app!</p>

            <h2>Day {{ day }}</h2>

            <button id="claim1k" @click="claimBonus">CLAIM +{{ todayCoins.toLocaleString('en-US') }}</button>
        </div>
</template>

<script>
import Tasks from '../components/Tasks.vue'
import { TonConnectUI } from '@tonconnect/ui'

export default {
    components: {
        Tasks
    },
    data() {
        return {
            coins: 0,
            tasks: 5,
            refs: 0,
            day: 0,
            dailyBonus: false,
            todayCoins: 0
        }
    },
    methods: {
        claimBonus() {
            this.coins += this.todayCoins

            this.dailyBonus = false
            this.day++

            localStorage.setItem('coins', this.coins)
            localStorage.setItem('dayCount', this.day)
            const today = new Date().toLocaleDateString()
            localStorage.setItem('lastClaimed', today)

            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        },
        setupStuff() {
            const savedCoins = Number(localStorage.getItem('coins')) || 0
            this.coins = savedCoins

            const dayCount = localStorage.getItem('dayCount') || 1
            this.day = Number(dayCount)

            const lastClaimed = localStorage.getItem('lastClaimed') || null
            const today = new Date().toLocaleDateString()
            if(today !== lastClaimed) {
                this.dailyBonus = true
            }
            this.todayCoins = (dayCount * 1000)

            const tonConnectUI = new TonConnectUI({
                manifestUrl: 'https://utopialf.github.io/trollcoin/tonconnect-manifest.json',
                buttonRootId: 'ton-connect'
            });

            tonConnectUI.uiOptions = {
                twaReturnUrl: 'https://t.me/trollcoin_test_bot'
            };
        }
    },
    watch: {
        $route() {
            this.setupStuff()
        }
    },
    mounted() {
        this.setupStuff()
    }
}
</script>