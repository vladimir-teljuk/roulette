<template>
    <div id="bet">
        <input v-model.number="bet" type="number" value="bet" id="input-bet">
        <button @click="UpBet()" id="up-bet">Up</button>
        <button @click="DownBet()" id="down-bet">Down</button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                bet: 50
            }
        },
        methods: {
            UpBet() {
                if (this.bet < 1000) {
                    this.bet += 50;
                }
            },
            DownBet() {
                if (this.bet > 50) {
                    this.bet -= 50;
                }
            }
        }

    }
</script>

<style scoped>
    #bet {

    }

</style>