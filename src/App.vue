<template>
    <div>
        <me-head></me-head>
        <div id="content">
            <roulette-circle></roulette-circle>
            <roulette-table></roulette-table>
            <spin></spin>
        </div>
    </div>
</template>

<script>
    import rouletteCircle from "./rouletteCircle";
    import meHead from "./meHead";
    import spin from "./Spin";
    import rouletteTable from "./rouletteTable";

    export default {
        components: {
            rouletteCircle,
            meHead,
            spin,
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