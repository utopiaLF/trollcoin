<template>
    <div id="tasks" class="tasks">
                <h2 class="taskTxt">Tasks</h2>
        
                <div class="taskBox" id="dailyBonusTask">
                    <h4><i class="bi bi-calendar-range"></i> Daily tasks</h4>
        
                    <div class="task">
                        <p><i class="bi bi-gift"></i> Daily Gift: +{{ todayCoins.toLocaleString('en-US') }}</p>
        
                        <button class="followBtn" :class="{ claimed: todayCoins}" @click="$emit('claimBonus')">{{ dailyBonus ? 'Claim' : 'Claimed'}} </button>
                    </div>
                    <p class="taskContext">You can earn +500 $TCOIN daily</p>
                    
                    <h4><i class="bi bi-telegram"></i> Follow channels</h4>
        
                    <div class="task">
                        <p>Durov's channel</p>
        
                        <a href="https://t.me/durov" target="_blank" class="followBtn">Go</a>
                    </div>
                    <div class="task">
                        <p>Notcoin community</p>
        
                        <a href="https://t.me/notcoin" target="_blank" class="followBtn">Go</a>
                    </div>
                    <p class="taskContext">This feature isn't ready yet</p>
        
                    <h4><i class="bi bi-link-45deg"></i> Invite others</h4>
                    <div class="task">
                        <p><i class="bi bi-person-plus"></i> Invite your friends</p>
        
                        <span>
                            <router-link to="/refs"><button id="refBtn">Share</button></router-link>
                        </span>
                    </div>
                    <p class="taskContext">This function is under development</p>
        
                    <h4><i class="bi bi-wallet"></i> TON transaction</h4>
                    <div class="task">
                        <p><i class="bi bi-clock-history"></i> Send 0.05 TON</p>
        
                        <button @click="sendTon">Complete</button>
                    </div>
                    <p class="taskContext">Send 0.05TON and earn +1mln $TCOIN</p>
                </div>
            </div>
</template>

<script>
import { TonConnectUI } from "@tonconnect/ui"

export default {
    props: ['todayCoins', 'dailyBonus'],
    emits: ['claimBonus'],
    methods: {
        async sendTon() {
            const transaction = {
                validUntil: Math.floor(Date.now() / 1000) + 60, // expires in 60 sec
                messages: [
                    {
                    address: "UQDTtBHATFoDgXj1ZG0iQtf7M9kuAxcGlVmUIzowq1Goz8PD", // Replace with your real wallet
                    amount: "50000000"
                    },
                ],
            };

            try {
                const result = await TonConnectUI.sendTransaction(transaction);
                alert('Transaction Sent!')
            } catch(error) {
                if(!TonConnectUI.wallet){
                    alert('Pls, connect your TON wallet.')
                } else {
                    alert('Transaction failed')
                }
            }
        }
    }
}
</script>