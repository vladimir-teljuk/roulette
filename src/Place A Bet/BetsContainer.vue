<template>
    <div id="bets-container">
        <bet-size></bet-size>
        <button>Choice type of bet</button>
        <spin></spin>
    </div>
</template>

<script>
    import spin from "./Spin";
    import BetSize from "./BetSize";


    export default {
        components: {
            spin,
            BetSize

        }

    }
</script>

<style scoped>
    #bets-container {
        position: relative;
        width: 400px;
        height: 300px;
        top: -700px;
        left: 700px;
    }

</style>