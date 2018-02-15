<template>
    <div>
        <me-head></me-head>
        <div id="content">
            <roulette-circle></roulette-circle>
            <roulette-table></roulette-table>
            <bets-container></bets-container>
        </div>
    </div>
</template>

<script>
    import rouletteCircle from "./Circle/rouletteCircle";
    import meHead from "./meHead";
    import rouletteTable from "./Table/rouletteTable";
    import BetsContainer from "./Place A Bet/BetsContainer"

    export default {
        components: {
            rouletteCircle,
            meHead,
            BetsContainer,
            rouletteTable,
        }
    }
</script>

<style scoped>
     #content {
         margin: 50px auto;
         background-color: #477625;
         width: 1100px;
         height: 600px;
         border-radius: 50px;
     }

</style>