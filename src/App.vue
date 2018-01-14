<template>
    <div>
        <me-head></me-head>
        <roulette-circle></roulette-circle>
        <spin></spin>
    </div>
</template>

<script>
    import rouletteCircle from "./rouletteCircle";
    import meHead from "./meHead";
    import spin from "./Spin"



    export default {
        components: {
            rouletteCircle,
            meHead,
            spin
        }
    }
</script>

<style scoped>

</style>