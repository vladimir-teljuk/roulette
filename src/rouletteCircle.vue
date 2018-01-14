<template>
    <div id="circle">
        <sectors></sectors>
        <ball></ball>
    </div>
</template>

<script>
    import sectors from "./Sectors";
    import ball from "./ball";


    export default {
        components: {
            sectors,
            ball
        }
    }
</script>

<style scoped>
    #circle {
        width: 300px;
        height: 300px;
        border-radius: 9999px;
        overflow: hidden;
    }
</style>